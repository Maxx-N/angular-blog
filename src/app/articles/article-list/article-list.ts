import { Component } from '@angular/core';

import { ArticleCard } from '../article-card/article-card';

@Component({
  imports: [ArticleCard],
  selector: 'app-article-list',
  styleUrl: './article-list.scss',
  templateUrl: './article-list.html',
})
export class ArticleList {}
