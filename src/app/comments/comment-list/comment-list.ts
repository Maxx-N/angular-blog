import { Component, computed, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ProgressSpinner } from 'primeng/progressspinner';

import { CommentCard } from '../comment-card/comment-card';
import { CommentService } from '../comment-service';

@Component({
  imports: [CommentCard, ProgressSpinner],
  selector: 'app-comment-list',
  styleUrl: './comment-list.scss',
  templateUrl: './comment-list.html',
})
export class CommentList {
  private commentService = inject(CommentService);

  articleId = input.required<number>();

  isLoading = signal(true);

  comments = toSignal(
    toObservable(this.articleId).pipe(
      switchMap((id) =>
        this.commentService.getArticleComments(id).pipe(
          tap(() => this.isLoading.set(false)),
          catchError(() => {
            this.isLoading.set(false);
            return of([]);
          }),
        ),
      ),
    ),
  );

  commentsCount = computed(() => this.comments()?.length ?? 0);
}
