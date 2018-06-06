import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { ServicesComponent } from '../../services/services.component';
import { SolutionsComponent } from '../../solutions/solutions.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', './carousel.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  private aboutUsComponent=new AboutUsComponent();
  private serviceComponent=new ServicesComponent();
  private solutionsComponent=new SolutionsComponent();
  carouselItems=[
    {
      HeaderImageUrl:this.aboutUsComponent.webItem.HeaderImageUrl,
      HeaderImageUrlTooltip:this.aboutUsComponent.webItem.HeaderImageUrlTooltip,
      ShortDescription:this.aboutUsComponent.webItem.ShortDescription,
      Title:this.aboutUsComponent.webItem.Title
    }
    ,
    {
      HeaderImageUrl:this.serviceComponent.webItem.HeaderImageUrl,
      HeaderImageUrlTooltip:this.serviceComponent.webItem.HeaderImageUrlTooltip,
      ShortDescription:this.serviceComponent.webItem.ShortDescription,
      Title:this.serviceComponent.webItem.Title
    },
    {
      HeaderImageUrl:this.solutionsComponent.webItem.HeaderImageUrl,
      HeaderImageUrlTooltip:this.solutionsComponent.webItem.HeaderImageUrlTooltip,
      ShortDescription:this.solutionsComponent.webItem.ShortDescription,
      Title:this.solutionsComponent.webItem.Title
    }
  ];
  ngOnInit() {
  }

}
