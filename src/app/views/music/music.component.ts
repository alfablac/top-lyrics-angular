import { IMusicsResults, IMusic, IArtist } from './../../models/lyric';
import { LyricsService } from './../../services/lyrics.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musid: any
  lyric: IMusic;
  artist: IArtist;
  results: IMusicsResults;

  constructor(
    private route: ActivatedRoute,
    public lyricService: LyricsService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getLyrics(params.lyricid)
    });
  }

  getLyrics(musid) {
    this.lyricService.getLyrics(musid).subscribe((apiresult: IMusicsResults) => {
      this.results = apiresult;
      this.artist = apiresult.art;
      this.results.mus[0].text = this.results.mus[0].text.replace(/\n/g, '<br/>')
      this.lyric = this.results.mus[0]
    })
  }

}
