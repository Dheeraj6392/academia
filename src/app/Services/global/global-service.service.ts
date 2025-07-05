import { Injectable } from '@angular/core';
import Typed from 'typed.js';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  private typedInstances: { [selector: string]: Typed } = {};

  startTypingFromElement(selector: string) {
    const element = document.querySelector(selector);
    if (!element) return;

    const originalText =
      element.getAttribute('data-text') || element.textContent?.trim() || '';

    // Prevent multiple cursors
    if (this.typedInstances[selector]) {
      this.typedInstances[selector].destroy();
      delete this.typedInstances[selector];
    }

    element.textContent = ''; // Clear content before typing

    const typed = new Typed(selector, {
      strings: [originalText],
      typeSpeed: 50,
      backSpeed: 0,
      loop: false,
      showCursor: true,
      onComplete: () => {
        setTimeout(() => {
          this.typedInstances[selector]?.destroy(); // Cleanup
          element.textContent = '';
          this.startTypingFromElement(selector); // Restart typing
        }, 3000);
      },
    });

    this.typedInstances[selector] = typed;
  }
}
