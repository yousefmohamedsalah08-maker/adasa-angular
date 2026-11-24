import data from './posts.json';

export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  author: string;
  date: string;
  minutes: number;
  sections: { title: string; text: string }[];
}

export const posts: Post[] = data;
export const categories = [...new Set(posts.map(post => post.category))];
