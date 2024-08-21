import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {
  private grid: boolean[][] = [];
  private rows: number = 0;
  private cols: number = 0;

  constructor() { }

  initializeGrid(rows: number, cols: number): void {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array(rows).fill(null).map(() => Array(cols).fill(false));
  }

  getGrid(): boolean[][] {
    return this.grid;
  }

  randomizeGrid(): void {
    this.grid = this.grid.map(row => row.map(() => Math.random() > 0.7));
  }

  nextGeneration(): void {
    const newGrid = this.grid.map(arr => [...arr]);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const neighbors = this.countNeighbors(i, j);
        if (this.grid[i][j]) {
          newGrid[i][j] = neighbors === 2 || neighbors === 3;
        } else {
          newGrid[i][j] = neighbors === 3;
        }
      }
    }

    this.grid = newGrid;
  }

  private countNeighbors(row: number, col: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = (row + i + this.rows) % this.rows;
        const newCol = (col + j + this.cols) % this.cols;
        count += this.grid[newRow][newCol] ? 1 : 0;
      }
    }
    return count;
  }

  findPatterns(minSize: number = 20, maxSize: number = 50): { x: number, y: number, size: number }[] {
    const patterns: { x: number, y: number, size: number }[] = [];
    for (let size = minSize; size <= maxSize; size += 5) {
      for (let i = 0; i <= this.rows - size; i += Math.floor(size / 2)) {
        for (let j = 0; j <= this.cols - size; j += Math.floor(size / 2)) {
          const patternSize = this.checkPattern(i, j, size);
          if (patternSize > 0) {
            patterns.push({ x: j, y: i, size: patternSize });
          }
        }
      }
    }
    return patterns.slice(0, 10); // Increase the number of patterns detected
  }

  private checkPattern(startRow: number, startCol: number, size: number): number {
    const subGrid = this.grid.slice(startRow, startRow + size).map(row => row.slice(startCol, startCol + size));
    
    for (let patternSize = 2; patternSize <= size / 2; patternSize++) {
      if (size % patternSize === 0) {
        let isPattern = true;
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            if (subGrid[i][j] !== subGrid[i % patternSize][j % patternSize]) {
              isPattern = false;
              break;
            }
          }
          if (!isPattern) break;
        }
        if (isPattern) return patternSize;
      }
    }
    
    return 0;
  }

  hasLife(): boolean {
    return this.grid.some(row => row.some(cell => cell));
  }
}