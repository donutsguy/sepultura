import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalbumComponent } from './musicalbum.component';

describe('MusicalbumComponent', () => {
  let component: MusicalbumComponent;
  let fixture: ComponentFixture<MusicalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicalbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
