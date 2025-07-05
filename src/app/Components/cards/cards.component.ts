import { Component } from '@angular/core';
import Typed from 'typed.js';
import { GlobalServiceService } from '../../Services/global/global-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  constructor(private typingService: GlobalServiceService) {}

  ngAfterViewInit(): void {
  }
    startTyping(): void {
    const elements = document.querySelectorAll('.typed-text');
    elements.forEach((el, i) => {
      this.typingService.startTypingFromElement(`.typed-text:nth-of-type(${i + 1})`);
    });
  }
}
