import {Injectable} from '@angular/core';
import {DataViewModel} from '../data-view.model';

@Injectable({providedIn: 'root'})
export class UnixCodesService {

  private readonly unixCodes: DataViewModel[] = [
    {value: 0, placeholder: '12345'},
    {value: 1, placeholder: '12456'},
    {value: 2, placeholder: '12567'},
    {value: 3, placeholder: '12678'},
  ];
  constructor() {}

  getUnixCodes(): any {
    // This could be a rest call
    return this.unixCodes;
  }
}
