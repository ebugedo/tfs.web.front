import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Shared components
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// Components
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TechnologyComponent } from './components/technology/technology.component';
// Routing
import { AppRoutingModule } from './/app-routing.module';
import { TfsAirTransportComponent } from './components/tfs-air-transport/tfs-air-transport.component';
import { HeaderImageComponent } from './components/shared/header-image/header-image.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    AppComponent,
    CarouselComponent,
    ClientsComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    SolutionsComponent,
    TechnologyComponent,
    TfsAirTransportComponent,
    HeaderImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
