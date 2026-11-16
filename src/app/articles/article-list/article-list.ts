import { Component, signal } from '@angular/core';

import { ArticleCard } from '../article-card/article-card';
import { Article } from '../article.model';

@Component({
  imports: [ArticleCard],
  selector: 'app-article-list',
  styleUrl: './article-list.scss',
  templateUrl: './article-list.html',
})
export class ArticleList {
  articles = signal<Article[]>([]);
}
