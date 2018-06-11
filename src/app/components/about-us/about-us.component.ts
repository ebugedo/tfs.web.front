import { Component, Injectable } from '@angular/core';
import { WebItem } from '../../models/web-item';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent {

  webItemInfo: WebItem=null;
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.webItemInfo = _webItemInfoService.get("aboutUs");
  }
  
}
