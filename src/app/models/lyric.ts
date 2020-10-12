/* export interface ILyric {
    id: string
    name: string
    url: string
    art: IArtist
}

export interface IArtist {
    id: string
    name: string
    url: string
    pic_small: string
}

export interface IResult {
    month: string
    all: Array<ILyric>
}

export interface ILyricsResults {
    mus: IResult
} */


export interface Period {
    year: string;
    week: string;
}

export interface ITopLyrics {
    item: Array<ILyric>
}

export interface IArtist {
    id: string;
    desc: string;
    name: string;
    url: string;
    pic_small: string;
    pic_medium: string;
    related: any[];
    toplyrics: ITopLyrics;
}

export interface ILyric {
    id: string;
    desc: string
    name: string;
    url: string;
    uniques: string;
    views: string;
    rank: string;
    art: IArtist;
}

export interface IMonth {
    period: Period;
    all: Array<ILyric>;
}

export interface IMusics {
    month: IMonth;
}

export interface ILyricsResults {
    mus: IMusics;
}

export interface IMusicsResults {
    mus: Array<IMusic>;
    art: IArtist
    artist: IArtist
}

export interface IMusic {
    id: string;
    name: string;
    url: string;
    lang: number;
    text: string;
}

