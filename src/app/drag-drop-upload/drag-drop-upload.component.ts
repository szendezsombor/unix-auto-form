import {Component, HostBinding, HostListener, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-drop-upload',
  templateUrl: './drag-drop-upload.component.html',
  styleUrls: ['./drag-drop-upload.component.scss']
})
export class DragDropUploadComponent implements OnInit {

  @Output() newFilesEvent = new EventEmitter<FileList>();
  @HostBinding('class.fileover') fileOver: boolean;
  constructor() { }

  ngOnInit(): void {}

  @HostListener('dragover', ['$event'])
  onDragOver(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.newFilesEvent.emit(evt.dataTransfer.files);
    this.fileOver = false;
  }

  fileBrowserHandler(files: FileList): void {
    this.newFilesEvent.emit(files);
  }

}
