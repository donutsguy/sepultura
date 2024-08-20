import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../../models/music.model';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-musics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent {
  @Input() music: Music = { name: '', album: '', time: 0 };

  constructor(private musicService: MusicService) { }
}
