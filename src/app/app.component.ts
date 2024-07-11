import { Component } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private utils: UtilsService) {}

  ngOnInit() {
    this.utils.starCanvas();
  }
}
