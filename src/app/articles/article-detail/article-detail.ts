import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ButtonDirective } from 'primeng/button';

import { ArticleCard } from '../article-card/article-card';
import { ArticleService } from '../article-service';

@Component({
  imports: [ArticleCard, ButtonDirective, RouterLink],
  selector: 'app-article-detail',
  styleUrl: './article-detail.scss',
  templateUrl: './article-detail.html',
})
export class ArticleDetail {
  private articleService = inject(ArticleService);

  articleId = input.required<number>();

  article = toSignal(
    toObservable(this.articleId).pipe(switchMap((id) => this.articleService.getArticle(id))),
  );
}
