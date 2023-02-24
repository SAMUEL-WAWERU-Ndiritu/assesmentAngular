import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParcelFormComponent, ParcelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
