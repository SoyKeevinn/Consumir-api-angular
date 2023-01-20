import { Component, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

import { dataApiServices } from '../dataApi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  datoApi: any;
  

  constructor(public servicio:dataApiServices){}

  ngOnInit(){
    // this.http.get('https://rickandmortyapi.com/api/character').subscribe(data =>{
    //   this.dato = data;
    // })
    this.servicio.getData().subscribe(
      //
      {
        //estructura try catch
        //next: se obtiene el resultado 
        // 
        //complite: para saber si se cargo todo
        next: (r: any) => {this.datoApi = r.results; console.log(this.datoApi);},
        error: (e: any) => console.error(e)
      }
    )
  }

}
