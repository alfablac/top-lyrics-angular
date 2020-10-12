import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MusicComponent } from './views/music/music.component';
import { ArtistListComponent } from './views/artist-list/artist-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent  },
  { path: 'lyric/:lyricid', component: MusicComponent },
  { path: 'artist/:artisturl', component: ArtistListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
