import { Component } from '@angular/core';
import { WebItemComponentBase } from '../../models/web-item-component-base';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent extends WebItemComponentBase {
  constructor(private _webItemInfoService: WebItemInfoService) {
    super(_webItemInfoService, "experience");
  }
}
