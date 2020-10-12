import { LyricItemComponent } from '../lyric-item/lyric-item.component';
import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../../services/lyrics.service'
import { ILyric, ILyricsResults } from '../../models/lyric'

@Component({
  selector: 'app-lyric',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lyrics: ILyric[];
  results: ILyricsResults;

  constructor(
    public lyricService: LyricsService
  ) { }

  ngOnInit(): void {
    const today = new Date();
    var monthYear = String(today.getFullYear()).padStart(4, '0') + String(today.getMonth() + 1).padStart(2, '0');
    this.getRanking(monthYear);
  }

  getRanking(yearMo) {
    this.lyricService.getRanking(yearMo).subscribe((apiresult: ILyricsResults) => {
      this.results = apiresult;
      this.results.mus.month.all.forEach(element => {
        element.name = element.name.replace('(tradução)', '')
      });
      this.results.mus.month.all.forEach(element => {
        element.art.url = element.art.url.slice(0, -1); 
        element.art.url = element.art.url.replace('https://www.vagalume.com.br/', '')
      });

      this.lyrics = this.results.mus.month.all;
    })
  }

  // onMoviesFilter(valueFilter: string): void {
  //   this.filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().includes(valueFilter.toLowerCase()))
  // }
}
