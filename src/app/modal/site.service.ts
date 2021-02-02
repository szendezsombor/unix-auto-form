import {Injectable} from '@angular/core';
import {DataViewModel} from '../data-view.model';

@Injectable({providedIn: 'root'})
export class SiteService {
  private sites: DataViewModel[] = [
    {value: 0, placeholder: 'Eplényi telphely'},
    {value: 1, placeholder: 'Masik telphely'},
    {value: 2, placeholder: 'Harmadik telphely'},
    {value: 3, placeholder: 'Negyedi telphely'},
    {value: 4, placeholder: 'Ötödik telphely'},
    {value: 5, placeholder: 'Hatodik telphely'},
    {value: 6, placeholder: 'Hetedik telphely'},
    {value: 7, placeholder: 'Nyolcadik telphely'},
  ];

  getSites(): DataViewModel[] {
    return this.sites;
  }
}
