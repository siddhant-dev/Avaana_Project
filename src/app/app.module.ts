import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherSearch, featherUser, featherCalendar, featherMapPin, featherHeart } from '@ng-icons/feather-icons';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './common/discover/discover.component';
import { CardComponent } from './common/card/card.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DiscoverComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgIconsModule.withIcons({featherSearch, featherUser, featherCalendar, featherMapPin, featherHeart}),
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
