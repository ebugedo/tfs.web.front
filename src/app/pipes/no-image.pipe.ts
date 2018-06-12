import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: string): string {
    debugger;
    if (image.length!=0){
      return image;
    }
    else
    {
      return 'assets/img/accenture.png';
    }
  }

}
