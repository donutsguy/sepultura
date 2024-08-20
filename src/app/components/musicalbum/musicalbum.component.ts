import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music } from '../../models/music.model';
import { MusicService } from '../../services/music.service';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../albums/albums.component';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-musicalbum',
  standalone: true,
  imports: [CommonModule, AlbumsComponent],
  templateUrl: './musicalbum.component.html',
  styleUrl: './musicalbum.component.css'
})
export class MusicalbumComponent implements OnInit {
  musics: Music[] = []

  album: string | null = null;

  albumMusic: Album[] = []

  constructor(private route: ActivatedRoute, private musicService: MusicService, private albumService: AlbumService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.album = params.get('album')
    })

    this.musicService.getMusicsByAlbum(this.album)?.subscribe(params => {
      this.musics = params
    })

    this.albumService.getAlbumByName(this.album)?.subscribe(params => {
      this.albumMusic = params
    })
  }
}
