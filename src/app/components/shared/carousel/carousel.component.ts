import { Component, Injectable } from '@angular/core';
import { WebItem } from '../../../models/web-item';
import { WebItemInfoService } from '../../../services/web-item-info.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', './carousel.css']
})
export class CarouselComponent {
  carouselItems: Array<WebItem> = new Array<WebItem>();
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.carouselItems[0] = _webItemInfoService.get("aboutUs");
    this.carouselItems[1] = _webItemInfoService.get("services");
    this.carouselItems[2] = _webItemInfoService.get("solutions");
  }

}
