import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { DecodeComponent } from './components/decode/decode.component';
import { EncodeComponent } from './components/encode/encode.component';

@NgModule({
  declarations: [
    AppComponent,
    DecodeComponent,
    EncodeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
