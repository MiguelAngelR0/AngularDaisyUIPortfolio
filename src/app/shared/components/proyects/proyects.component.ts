import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Proyect } from '../../interfaces/proyect.interface';
import { ProyectsService } from '../../services/proyects.service';
import { ProyectComponent } from './proyect/proyect.component';

@Component({
  selector: 'app-proyects',
  imports: [TranslatePipe, ProyectComponent],
  templateUrl: './proyects.component.html',
  styles: ``
})
export class ProyectsComponent implements OnInit, OnDestroy {

  private translate = inject(TranslateService);
  private proyectsService = inject(ProyectsService);

  private langChangeSubscription: Subscription;

  projects: Proyect[] = [];

  constructor() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private loadProjects(): void {
    this.projects = this.proyectsService.getProyectsSync();
  }
}
