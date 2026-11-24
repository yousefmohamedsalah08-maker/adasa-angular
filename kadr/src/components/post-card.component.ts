import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Clock3, LucideAngularModule } from 'lucide-angular';
import { Post } from '../data/posts';

@Component({
  selector: 'app-post-card',
  imports: [DatePipe, RouterLink, LucideAngularModule],
  template: `
    <article class="post-card">
      <a class="card-link" [routerLink]="['/blog', post().slug]">
        <div class="card-image">
          <img [src]="post().image" [alt]="post().alt" loading="lazy" />
          <span class="tag">{{ post().category }}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>{{ post().date | date:'d MMMM y':undefined:'ar-EG' }}</span>
            <span><lucide-icon [img]="clock" [size]="14" /> {{ post().minutes }} دقائق</span>
          </div>
          <h3>{{ post().title }}</h3>
          <p>{{ post().excerpt }}</p>
          <div class="card-bottom">
            <span>{{ post().author }}</span>
            <span class="read-link">اقرأ المقال</span>
          </div>
        </div>
      </a>
    </article>
  `
})
export class PostCardComponent {
  readonly post = input.required<Post>();
  readonly clock = Clock3;
}
