import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ArticleCard } from '../article-card/article-card';
import { ArticleService } from '../article-service';

@Component({
  imports: [ArticleCard],
  selector: 'app-article-list',
  styleUrl: './article-list.scss',
  templateUrl: './article-list.html',
})
export class ArticleList {
  private articleService = inject(ArticleService);

  articles = toSignal(this.articleService.getArticles(), { initialValue: [] });
}
