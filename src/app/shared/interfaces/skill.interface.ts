import { SafeHtml } from "@angular/platform-browser";

export interface Skill {
  id: string;
  name: string;
  svgContent: string | SafeHtml;
  hasModal?: boolean;
  modalId?: string;
  hasCertificate?: boolean;
  certificateUrl?: string;
  certificateImage?: string;
  categoria: 'frontend' | 'backend' | 'herramientas';
  nivelAprendizaje?: 'principiante' | 'intermedio' | 'avanzado' | 'experto';
}
