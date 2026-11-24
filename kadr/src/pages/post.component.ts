import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarDays, Clock3, LucideAngularModule, UserRound } from 'lucide-angular';
import { PostCardComponent } from '../components/post-card.component';
import { posts } from '../data/posts';
import { NotFoundComponent } from './not-found.component';

@Component({
  imports: [DatePipe, RouterLink, PostCardComponent, NotFoundComponent, LucideAngularModule],
  templateUrl: './post.component.html'
})
export class PostComponent {
  private readonly params = toSignal(inject(ActivatedRoute).paramMap, { requireSync: true });
  readonly post = computed(() => posts.find(post => post.slug === this.params().get('slug')));
  readonly related = computed(() => posts.filter(post =>
    post.category === this.post()?.category && post.slug !== this.post()?.slug
  ).slice(0, 3));
  readonly icons = { CalendarDays, Clock3, UserRound };
}
