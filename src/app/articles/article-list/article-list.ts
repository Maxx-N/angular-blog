import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { ProgressSpinner } from 'primeng/progressspinner';

import { ArticleCard } from '../article-card/article-card';
import { ArticleService } from '../article-service';

@Component({
  imports: [ArticleCard, RouterLink, ProgressSpinner],
  selector: 'app-article-list',
  styleUrl: './article-list.scss',
  templateUrl: './article-list.html',
})
export class ArticleList {
  private articleService = inject(ArticleService);

  isLoading = signal(true);

  articles = toSignal(
    this.articleService.getArticles().pipe(
      tap(() => this.isLoading.set(false)),
      catchError(() => {
        this.isLoading.set(false);
        return of([]);
      }),
    ),
    { initialValue: [] },
  );
}
