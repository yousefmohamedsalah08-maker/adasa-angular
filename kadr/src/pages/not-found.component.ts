import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Focus, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, LucideAngularModule],
  template: `
    <section class="not-found wrap">
      <lucide-icon [img]="focus" [size]="38" />
      <strong class="error-code">404</strong>
      <h1>الصفحة مش موجودة</h1>
      <p>ممكن الرابط يكون اتغير أو الصفحة اتحذفت.</p>
      <a class="button button-primary" routerLink="/">ارجع للرئيسية</a>
      <a class="button button-outline" routerLink="/blog">تصفح المقالات</a>
    </section>
  `
})
export class NotFoundComponent {
  readonly focus = Focus;
}
