import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Event } from '../../model/event';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-specialevent',
  templateUrl: './specialevent.component.html',
  styleUrls: ['./specialevent.component.css']
})
export class SpecialeventComponent implements OnInit {

  typeEvents = [
    { "type": "event", "value": 'event' },
    { "type": "special", "value": 'special' }
  ];
  default: String;

  events = [];

  evnt: any = {};
  updateform: FormGroup;

  constructor(private _eventService: EventService, private _router: Router, private fb: FormBuilder) { 
    this.formData();
  }

  ngOnInit() {
    this.refreshData();
  }

  formData() {
    this.updateform = this.fb.group({
      "title": [''],
      "type": [''],
      "description": ['']
    })
  }

  refreshData(){
    this._eventService.getData()
    .subscribe(resSpecialEvent => this.events = resSpecialEvent);
  }

  delete(delevt: any) {
    let eventArray = this.events;
    this._eventService.deleteData(delevt)
      .subscribe( resdelEvt => {
        for(let i=0; i < eventArray.length; i++) {
          if(eventArray[i]._id === delevt._id) {
            eventArray.splice(i,1);
            this.refreshData();
          }
        }
      });
  };

  getData(evt: Event) {
    this._eventService.getDataByID(evt)
      .subscribe(res => {
        this.evnt = res;
        console.log(res);
      })
  }

  onUpdate() {
    this._eventService.updateEvent(this.evnt)
      .subscribe(resupdateEvt => {
        //  this.evnt = resupdateEvt;
        this.refreshData();
         console.log("response:",resupdateEvt);
      })
  }

}
