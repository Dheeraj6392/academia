import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrl: './notes-dashboard.component.css'
})
export class NotesDashboardComponent {
  searchTerm: string = '';

  onSearch(): void {
    // Just triggers re-render due to [(ngModel)] binding
  }

  highlight(text: string): string {
    if (!this.searchTerm) return text;

    const regex = new RegExp(`(${this.escapeRegExp(this.searchTerm)})`, 'gi');
    return text.replace(regex, `<mark>$1</mark>`);
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
