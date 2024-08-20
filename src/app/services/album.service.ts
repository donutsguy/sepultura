import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = 'http://localhost:3000/albums'

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url)
  }

  getAlbumByName(name: string | null): Observable<Album[]> | null {
    return this.http.get<Album[]>(this.url + '?name=' + name)
  }

}
