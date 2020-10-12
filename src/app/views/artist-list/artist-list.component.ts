import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LyricsService } from 'src/app/services/lyrics.service';
import { IMusicsResults, IArtist, IMusic, ILyric } from 'src/app/models/lyric';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  musid: any
  lyrics: ILyric[];
  artist: IArtist;
  results: IMusicsResults;

  constructor(
    private route: ActivatedRoute,
    public lyricService: LyricsService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getArtistTopLyrics(params.artisturl)
    });
  }

  getArtistTopLyrics(artisturl) {
    this.lyricService.getArtistTopLyrics(artisturl).subscribe((apiresult: IMusicsResults) => {
      this.results = apiresult;
      this.artist = apiresult.artist;
      this.artist.pic_small = 'https://s2.vagalume.com' + this.artist.pic_small
      this.artist.url = this.artist.url.slice(0, -1); 
      this.artist.url = this.artist.url.replace('https://www.vagalume.com.br/', '')
      this.lyrics = this.artist.toplyrics.item;
    })
  }

}
