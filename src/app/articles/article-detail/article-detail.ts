import { Component, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ArticleCard } from '../article-card/article-card';
import { ArticleService } from '../article-service';
import { CommentList } from '../../comments/comment-list/comment-list';
import { CommentForm } from '../../comments/comment-form/comment-form';
import { CommentService } from '../../comments/comment-service';

@Component({
  imports: [
    ArticleCard,
    ButtonDirective,
    RouterLink,
    ProgressSpinnerModule,
    CommentList,
    CommentForm,
  ],
  selector: 'app-article-detail',
  styleUrl: './article-detail.scss',
  templateUrl: './article-detail.html',
})
export class ArticleDetail {
  private articleService = inject(ArticleService);
  private commentService = inject(CommentService);

  articleId = input.required<number>();

  isLoading = signal(true);

  article = toSignal(
    toObservable(this.articleId).pipe(
      switchMap((id) =>
        this.articleService.getArticle(id).pipe(
          tap(() => this.isLoading.set(false)),
          catchError(() => {
            this.isLoading.set(false);
            return of(undefined);
          }),
        ),
      ),
    ),
  );
}
