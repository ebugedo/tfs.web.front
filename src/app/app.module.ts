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
import { AeronauticsComponent } from './components/aeronautics/aeronautics.component';
import { BankComponent } from './components/bank/bank.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { EngineeringComponent } from './components/engineering/engineering.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ItServicesComponent } from './components/it-services/it-services.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TelecommunicationComponent } from './components/telecommunication/telecommunication.component';
import { TfsAirBrokersComponent } from './components/tfs-air-brokers/tfs-air-brokers.component';
import { TfsAirTransportComponent } from './components/tfs-air-transport/tfs-air-transport.component';
import { TfsTouroperatorsComponent } from './components/tfs-touroperators/tfs-touroperators.component';
import { TourismComponent } from './components/tourism/tourism.component';

// Routing
import { AppRoutingModule } from './/app-routing.module';

import { HeaderImageComponent } from './components/shared/header-image/header-image.component';
//Services
import { WebItemInfoService } from './services/web-item-info.service';
// Pipes
import { NoImagePipe } from './pipes/no-image.pipe';






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
    HeaderImageComponent,
    NoImagePipe,
    TfsAirBrokersComponent,
    TfsTouroperatorsComponent,
    AeronauticsComponent,
    BankComponent,
    ConsultingComponent,
    EducationComponent,
    EngineeringComponent,
    InsuranceComponent,
    ItServicesComponent,
    TelecommunicationComponent,
    TourismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WebItemInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
