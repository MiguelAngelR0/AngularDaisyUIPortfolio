import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styles: `
    .box {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  `
})
export class SkillsComponent {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    });
  }

}
