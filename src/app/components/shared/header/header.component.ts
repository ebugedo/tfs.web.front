// import { Component, OnInit, OnChanges,  } from '@angular/core';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
  export class HeaderComponent  {
  
    isHomeComponent:boolean=false;

    constructor(private _router: Router) { 
      this._router.events.subscribe((event:any) =>
      {
        if (event instanceof NavigationStart){
          if (event.url=="/home"){
            this.isHomeComponent=true;
          }
          else
          {
            this.isHomeComponent=false;
          }
        }
      }
    );
  }
 
}
