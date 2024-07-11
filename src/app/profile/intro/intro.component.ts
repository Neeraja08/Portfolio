import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  cvUrl: any;
  introBg = 'blue';
  constructor(
    private profileService: ProfileService,
    private utils: UtilsService
  ) {
    this.utils.intro.subscribe((res) => {
      this.introBg = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.cvUrl = this.profileService.resumeurl;
  }
}
