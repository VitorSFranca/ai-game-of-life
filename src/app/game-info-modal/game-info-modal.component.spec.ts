import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoModalComponent } from './game-info-modal.component';

describe('GameInfoModalComponent', () => {
  let component: GameInfoModalComponent;
  let fixture: ComponentFixture<GameInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameInfoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
