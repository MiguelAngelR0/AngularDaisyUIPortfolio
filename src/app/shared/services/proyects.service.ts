import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { Proyect } from '../interfaces/proyect.interface';
import { PROYECTS_MOCK } from '../mocks/proyects.mock';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private translate = inject(TranslateService);

  constructor() { }

  getProyects(): Observable<Proyect[]> {
    return this.translate.get('proyectsSection.proyects').pipe(
      map(() => {
        return PROYECTS_MOCK.map(project => ({
          ...project,
          description: this.translate.instant(project.description)
        }));
      })
    );
  }

  getProyectsSync(): Proyect[] {
    return PROYECTS_MOCK.map(project => ({
      ...project,
      description: this.translate.instant(project.description)
    }));
  }
}
