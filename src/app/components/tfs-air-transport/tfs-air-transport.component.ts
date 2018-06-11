import { Component, Injectable } from '@angular/core';
import { WebItem } from '../../models/web-item';
import { WebItemInfoService } from '../../services/web-item-info.service';

@Component({
  selector: 'app-tfs-air-transport',
  templateUrl: './tfs-air-transport.component.html'
})
export class TfsAirTransportComponent  {

  webItemInfo: WebItem=null;
  // public headerImage: HeaderImage;
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.webItemInfo = _webItemInfoService.get("tfsAirTransport");
  }

}
