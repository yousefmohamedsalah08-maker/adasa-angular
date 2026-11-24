import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Camera, LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" routerLink="/" aria-label="كادر، الرئيسية">
          <span class="brand-icon"><lucide-icon [img]="camera" [size]="23" /></span>
          <span>كادر<small>مدونة التصوير</small></span>
        </a>

        <nav class="main-nav" aria-label="التنقل الرئيسي">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">الرئيسية</a>
          <a routerLink="/blog" routerLinkActive="active" ariaCurrentWhenActive="page">المقالات</a>
        </nav>

        <a class="button button-header" routerLink="/blog" aria-label="تصفح المقالات">
          <lucide-icon [img]="search" [size]="17" /> <span>تصفح المقالات</span>
        </a>
      </div>
    </header>

    <main id="main"><router-outlet /></main>

    <footer class="site-footer">
      <div class="wrap footer-inner">
        <a class="brand" routerLink="/" aria-label="كادر، الرئيسية">
          <span class="brand-icon"><lucide-icon [img]="camera" [size]="21" /></span>
          <span>كادر<small>مدونة التصوير</small></span>
        </a>
        <nav aria-label="روابط التذييل">
          <a routerLink="/">الرئيسية</a>
          <a routerLink="/blog">المقالات</a>
        </nav>
        <small>© ٢٠٢٦ كادر</small>
      </div>
    </footer>
  `
})
export class AppComponent {
  readonly camera = Camera;
  readonly search = Search;

  constructor() {
    let previousPath = '';
    inject(Router).events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('?')[0];
        if (path !== previousPath) {
          previousPath = path;
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
