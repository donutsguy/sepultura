import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biography } from '../models/biography.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiographyService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/biographys'

  getBiographys(): Observable<Biography[]> {
    return this.http.get<Biography[]>(this.url)
  }
}
