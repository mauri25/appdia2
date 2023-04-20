import {RouterModule, Routes} from '@angular/router';
import { ApuntesComponent } from './components/apuntes/apuntes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CarpetaComponent } from './components/carpeta/carpeta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListavideosComponent } from './components/listavideos/listavideos.component';



import { LoginComponent } from './components/login/login.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TutorialesComponent } from './components/tutoriales/tutoriales.component';
import { PerfilComponent } from './components/usuario/usuario.component';


import { VideosComponent } from './components/videos/videos.component';





const APP_ROUTES: Routes = [
{path:'inicio', component:InicioComponent},
{path:'perfil', component:PerfilComponent},
{path:'login', component:LoginComponent},
{path:'apuntes', component:ApuntesComponent},
{path:'calendario', component:CalendarioComponent},
{path:'videos', component:VideosComponent},
{path:'tareas', component:TareasComponent},
{path:'listavideos', component:ListavideosComponent},
{path: 'carpeta', component:CarpetaComponent},
{path:'tutoriales/:id', component:TutorialesComponent},
{path: '**', pathMatch: 'full', redirectTo: 'perfil'}


];

export const APP_RAUTING = RouterModule.forRoot(APP_ROUTES,{useHash: true} )
