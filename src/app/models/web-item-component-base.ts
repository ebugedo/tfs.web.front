import { WebItemInfoService } from '../services/web-item-info.service';
export class WebItemComponentBase {
  headerImageUrl: string;
  title: string;
  shortDescription: string;
  constructor(private webItemInfoService: WebItemInfoService, componentName: string) {
    let webItemInfo = webItemInfoService.get(componentName);
    if (webItemInfo != null) {
      this.title = webItemInfo.Title;
      this.headerImageUrl = webItemInfo.HeaderImageUrl;
      this.shortDescription=webItemInfo.ShortDescription;
    }
  };
}
