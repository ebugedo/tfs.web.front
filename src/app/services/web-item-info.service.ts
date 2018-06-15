import { Injectable } from '@angular/core';
import { WebItem } from '../models/web-item';
@Injectable()
export class WebItemInfoService {
  constructor() { }

  get(itemName: string): WebItem {
    return this.getItemInfo(itemName);
  };
  webItemsInfo: Array<WebItem> = [
    {
      HeaderImageUrl: "assets/img/avion.jpg",
      HeaderImageUrlTooltip: "Nosotros",
      ItemUrl: "",
      Name: "aboutUs",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title: "Nosotros"
    },
    {
      HeaderImageUrl: "assets/img/avion.jpg",
      HeaderImageUrlTooltip: "Clientes",
      ItemUrl: "",
      Name: "clients",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title: "Clientes"
    },
    {
      HeaderImageUrl: "assets/img/avion.jpg",
      HeaderImageUrlTooltip: "Contacto",
      ItemUrl: "",
      Name: "contact",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title: "Contacto"
    },
    {
      HeaderImageUrl: "assets/img/avion.jpg",
      HeaderImageUrlTooltip: "Experiencia",
      ItemUrl: "",
      Name: "experience",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title: "Experiencia"
    },
    {
      HeaderImageUrl: "assets/img/diagramas.jpg",
      HeaderImageUrlTooltip: "Servicios",
      ItemUrl: "",
      Name: "services",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title: "Servicios"
    },
    {
      HeaderImageUrl: "assets/img/avion.jpg",
      HeaderImageUrlTooltip: "Soluciones",
      ItemUrl: "",
      Name: "solutions",
      ShortDescription: "Aplicaciones web, bases de datos, integración de sistemas, etc..",
      Title: "Soluciones"
    },
    {
      HeaderImageUrl: "assets/img/cargo4.jpg",
      HeaderImageUrlTooltip: "Tecnologías",
      ItemUrl: "",
      Name: "technology",
      ShortDescription: "TFS Air Transport es una aplicación en la nube para la gestión de compañías de transporte aéreo. Gestiona la operativa básica del día a día de una compañía de transporte aéreo. Si tiene conexión a internet, tiene acceso a TFS Air Transport. Podrá utilizarla desde un pc, un portátil, un tablet o un móvil.",
      Title: "Tecnologías"
    },
    {
      HeaderImageUrl: "assets/img/cargo4.jpg",
      HeaderImageUrlTooltip: "TFS Air Transport",
      ItemUrl: "",
      Name: "tfsAirTransport",
      ShortDescription: "TFS Air Transport es una aplicación en la nube para la gestión de compañías de transporte aéreo. Gestiona la operativa básica del día a día de una compañía de transporte aéreo. Si tiene conexión a internet, tiene acceso a TFS Air Transport. Podrá utilizarla desde un pc, un portátil, un tablet o un móvil.",
      Title: "TFS Air Transport"
    }
  ];
  private getItemInfo(itemName: string): WebItem | null {
    let webItemInfoFound: WebItem = null;
    // let webItemInfoFound: WebItem = new WebItem();

    this.webItemsInfo.forEach(function (webItemInfo) {
      if (webItemInfo.Name == itemName) {
        webItemInfoFound = webItemInfo;
      }
    });
    return webItemInfoFound;
  }
}