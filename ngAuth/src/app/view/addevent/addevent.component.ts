import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Event } from '../../model/event';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  typeEvents = [
    { "type": "event", "value": 'event' },
    { "type": "special", "value": 'special' }
  ];
  default: String;

  eventform: FormGroup;
  eventadd : Array<String> = [];

  constructor(private fb: FormBuilder, private _eventService: EventService, private _router: Router) { 
    this.default = "event";
  }

  ngOnInit() {
    this.eventform = this.fb.group({
      "title": ['', Validators.required],
      "description": ['', Validators.required],
      "type": ['', Validators.required]
    })
  }

  onSubmit(evt: Event) {
    console.log(this.eventform.value);
    this._eventService.addNewevent(evt)
      .subscribe(
        resNewEvent => {
          this.eventadd.push(resNewEvent);
          this._router.navigate(['/event']);
          console.log(resNewEvent);
          this.eventform.reset();
        });
  }

}
