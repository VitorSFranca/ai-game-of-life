import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-info-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Conway's Game of Life</h2>
    <mat-dialog-content>
      <p>The Game of Life is a cellular automaton devised by mathematician John Conway in 1970.</p>
      <p>It's a zero-player game, meaning its evolution is determined by its initial state, requiring no further input.</p>
      <h3>Rules:</h3>
      <ul>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
      </ul>
      <h3>Learn More:</h3>
      <p>Watch this video for a detailed explanation:</p>
      <iframe width="560" height="315" [src]="safeVideoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Disclaimer:</h3>
      <p>This Game of Life implementation was generated using AI-assisted prompts and the current Angular setup. It serves as a demonstration of AI-powered development capabilities.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class GameInfoModalComponent implements OnInit {
  safeVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const videoUrl = 'https://www.youtube.com/embed/FWSR_7kZuYg';
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit() {}
}