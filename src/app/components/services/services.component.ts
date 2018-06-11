import { Component, Injectable } from '@angular/core';
import { WebItem } from '../../models/web-item';
import { HeaderImage } from '../../models/header-image';
import { WebItemInfoService } from '../../services/web-item-info.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  webItemInfo: WebItem = null;
  // headerImage: HeaderImage=null;
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.webItemInfo = _webItemInfoService.get("services");
  }
}
