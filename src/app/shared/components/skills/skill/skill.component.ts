import { Component, inject, Input, OnInit } from '@angular/core';
import { Skill } from '../../../interfaces/skill.interface';
import { SanitizerUtil } from '../../../utils/sanitizer';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styles: `
    .skill-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(0px);
    }
    
    .skill-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .skill-card:active {
      transform: translateY(-2px);
      transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Mobile touch feedback */
    @media (hover: none) and (pointer: coarse) {
      .skill-card:active {
        transform: translateY(-6px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }
    }
  `
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;

  sanitizer = inject(SanitizerUtil);

  ngOnInit() {
    // Solo sanitizar si el svgContent es un string (no ya sanitizado)
    if (typeof this.skill.svgContent === 'string') {
      this.skill.svgContent = this.sanitizer.sanitizeSvg(this.skill.svgContent);
    }
  }

  onSkillClick() {
    if (this.skill.hasModal) {
      const modal = document.getElementById(this.skill.modalId!) as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  }



  getBadgeText(nivelAprendizaje: string): string {
    switch (nivelAprendizaje) {
      case 'principiante':
        return '🌱';
      case 'intermedio':
        return '🌿';
      case 'avanzado':
        return '🌳';
      default:
        return '?';
    }
  }

  getTooltipText(nivelAprendizaje: string): string {
    switch (nivelAprendizaje) {
      case 'principiante':
        return 'Conocimientos básicos y fundamentos';
      case 'intermedio':
        return 'Experiencia práctica y conceptos avanzados';
      case 'avanzado':
        return 'Dominio sólido y experiencia en proyectos complejos';
      default:
        return 'Nivel no especificado';
    }
  }
}
