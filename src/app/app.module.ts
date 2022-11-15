import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './main/user/user.component';
import { ShowComponent } from './main/user/show/show.component';
import { UserService } from './main/user.service';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SwiperModule } from 'swiper/angular';
import { HomeSliderComponent } from './main/home-slider/home-slider.component';
import { CategoryComponent } from './main/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    UserComponent,
    ShowComponent,
    SidebarComponent,
    HomeSliderComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    SwiperModule,
  ],
  providers: [UserService, { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent]
})
export class AppModule { }
