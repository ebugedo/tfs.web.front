import { Component, Input, OnInit } from '@angular/core';
import { HeaderImage } from '../../../models/header-image';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html'
})
export class HeaderImageComponent implements OnInit {
   @Input() image: HeaderImage;
  //  @Input() image: string;
  //  image2: HeaderImage = {
  //    Url:"assets/img/diagramas.jpg",
  //    Description:"hola",
  //    Title:"hola",
  //    Tooltip:"hola"
  //  }
  constructor() {
    console.log("constructor:" + this.image);
   }

  ngOnInit() {
  }

}
