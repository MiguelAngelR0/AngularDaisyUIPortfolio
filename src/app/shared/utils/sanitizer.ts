import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Injectable({providedIn: 'root'})
export class SanitizerUtil{
constructor(private sanitizer: DomSanitizer) {}

sanitizeSvg(svg: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(svg);
}
}


