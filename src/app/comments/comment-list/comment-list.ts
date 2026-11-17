import { Component } from '@angular/core';

import { CommentCard } from '../comment-card/comment-card';

@Component({
  imports: [CommentCard],
  selector: 'app-comment-list',
  styleUrl: './comment-list.scss',
  templateUrl: './comment-list.html',
})
export class CommentList {}
