import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';

import {
  MdMenuModule, MdToolbarModule, MdIconModule,
  MdTabsModule, MdSidenavModule} from '@angular/material';
import { MiddleContentTabsComponent } from './components/middle-content-tabs/middle-content-tabs.component';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuBarComponent,
    MiddleContentTabsComponent,
    LeftSidenavComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdSidenavModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
