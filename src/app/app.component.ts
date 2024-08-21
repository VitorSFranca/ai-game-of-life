import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameOfLifeService } from './services/game-of-life.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { GameInfoModalComponent } from './game-info-modal/game-info-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, CommonModule, MatTooltipModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private animationId: number | null = null;
  isPlaying: boolean = false;
  generation: number = 0;
  livingCells: number = 0;
  mostLivingCells: number = 0;
  leastLivingCells: number = 0;
  patterns: { x: number, y: number, size: number }[] = [];
  firstPlay: boolean = true;
  canPlay: boolean = false;
  canStop: boolean = false;
  canClear: boolean = false;
  showStats: boolean = true;

  constructor(private gameOfLifeService: GameOfLifeService, private dialog: MatDialog) {}

  ngOnInit() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      const cellSize = Math.max(3, Math.min(5, Math.floor(Math.min(canvas.width, canvas.height) / 200)));
      const rows = Math.floor(canvas.height / cellSize);
      const cols = Math.floor(canvas.width / cellSize);

      this.gameOfLifeService.initializeGrid(rows, cols);
      this.randomize();

      const drawGrid = () => {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 0.5;

        const grid = this.gameOfLifeService.getGrid();
        this.livingCells = 0;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
            if (grid[i][j]) {
              ctx.fillStyle = 'white';
              ctx.fillRect(j * cellSize, i * cellSize, cellSize - 1, cellSize - 1);
              this.livingCells++;
            }
          }
        }

        // Draw pattern highlights
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.lineWidth = 2;
        for (const pattern of this.patterns) {
          ctx.beginPath();
          ctx.rect(
            pattern.x * cellSize,
            pattern.y * cellSize,
            pattern.size * cellSize,
            pattern.size * cellSize
          );
          ctx.stroke();
        }

        this.mostLivingCells = Math.max(this.mostLivingCells, this.livingCells);
        this.leastLivingCells = Math.min(this.leastLivingCells, this.livingCells);
      };

      const gameLoop = () => {
        this.gameOfLifeService.nextGeneration();
        this.patterns = this.gameOfLifeService.findPatterns(20, 50);
        drawGrid();
        this.generation++;
        if (this.firstPlay) {
          this.mostLivingCells = this.livingCells;
          this.leastLivingCells = this.livingCells;
          this.firstPlay = false;
        } else {
          this.mostLivingCells = Math.max(this.mostLivingCells, this.livingCells);
          this.leastLivingCells = Math.min(this.leastLivingCells, this.livingCells);
        }
        this.animationId = requestAnimationFrame(gameLoop);
      };

      drawGrid();

      this.togglePlay = () => {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          this.firstPlay = true;
          this.canClear = false;
          gameLoop();
        } else {
          if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
          }
          this.canClear = this.gameOfLifeService.hasLife();
        }
      };

      this.clear = () => {
        this.gameOfLifeService.initializeGrid(rows, cols);
        this.generation = 0;
        this.livingCells = 0;
        this.mostLivingCells = 0;
        this.leastLivingCells = 0;
        this.patterns = [];
        this.canPlay = false;
        this.canClear = false;
        drawGrid();
      };

      this.randomize = () => {
        this.gameOfLifeService.randomizeGrid();
        this.canPlay = this.gameOfLifeService.hasLife();
        this.canClear = this.canPlay;
        drawGrid();
      };
    }
  }

  togglePlay(): void {}
  randomize(): void {}
  clear(): void {}
  toggleStats(): void {
    this.showStats = !this.showStats;
  }

  openGameInfo(): void {
    this.dialog.open(GameInfoModalComponent, {
      width: '600px',
    });
  }
}