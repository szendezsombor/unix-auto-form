import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataViewModel} from '../data-view.model';
import {SiteService} from './site.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() isShown: boolean;
  @Output() saveChange: EventEmitter<number[]> = new EventEmitter<number[]>();
  @ViewChild('infList') infList: ElementRef;
  @ViewChild('infListFooter') infListFooter: ElementRef;
  private intersectionObserver: IntersectionObserver;
  sites: DataViewModel[];

  checkedValues: number[] = [];

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.sites = this.siteService.getSites();
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

  ngAfterViewInit(): void {
    const options = {
      root: this.infList.nativeElement,
      rootMargin: '0px',
      threshold: 1
    };
    this.intersectionObserver = new IntersectionObserver(this.lazyLoad, options);
    this.intersectionObserver.observe(this.infListFooter.nativeElement);
  }

  lazyLoad = (_: any) => {
    // Fetch more data from service...
    this.sites = this.sites.concat(this.siteService.getSites());
  }
}
