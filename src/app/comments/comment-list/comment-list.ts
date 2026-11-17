import { Component, computed, input } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

import { CommentCard } from '../comment-card/comment-card';
import { Comment } from '../comment.model';

@Component({
  imports: [CommentCard, ProgressSpinner],
  selector: 'app-comment-list',
  styleUrl: './comment-list.scss',
  templateUrl: './comment-list.html',
})
export class CommentList {
  comments = input.required<Comment[]>();
  isLoading = input.required();

  commentsCount = computed(() => this.comments()?.length ?? 0);
}
