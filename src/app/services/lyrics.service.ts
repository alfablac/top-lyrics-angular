import { IMusicsResults } from './../models/lyric';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILyric, ILyricsResults } from '../models/lyric';

const API_KEY = "9032c37f7322830672ce52e1e54863c5";
const LIMIT = 35;
const withBaseUrl = path => `https://api.vagalume.com.br/${path}&api_key=${API_KEY}&limit=${LIMIT}`;

@Injectable({
  providedIn: 'root'
})

export class LyricsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  getRanking(monthYear): Observable<ILyricsResults> {
    return this.httpClient.get<ILyricsResults>(withBaseUrl(`rank.php?type=mus&period=month&periodVal=${monthYear}`));
  }

  getLyrics(musid): Observable<IMusicsResults> {
    return this.httpClient.get<IMusicsResults>(withBaseUrl(`search.php?musid=${musid}`));
  }

  getArtistTopLyrics(url) {
    return this.httpClient.get<IMusicsResults>(`https://www.vagalume.com.br/${url}/index.js`);
  }

}
