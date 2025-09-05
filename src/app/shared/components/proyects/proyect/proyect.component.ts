import { Component, Input } from '@angular/core';
import { Proyect } from '../../../interfaces/proyect.interface';

@Component({
  selector: 'app-proyect',
  imports: [],
  templateUrl: './proyect.component.html',
  styles: ``
})
export class ProyectComponent {
  @Input() project!: Proyect;
}