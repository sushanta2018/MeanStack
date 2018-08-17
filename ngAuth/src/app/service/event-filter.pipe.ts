import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../model/event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(items: Event[], type: String) {
    return items.filter((item : Event) => item.type === type);
  }

}
