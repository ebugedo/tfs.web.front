import { Component, Input } from '@angular/core';
import { HeaderImage } from '../../../models/header-image';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html'
})
export class HeaderImageComponent {
  // @Input() image: HeaderImage;
   @Input() image: string;
  //  image2: HeaderImage = {
  //    Url:"assets/img/diagramas.jpg",
  //    Description:"hola",
  //    Title:"hola",
  //    Tooltip:"hola"
  //  }
  constructor() {
    // debugger;
    console.log("constructor HeaderImageComponent:");
    console.log(this.image);
    // console.log("constructor ServicesComponent:" + this.headerImage.Url);
    // console.log("constructor HeaderImageComponent" );
    // console.log("HeaderImageComponent.constructor:" + this.image);
  }

}
