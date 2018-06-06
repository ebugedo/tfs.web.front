import { Component, OnInit } from '@angular/core';
import { WebItem } from '../../models/web-item';
@Component({
  selector: 'app-tfs-air-transport',
  templateUrl: './tfs-air-transport.component.html'
})
export class TfsAirTransportComponent implements OnInit {

  constructor() { }
  webItem: WebItem=  { 
    HeaderImageUrl:"assets/img/cargo4.jpg",
    HeaderImageUrlTooltip:"TFS Air Transport",
    ItemUrl: "",
    Name: "TFS Air Transport",
    ShortDescription: "TFS Air Transport es una aplicación en la nube para la gestión de compañías de transporte aéreo. Gestiona la operativa básica del día a día de una compañía de transporte aéreo. Si tiene conexión a internet, tiene acceso a TFS Air Transport. Podrá utilizarla desde un pc, un portátil, un tablet o un móvil.",
    Title:"TFS Air Transport"
  };
  ngOnInit() {
  }

}
