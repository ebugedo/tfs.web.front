import { Component , Injectable} from '@angular/core';
import { WebItem } from '../../models/web-item';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  webItemInfo: WebItem=null;
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.webItemInfo = _webItemInfoService.get("home");
  }
}
