import { Component, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { CommentForm } from '../../comments/comment-form/comment-form';
import { CommentList } from '../../comments/comment-list/comment-list';
import { ArticleCard } from '../article-card/article-card';
import { ArticleService } from '../article-service';
import { CommentService } from '../../comments/comment-service';
import { Comment } from '../../comments/comment.model';

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

  isLoadingArticle = signal(true);
  isLoadingComments = signal(true);
  isPostingComment = signal(false);

  article = toSignal(
    toObservable(this.articleId).pipe(
      switchMap((id) =>
        this.articleService.getArticle(id).pipe(
          tap(() => this.isLoadingArticle.set(false)),
          catchError(() => {
            this.isLoadingArticle.set(false);
            return of(undefined);
          }),
        ),
      ),
    ),
  );

  comments = toSignal(
    toObservable(this.articleId).pipe(
      switchMap((id) =>
        this.commentService.getArticleComments(id).pipe(
          tap(() => this.isLoadingComments.set(false)),
          catchError(() => {
            this.isLoadingComments.set(false);
            return of<Comment[]>([]);
          }),
        ),
      ),
    ),
    { initialValue: [] },
  );
}
