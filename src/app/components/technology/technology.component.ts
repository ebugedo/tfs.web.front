import { Component, OnInit } from '@angular/core';
import { WebItem } from '../../models/web-item';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html'
})
export class TechnologyComponent {

  webItemInfo: WebItem=null;
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.webItemInfo = _webItemInfoService.get("technology");
  }
}
