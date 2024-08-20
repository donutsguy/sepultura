import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicalbumComponent } from '../musicalbum/musicalbum.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MusicalbumComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  albums: Album[] = []
  selectedAlbum: string | null = null

  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((params) => {
      this.albums = params
    });
  }

  searchMusicsByAlbum(): void {
    if (this.selectedAlbum) {
      this.router.navigate(['/musics'], { queryParams: { album: this.selectedAlbum } })
    } else {
      alert("Select an album")
    }
  }
}
