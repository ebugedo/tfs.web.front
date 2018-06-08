import { Component, OnInit } from '@angular/core';
import { WebItem } from '../../models/web-item';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit {

  constructor() {
    console.log("constructor SolutionsComponent");
  }
  webItem: WebItem=  { 
    HeaderImageUrl:"assets/img/avion.jpg",
    HeaderImageUrlTooltip:"Soluciones",
    ItemUrl: "",
    Name: "solutions",
    ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
    Title:"Soluciones"
  };
  ngOnInit() {
  }

}
