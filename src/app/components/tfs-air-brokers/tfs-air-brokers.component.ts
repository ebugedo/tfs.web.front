import { Component } from '@angular/core';
import { WebItemComponentBase } from '../../models/web-item-component-base';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-tfs-air-brokers',
  templateUrl: './tfs-air-brokers.component.html'
})
export class TfsAirBrokersComponent extends WebItemComponentBase {
  constructor(private _webItemInfoService: WebItemInfoService) {
    super(_webItemInfoService, "tfsAirBrokers");
  }
}