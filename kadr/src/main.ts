import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

registerLocaleData(localeAr);

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(console.error);
