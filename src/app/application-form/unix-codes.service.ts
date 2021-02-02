import {Injectable} from '@angular/core';
import {DataViewModel} from '../data-view.model';

@Injectable({providedIn: 'root'})
export class UnixCodesService {

  private readonly unixCodes: any[] = [
    {value: 0, placeholder: '12345', img: 'assets/profile-pic-1.jpg', name: 'Kiss Péter'},
    {value: 1, placeholder: '12456', img: 'assets/profile-pic-2.jpg', name: 'Nagy András'},
    {value: 2, placeholder: '12567', img: 'assets/profile-pic-3.jpg', name: 'Minta Attila'},
    {value: 3, placeholder: '12678', img: 'assets/profile-pic-4.jpg', name: 'Minta Pista'},
  ];
  constructor() {}

  getUnixCodes(): any {
    // This could be a rest call
    return this.unixCodes;
  }
}
