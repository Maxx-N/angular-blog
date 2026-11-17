import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  imports: [CardModule],
  selector: 'app-comment-card',
  styleUrl: './comment-card.scss',
  templateUrl: './comment-card.html',
})
export class CommentCard {}
