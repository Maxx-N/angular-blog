import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  imports: [CardModule, ButtonModule],
  selector: 'app-article-card',
  styleUrl: './article-card.scss',
  templateUrl: './article-card.html',
})
export class ArticleCard {}
