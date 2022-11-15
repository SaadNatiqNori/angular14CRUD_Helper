import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCards, Autoplay, Keyboard, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards, Autoplay, Keyboard, Navigation]);

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
