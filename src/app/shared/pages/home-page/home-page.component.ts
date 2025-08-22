import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../components/hero/hero.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ProyectsComponent } from '../../components/proyects/proyects.component';
import { ResourcesComponent } from "../../components/resources/resources.component";
import { SkillsComponent } from '../../components/skills/skills.component';
import { FrequentlyAskedComponent } from '../../components/frequently-asked/frequently-asked.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [ CommonModule , HeaderComponent, HeroComponent, TimelineComponent, ContactComponent, ProyectsComponent, ResourcesComponent,SkillsComponent, FrequentlyAskedComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styles:`

  `
})
export class HomePageComponent {

}
