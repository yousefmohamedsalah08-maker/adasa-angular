import { Routes } from '@angular/router';
import { posts } from './data/posts';
import { HomeComponent } from './pages/home.component';
import { BlogComponent } from './pages/blog.component';
import { PostComponent } from './pages/post.component';
import { NotFoundComponent } from './pages/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'كادر | مدونة التصوير الفوتوغرافي' },
  { path: 'blog', component: BlogComponent, title: 'المقالات | كادر' },
  {
    path: 'blog/:slug',
    component: PostComponent,
    title: route => (posts.find(post => post.slug === route.params['slug'])?.title ?? 'الصفحة غير موجودة') + ' | كادر'
  },
  { path: '**', component: NotFoundComponent, title: 'الصفحة غير موجودة | كادر' }
];
