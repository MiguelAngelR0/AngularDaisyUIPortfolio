import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../interfaces/skill.interface';
import { Certificate } from '../interfaces/certificate.interface';
import { SKILLS_MOCK, CERTIFICATES_MOCK } from '../mocks/skills.mock';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  /**
   * Obtiene todas las skills
   */
  getSkills(): Observable<Skill[]> {
    return of(SKILLS_MOCK);
  }

  /**
   * Obtiene todos los certificados
   */
  getCertificates(): Observable<Certificate[]> {
    return of(CERTIFICATES_MOCK);
  }

  /**
   * Obtiene skills filtradas por categoría
   */
  getSkillsByCategory(categoria: string): Observable<Skill[]> {
    const filteredSkills = SKILLS_MOCK.filter(skill => skill.categoria === categoria);
    return of(filteredSkills);
  }

  /**
   * Obtiene skills de frontend
   */
  getFrontendSkills(): Observable<Skill[]> {
    return this.getSkillsByCategory('frontend');
  }

  /**
   * Obtiene skills de backend
   */
  getBackendSkills(): Observable<Skill[]> {
    return this.getSkillsByCategory('backend');
  }

  /**
   * Obtiene skills de herramientas
   */
  getToolsSkills(): Observable<Skill[]> {
    return this.getSkillsByCategory('herramientas');
  }

  /**
   * Obtiene una skill por ID
   */
  getSkillById(id: string): Observable<Skill | undefined> {
    const skill = SKILLS_MOCK.find(skill => skill.id === id);
    return of(skill);
  }

  /**
   * Obtiene un certificado por ID
   */
  getCertificateById(id: string): Observable<Certificate | undefined> {
    const certificate = CERTIFICATES_MOCK.find(cert => cert.id === id);
    return of(certificate);
  }
}
