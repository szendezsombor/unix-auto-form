import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataViewModel} from '../data-view.model';

@Injectable({providedIn: 'root'})
export class GeoService {

  private readonly counties: DataViewModel[] = [
    {
      value: 0, placeholder: 'Budapest', child: [
        {value: 0, placeholder: 'I. kerület'},
        {value: 1, placeholder: 'II. kerület'},
        {value: 2, placeholder: 'III. kerület'},
        {value: 3, placeholder: 'IV. kerület'},
        {value: 4, placeholder: 'V. kerület'},
        {value: 5, placeholder: 'VI. kerület'},
        {value: 6, placeholder: 'VII. kerület'},
        {value: 7, placeholder: 'VIII. kerület'},
        {value: 8, placeholder: 'IX. kerület'},
        {value: 9, placeholder: 'X. kerület'},
      ]
    },
    {
      value: 1, placeholder: 'Veszprém', child: [
        { value: 10, placeholder: 'Veszprém'},
        { value: 11, placeholder: 'Hajmáskér'}
        ]
    },
    {
      value: 2, placeholder: 'Fejér', child: [
        { value: 12, placeholder: 'Székesfehérvár'},
      ]
    }
];

  constructor() {}

  getCounties(): any {
    // This could be a rest call
    return this.counties;
  }
}
