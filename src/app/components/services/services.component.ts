import { Component, OnInit } from '@angular/core';
import { WebItem } from '../../models/web-item';
import { HeaderImage } from '../../models/header-image';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
public webItem: WebItem;
public headerImage: HeaderImage;
  constructor() { 
     this.init();
     console.log("constructor ServicesComponent");
    // console.log("constructor ServicesComponent:" + this.webItem.HeaderImageUrl);
    // console.log("constructor ServicesComponent:" + this.headerImage.Url);
    
  }
  init(){
    this.webItem=  { 
      HeaderImageUrl:"assets/img/diagramas.jpg",
      HeaderImageUrlTooltip:"Servicios",
      ItemUrl: "",
      Name: "services",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title:"Servicios"
    };
    this.headerImage=   {
      Url: this.webItem.HeaderImageUrl,
      Description: this.webItem.ShortDescription,
      Title: this.webItem.Title,
      Tooltip: this.webItem.HeaderImageUrlTooltip
    };
  }
  
  
 
  // menuItem.Title= "Servicios";
  // menuItem={Title: "Servicios"};
  

  ngOnInit() {
    // console.log("ServicesComponentngOnInit:" + this.webItem.HeaderImageUrl);
  }

}
