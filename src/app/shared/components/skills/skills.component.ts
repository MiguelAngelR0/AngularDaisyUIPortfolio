import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { SkillComponent } from './skill/skill.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { Skill } from '../../interfaces/skill.interface';
import { Certificate } from '../../interfaces/certificate.interface';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule, CommonModule, SkillComponent, CertificadosComponent],
  templateUrl: './skills.component.html',
  styles: `
    .box {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
  `
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  certificates: Certificate[] = [];

  skillService = inject(SkillsService);

  ngOnInit(): void {
    this.loadSkills();
    this.loadCertificates();
  }

  private loadSkills(): void {
    this.skillService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  private loadCertificates(): void {
    this.skillService.getCertificates().subscribe(certificates => {
      this.certificates = certificates;
    });
  }



  getFrontendSkills(): Skill[] {
    return this.skills.filter(skill => skill.categoria === 'frontend');
  }

  getBackendSkills(): Skill[] {
    return this.skills.filter(skill => skill.categoria === 'backend');
  }

  getToolsSkills(): Skill[] {
    return this.skills.filter(skill => skill.categoria === 'herramientas');
  }

}
