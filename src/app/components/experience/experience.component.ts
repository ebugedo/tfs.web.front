import { Component, Injectable } from '@angular/core';
import { WebItem } from '../../models/web-item';
import { WebItemInfoService } from '../../services/web-item-info.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  webItemInfo: WebItem = null;
  constructor(private _webItemInfoService: WebItemInfoService) {
    this.webItemInfo = _webItemInfoService.get("experience");
  }

}
