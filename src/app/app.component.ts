import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'holop-project',
  template: `
    <app-dashboard></app-dashboard>`,

})
export class AppComponent {
  title = 'Холоп';

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
