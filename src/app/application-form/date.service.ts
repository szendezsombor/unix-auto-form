import {Injectable} from '@angular/core';
import {DataViewModel} from '../data-view.model';

@Injectable({providedIn: 'root'})
export class DateService {
  monthArray: DataViewModel[] = [
    {value: 0, placeholder: 'Január'},
    {value: 1, placeholder: 'Február'},
    {value: 2, placeholder: 'Március'},
    {value: 3, placeholder: 'Április'},
    {value: 4, placeholder: 'Május'},
    {value: 5, placeholder: 'Július'},
    {value: 6, placeholder: 'Június'},
    {value: 7, placeholder: 'Augusztus'},
    {value: 8, placeholder: 'Szeptember'},
    {value: 9, placeholder: 'Október'},
    {value: 10, placeholder: 'November'},
    {value: 11, placeholder: 'December'},
  ];
  dayArray: DataViewModel[] = Array.from({length: 31}, (_, i) => ({value: (i), placeholder: `${(i + 1)}`}));

  constructor() {}

  getMoths(): DataViewModel[] {
    return this.monthArray;
  }

  getDays(): DataViewModel[] {
    return this.dayArray;
  }
}
