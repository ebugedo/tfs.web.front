import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'aeronautics', component: AeronauticsComponent },
  { path: 'bank', component: BankComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'engineering', component: EngineeringComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'it-services', component: ItServicesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'telecommunication', component: TelecommunicationComponent },
  { path: 'tfs-air-brokers', component: TfsAirBrokersComponent },
  { path: 'tfs-air-transport', component: TfsAirTransportComponent },
  { path: 'tfs-air-transport', component: TfsTouroperatorsComponent },
  { path: 'tourism', component: TourismComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', pathMatch: 'full', component: 'home' },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
  // quitar el constructor
  constructor(){
    // console.log("constructor AppRoutingModule");
  }
}
