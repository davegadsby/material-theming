import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { ExampleThemeComponent } from './example-theme/example-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleThemeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
