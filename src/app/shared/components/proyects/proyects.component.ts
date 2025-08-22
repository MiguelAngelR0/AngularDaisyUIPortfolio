import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-proyects',
  imports: [],
  templateUrl: './proyects.component.html',
  styles: ``
})


export class ProyectsComponent {

  translate = inject(TranslateService);

  private langChangeSubscription: Subscription;

  projects: Project[] = [];

  constructor() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTimelineData();
    });
  }

  ngOnInit(): void {
    // Carga los datos de la línea de tiempo cuando el componente se inicializa
    // y cada vez que cambia el idioma.
    this.loadTimelineData();
  }

  loadTimelineData(): void {

    this.projects = [
      {
        id: 1,
        title: 'E-commerce App',
        description: this.translate.instant('proyectsSection.proyects.proyect_1.description')

        ,
        image: 'assets/tesloShopAdmin.png',
        tags: ['Angular', 'Nest.js', 'MongoDB'],
        demoUrl: 'https://spiffy-flan-80bdcf.netlify.app/',
        githubUrl: 'https://github.com/MiguelAngelR0/teslo-shop',
        isNew: true
      },
      {
        id: 2,
        title: 'Country Search App',
        description: this.translate.instant('proyectsSection.proyects.proyect_2.description'),
        image: 'assets/countryApp.png',
        tags: ['Angular', 'TypeScript', 'Tailwind', 'DaisyUI'],
        demoUrl: 'https://miguelangelr0.github.io/country-app/',
        githubUrl: 'https://github.com/MiguelAngelR0/country-app'
      },
      {
        id: 3,
        title: 'Gifs App',
        description: this.translate.instant('proyectsSection.proyects.proyect_3.description'),
        image: 'assets/gifApp.png',
        tags: ['Angular', 'Tailwind', 'DaisyUI'],
        demoUrl: 'https://miguelangelr0.github.io/gifs-app/',
        githubUrl: 'https://github.com/MiguelAngelR0/gifs-app',
        isNew: true
      },
    ];
  }


}
