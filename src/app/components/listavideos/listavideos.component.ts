import { Component, OnInit } from '@angular/core';

import{ServiciosService} from './../../servicios/servicios.service';
@Component({
  selector: 'app-listavideos',
  templateUrl: './listavideos.component.html',
  
})
export class ListavideosComponent implements OnInit {

  categoria_videos:any[];

    constructor(private _ServiciosService: ServiciosService) { }

  A1 = this._ServiciosService

  ngOnInit(){
    
      

      this.categoria_videos= this._ServiciosService.getCategoriaVideos();

  }
  

}
