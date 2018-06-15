import { Component } from '@angular/core';
import { WebItemComponentBase } from '../../models/web-item-component-base';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html'
})
export class BankComponent extends WebItemComponentBase {
  constructor(private _webItemInfoService: WebItemInfoService) {
    super(_webItemInfoService, "bank");
  }
}