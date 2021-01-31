import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApplicationFormComponent} from './application-form/application-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DragDropUploadComponent } from './drag-drop-upload/drag-drop-upload.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    DragDropUploadComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
