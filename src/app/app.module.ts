import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSidenavModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
