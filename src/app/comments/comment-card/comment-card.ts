import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';

import { Comment } from '../comment.model';

@Component({
  imports: [CardModule],
  selector: 'app-comment-card',
  styleUrl: './comment-card.scss',
  templateUrl: './comment-card.html',
})
export class CommentCard {
  comment = input.required<Comment>();
}
