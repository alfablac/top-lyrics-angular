import { IArtist, ILyric } from '../../models/lyric';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyric-item',
  templateUrl: './lyric-item.component.html',
  styleUrls: ['./lyric-item.component.css']
})
export class LyricItemComponent implements OnInit {

  @Input() artist: IArtist
  @Input() lyric: ILyric


  constructor() { }

  ngOnInit(): void {
    
  }

}
