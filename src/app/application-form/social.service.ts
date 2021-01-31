import {Injectable} from '@angular/core';
import {DataViewModel} from '../data-view.model';

@Injectable({ providedIn: 'root'})
export class SocialService {
  socialMediaArray: DataViewModel[] = [
    {value: 0, placeholder: 'Facebook'},
    {value: 1, placeholder: 'LinkedIn'},
    {value: 2, placeholder: 'Profession'},
    {value: 3, placeholder: 'Karrier oldal'},
    {value: 4, placeholder: 'Egyéb'},
  ];
  phoneCountryArray: DataViewModel[] = Array.from({length: 100}, (_, i) => ({
    value: (i + 1),
    placeholder: `+${(i + 1)}`
  }));

  constructor() {}

  getSocialMedia(): DataViewModel[] {
    return this.socialMediaArray;
  }

  getPhoneCountry(): DataViewModel[] {
    return this.phoneCountryArray;
  }

}
