import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './views/home/home.component';


import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MusicComponent } from './views/music/music.component';
import { ArtistListComponent } from './views/artist-list/artist-list.component';
import { LyricItemComponent } from '../app/views/lyric-item/lyric-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LyricItemComponent,
    MusicComponent,
    ArtistListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
