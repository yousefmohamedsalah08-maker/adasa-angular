import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { BookOpen, ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, List, LucideAngularModule, Search } from 'lucide-angular';
import { PostCardComponent } from '../components/post-card.component';
import { categories, posts } from '../data/posts';

@Component({
  imports: [FormsModule, PostCardComponent, LucideAngularModule],
  templateUrl: './blog.component.html'
})
export class BlogComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly params = toSignal(this.route.queryParamMap, { requireSync: true });
  private readonly pageSize = 6;

  readonly categories = categories;
  readonly icons = { BookOpen, ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, List, Search };
  readonly search = computed(() => this.params().get('q') ?? '');
  readonly category = computed(() => {
    const value = this.params().get('category') ?? '';
    return categories.includes(value) ? value : '';
  });
  readonly view = computed(() => this.params().get('view') === 'list' ? 'list' : 'grid');

  readonly filtered = computed(() => {
    const query = this.search().trim().toLowerCase();
    return posts.filter(post =>
      (!this.category() || post.category === this.category()) &&
      [post.title, post.excerpt, post.author].some(value => value.toLowerCase().includes(query))
    );
  });

  readonly pageCount = computed(() => Math.ceil(this.filtered().length / this.pageSize));
  readonly pages = computed(() => Array.from({ length: this.pageCount() }, (_, index) => index + 1));
  readonly page = computed(() => {
    const requested = Number(this.params().get('page'));
    return Number.isInteger(requested) && requested > 0
      ? Math.min(requested, this.pageCount() || 1)
      : 1;
  });
  readonly visiblePosts = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  update(queryParams: Record<string, string | number | null>, replaceUrl = false) {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl
    });
  }

  async goToPage(page: number, results: HTMLElement) {
    if (await this.update({ page: page === 1 ? null : page })) {
      results.scrollIntoView({ block: 'start' });
    }
  }
}
