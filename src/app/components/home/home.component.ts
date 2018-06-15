import { Component } from '@angular/core';
import { WebItemComponentBase } from '../../models/web-item-component-base';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends WebItemComponentBase {
  constructor(private _webItemInfoService: WebItemInfoService) {
    super(_webItemInfoService, "home");
  }
}
