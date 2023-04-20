import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ServiciosService} from './../../servicios/servicios.service'

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
 
})
export class TutorialesComponent implements OnInit {

    tutoriales:any = {};

  constructor( private activateRoute: ActivatedRoute,
    private _ServiciosService:ServiciosService
    ) {
        this.activateRoute.params.subscribe(params=>{
        this.tutoriales = this._ServiciosService.getVideo(params['id']);
    })



   }

  ngOnInit(): void {
  }

}