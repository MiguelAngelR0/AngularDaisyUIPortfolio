import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  ngAfterViewInit() {
    gsap.registerPlugin(MorphSVGPlugin);

    gsap.to("#wavePath", {
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      morphSVG: {
        shape: "M0,0L40,48C80,96,160,192,240,213.3C320,235,400,181,480,181.3C560,181,640,235,720,250.7C800,267,880,245,960,229.3C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      }
    });
  }

}


