import { Component, OnInit } from '@angular/core';
import { WebItem } from '../../models/web-item';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html'
})
export class TechnologyComponent implements OnInit {

  constructor() { }
  webItem: WebItem=  { 
    HeaderImageUrl:"assets/img/avion.jpg",
    HeaderImageUrlTooltip:"Nosotros",
    ItemUrl: "",
    Name: "aboutUs",
    ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
    Title:"Nosotros"
  };
  ngOnInit() {
  }

}
