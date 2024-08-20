import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { MusicsComponent } from '../musics/musics.component';
import { Music } from '../../models/music.model';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, MusicsComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = []

  musics: Music[] = []

  constructor(private albumService: AlbumService, private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getMusics().subscribe((data) => {
      this.musics = data
    })

    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data
    })
  }

  getMusicsForAlbum(albumName: string) {
    return this.musics.filter(music => music.album === albumName);
  }
}
