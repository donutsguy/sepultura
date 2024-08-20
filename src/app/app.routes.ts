import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { BiographyComponent } from './components/biography/biography.component';
import { MusicalbumComponent } from './components/musicalbum/musicalbum.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'biography', component: BiographyComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'musics', component: MusicalbumComponent }
];
