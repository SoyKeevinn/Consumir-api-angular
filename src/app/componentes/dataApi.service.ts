import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class dataApiServices {
    private API_SERVE = "https://rickandmortyapi.com/api/character";

    constructor(private http: HttpClient){}

    public getData():Observable<any>{
        return this.http.get(this.API_SERVE);
    }

}