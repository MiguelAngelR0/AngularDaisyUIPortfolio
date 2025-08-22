import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [NgClass, TranslateModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {


  isVisible = signal(false);
  private lastScrollTop = 0; // para guardar la última posición de scroll
  private scrollUpStart = 0;

  currentLang = 'es';
  isTranslationLoaded = signal(false); // Signal para controlar la visibilidad
  private langChangeSubscription: Subscription;

  constructor(private translate: TranslateService) {
    // Al inicio, te suscribes al evento de cambio de idioma
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.isTranslationLoaded.set(true); // Marca la traducción como cargada
    });

    this.translate.use('es');
  }

  ngOnInit(): void {
    // Si el idioma ya está cargado cuando se inicializa el componente,
    // (por ejemplo, si navegas a la página de nuevo), lo marcamos como listo
    if (this.translate.langs.includes(this.translate.currentLang)) {
      this.isTranslationLoaded.set(true);
    }
  }

  switchLanguage(lang: string) {
    console.log('Este es el idioma', lang)
    this.currentLang = lang;
    this.translate.use(lang);

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    // Scroll hacia abajo
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isVisible.set(true);
      // Reiniciamos referencia cuando bajamos
      this.scrollUpStart = currentScroll;
    }
    // Scroll hacia arriba
    else if (currentScroll < this.lastScrollTop) {
      if (this.scrollUpStart - currentScroll >= 300) {
        this.isVisible.set(false);
      }
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

}
