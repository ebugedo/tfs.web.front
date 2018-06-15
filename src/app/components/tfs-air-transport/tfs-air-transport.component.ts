import { Component } from '@angular/core';
import { WebItemComponentBase } from '../../models/web-item-component-base';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-tfs-air-transport',
  templateUrl: './tfs-air-transport.component.html'
})
export class TfsAirTransportComponent extends WebItemComponentBase {
  constructor(private _webItemInfoService: WebItemInfoService) {
    super(_webItemInfoService, "tfsAirTransport");
  }
}