import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  year = signal<number>(new Date().getFullYear());


}
