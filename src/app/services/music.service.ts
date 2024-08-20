import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from '../models/music.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private url = 'http://localhost:3000/musics'

  constructor(private http: HttpClient) { }

  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(this.url)
  }

  getMusicById(id: number): Observable<Music> {
    return this.http.get<Music>(this.url + '/' + id)
  }

  getMusicsByAlbum(album: string | null): Observable<Music[]> | null {
    return this.http.get<Music[]>(this.url + '?album=' + album)
  }
}
