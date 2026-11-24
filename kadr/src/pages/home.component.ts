import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Aperture, BookOpen, Camera, Focus, LucideAngularModule, Mountain, Sun, UserRound } from 'lucide-angular';
import { PostCardComponent } from '../components/post-card.component';
import { categories, posts } from '../data/posts';

@Component({
  imports: [RouterLink, PostCardComponent, LucideAngularModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly latest = posts.slice(0, 3);
  readonly book = BookOpen;
  readonly camera = Camera;

  readonly topics = categories.map((name, index) => ({
    name,
    count: posts.filter(post => post.category === name).length,
    icon: [Sun, UserRound, Mountain, Focus, Aperture][index] ?? Camera
  }));
}
