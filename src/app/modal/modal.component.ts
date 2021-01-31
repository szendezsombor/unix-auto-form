import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataViewModel} from '../data-view.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isShown: boolean;
  @Output() saveChange: EventEmitter<number[]> = new EventEmitter<number[]>();
  sites: DataViewModel[] = [
    {value: 0, placeholder: 'Eplényi telphely'},
    {value: 1, placeholder: 'Masik telphely'},
    {value: 2, placeholder: 'Harmadik telphely'},
    {value: 3, placeholder: 'Negyedi telphely'},
    {value: 4, placeholder: 'Ötödik telphely'},
    {value: 5, placeholder: 'Hatodik telphely'},
    {value: 6, placeholder: 'Hetedik telphely'},
    {value: 7, placeholder: 'Nyolcadik telphely'},
  ];

  checkedValues: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addToChecked(event: Event, value: number): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.checkedValues.push(value);
    } else {
      this.checkedValues.splice(this.checkedValues.indexOf(value), 1);
    }
  }

  save(): void {
    this.saveChange.emit(this.checkedValues);
    this.isShown = false;
  }

  close(): void {
    this.saveChange.emit(this.checkedValues);
    this.isShown = false;
  }
}
