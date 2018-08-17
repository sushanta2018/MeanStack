import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EventService } from '../../service/event.service'; 

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {

  events = [];

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.refreshData();
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

}
