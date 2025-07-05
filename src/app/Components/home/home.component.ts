import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  slides = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg'];
  glideConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
  };
}
