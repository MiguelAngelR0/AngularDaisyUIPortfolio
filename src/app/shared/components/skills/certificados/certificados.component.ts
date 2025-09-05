import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Certificate } from '../../../interfaces/certificate.interface';

@Component({
  selector: 'app-certificados',
  imports: [CommonModule, TranslateModule],
  templateUrl: './certificados.component.html',
  styles: ``
})
export class CertificadosComponent {
  @Input() certificate!: Certificate;
}
