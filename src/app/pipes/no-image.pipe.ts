import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: string): string {
    let defaultImage:string='assets/img/accenture.png';
    if (image !=null && image.length!=0){
      return image;
    }
    else
    {
      return defaultImage;
    }
  }

}
