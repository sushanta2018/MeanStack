import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { EventComponent } from './view/event/event.component';
import { SpecialeventComponent } from './view/specialevent/specialevent.component';
import { AddeventComponent } from './view/addevent/addevent.component';

import { EventService } from './service/event.service';
import { EventFilterPipe } from './service/event-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventComponent,
    EventFilterPipe,
    SpecialeventComponent,
    AddeventComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
