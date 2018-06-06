import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  logo:any=
  {
    logo:"assets/img/logo40px.png",
    alt:"Time For Software"
  };
  constructor() { }

  ngOnInit() {
  }

}
