import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import  { YouTubePlayerModule }  from  '@angular/youtube-player' ;

import {APP_RAUTING} from './rauter';

import { LoginComponent } from './components/login/login.component';
import { ApuntesComponent } from './components/apuntes/apuntes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { VideosComponent } from './components/videos/videos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/usuario/usuario.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { ListavideosComponent } from './components/listavideos/listavideos.component';
import {ServiciosService} from './servicios/servicios.service';
import { from } from 'rxjs';
import { CarpetaComponent } from './components/carpeta/carpeta.component';
import { TutorialesComponent } from './components/tutoriales/tutoriales.component';


@NgModule({
  declarations: [
    AppComponent,
  PerfilComponent,
    LoginComponent,
    ApuntesComponent,
    CalendarioComponent,
    VideosComponent,
    InicioComponent,
    TareasComponent,
    ListavideosComponent,
    CarpetaComponent,
    TutorialesComponent,
  ],
  imports: [
    BrowserModule,
    APP_RAUTING,
    YouTubePlayerModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
