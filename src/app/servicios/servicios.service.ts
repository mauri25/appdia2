import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  categoria_videos: any[]=[
    {id:"1", url: "assets/videos/video1.mp4", descripcion:"usuario 1"},
    {id:"2", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 2"},
    {id:"3", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 3"},
    {id:"4", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 4"},
    {id:"5", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 5"},
    {id:"6", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 6"},
    {id:"7", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 7"},
    {id:"8", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 8"},
    {id:"9", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 9"},
    {id:"10", url:"https://www.youtube.com/embed/rbuYtrNUxg4", descripcion:"usuario 10"}
  ];

  constructor() {
   
   }

  getCategoriaVideos() {
    return this.categoria_videos;

  

}

getVideo(idx: string) {
    return this.categoria_videos [idx];

  

}
}

export interface categoria_videos{

  id:string,
  url:string,
  descripcion: string,
}
