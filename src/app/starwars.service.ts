import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, flatMap, toArray, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


/*----------- Models -----------*/
// export interface Categories { 
//     key: string;
//     url: string;
// }

export interface CharacterItem {
    name: string;
    id: string;
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    haircolor: string;
    skincolor: string;
    eyecolor: string;
    birthyear: string;
    gender: string;
    homeworld: string;
    id: string;
}

export interface Film {

}

export interface FilmItem {
    
}
/*---- Methods to format values from Json ----*/
/*--To Retrieve Id--*/

var getIdFromUrl = function(value){
    var id = value.match(/([0-9])+/g);
    id = id[0];
    return id;
};

var getRomanNumeral = function(number){
    var numeral;
    switch(number){
        case 1: 
        numeral = 'I';
        break;
        case 2: 
        numeral = 'II';
        break;
        case 3: 
        numeral = 'III';
        break;
        case 4: 
        numeral = 'IV';
        break;
        case 5: 
        numeral = 'V';
        break;
        case 6: 
        numeral = 'VI';
        break;
        case 7: 
        numeral = 'VII';
        break;
        case 8: 
        numeral = 'VIII';
        break;
        case 9: 
        numeral = 'IX';
        break;
        case 10: 
        numeral = 'X';
        break;
    }
    return numeral;
};

/*--wrappers--*/

@Injectable()
export class StarWarsService {
    constructor(private http: HttpClient,
        @Inject('appKey') private appKey) { }

    // getCategories():Promise<Categories[]>{

    //     const params = new HttpParams()
    //          .set('limit', 20 + '')
    //          .set('apikey', this.appKey);
    //     return (
    //         this.http.get<[Categories[]]>('https://swapi.co/api/', { params })
    //             .pipe(
    //                 // map(v => v['data']['results']),
    //                 // flatMap(v => v),
    //                 map((v: any) => {
    //                     return (<Categories>{ url: v.url });
    //                 }),
    //                 toArray()
    //             )
    //             .toPromise()
    //     )

    // }

    /* ---------------------- Characters -------------------------*/
        // Experimenting with Observable instead of wrapping it in a promise
    getCharacterList(): Observable<CharacterItem[]> {
        const params = new HttpParams()
            .set('limit', 20 + '')
            .set('apikey', this.appKey);
        return (
            this.http.get<CharacterItem[]>('https://swapi.co/api/people', { params })
                .pipe(
                    map(v => v['results']),
                    flatMap(v => v),
                    map((v: any) => {
                        return (<CharacterItem>{ id: getIdFromUrl(v.url), name: v.name})
                    }),
                    toArray()
                )
                // .toPromise()
        )
    }
    getCharacter(id: number): Promise<Character> {
        const params = new HttpParams()
             .set('apikey', this.appKey);
        return (
            this.http.get<Character>(`https://swapi.co/api/people/${id}`, { params })
                .pipe(
                    // map(v => console.log("" + v)),
                    // map(v => v),
                    map((v: any) => {
                        return (<Character>{
                            id: getIdFromUrl(v.url),
                            name: v.name,
                            height: v.height,
                            mass: v.mass,
                            haircolor: v.hair_color,
                            skincolor: v.skin_color,
                            eyecolor: v.eye_color,
                            gender: v.gender,
                            homeworld: v.homeworld,
                            // image: `${v.thumbnail.path}.${v.thumbnail.extension}`
                        })
                    })
                )
                .toPromise()
        );
    }
    /* -------------------------- Characters -------------------------*/



    /* -------------------------- Films -------------------------*/

    //pipe is a asynchronous reactive programming 
    getFilmList(): Promise<FilmItem[]> {
        const params = new HttpParams()
            .set('limit', 20 + '')
            .set('apikey', this.appKey);
        return (
            this.http.get<FilmItem[]>('https://swapi.co/api/people', { params })
                .pipe(
                    map(v => v['results']),
                    flatMap(v => v),
                    map((v: any) => {
                        return (<FilmItem>{ id: getIdFromUrl(v.url), name: v.name})
                    }),
                    toArray()
                )
                .toPromise()
        )
    }
    getFilm(id: number): Promise<Film> {
        const params = new HttpParams()
             .set('apikey', this.appKey);
        return (
            this.http.get<Film>(`https://swapi.co/api/films/${id}`, { params })
                .pipe(
                    // map(v => console.log("" + v)),
                    // map(v => v),
                    map((v: any) => {
                        return (<Film>{
                            id: getIdFromUrl(v.url),
                            name: 'Episode ' + getRomanNumeral(v.episode_id) + ': ' + v.title,
                            height: v.height,
                            mass: v.mass,
                            haircolor: v.hair_color,
                            skincolor: v.skin_color,
                            eyecolor: v.eye_color,
                            gender: v.gender,
                            homeworld: v.homeworld,
                            // in case of a image | image: `${v.thumbnail.path}.${v.thumbnail.extension}`
                        })
                    })
                )
                .toPromise()
        );
    }

} /* end of Service */