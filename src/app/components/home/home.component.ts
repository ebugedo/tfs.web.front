import { Component, OnInit } from '@angular/core';
import { WebItem } from '../../models/web-item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

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
