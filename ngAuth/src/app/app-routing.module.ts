import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './view/event/event.component';
import { SpecialeventComponent } from './view/specialevent/specialevent.component';
import { AddeventComponent } from './view/addevent/addevent.component';

const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'specialevent', component: SpecialeventComponent },
  { path: 'addevent', component: AddeventComponent },
  { path: '', redirectTo: '/event', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
