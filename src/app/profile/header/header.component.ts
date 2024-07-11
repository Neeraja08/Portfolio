import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private utils: UtilsService) {}
  ind = 0;
  filter = 'blue';
  ngOnInit() {}

  switchTheme() {
    this.ind++;
    let colors: any = [217, 5, 50, 100, 300];
    let filters: any = ['blue', 'red', 'yellow', 'green', 'purple'];
    this.utils.starCanvas(colors[this.ind % colors.length]);
    this.utils.introBg(filters[this.ind % filters.length]);
    this.filter = filters[this.ind % filters.length];
  }
}
