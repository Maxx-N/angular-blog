import { Component, computed, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { Article } from '../article.model';

@Component({
  imports: [CardModule, ButtonModule],
  selector: 'app-article-card',
  styleUrl: './article-card.scss',
  templateUrl: './article-card.html',
})
export class ArticleCard {
  article = input.required<Article>();

  cardSubheader = computed(() => `${this.article().author} • ${this.article().date}`);
}
