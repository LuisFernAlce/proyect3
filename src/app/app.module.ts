import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HistoryComponent } from './history/history.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AttentionComponent } from './attention/attention.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    MenuComponent,
    DeliveryComponent,
    AttentionComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
