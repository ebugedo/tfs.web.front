import { Component } from '@angular/core';
import { WebItemComponentBase } from '../../models/web-item-component-base';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html'
})
export class InsuranceComponent extends WebItemComponentBase {
  constructor(private _webItemInfoService: WebItemInfoService) {
    super(_webItemInfoService, "insurance");
  }
}