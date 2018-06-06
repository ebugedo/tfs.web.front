import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent }      from './components/about-us/about-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent }      from './components/experience/experience.component';
import { HomeComponent }      from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TfsAirTransportComponent } from './components/tfs-air-transport/tfs-air-transport.component';


const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'tfs-air-transport', component: TfsAirTransportComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', pathMatch: 'full', component: 'home' },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
