import { Routes } from '@angular/router';

import { ArticleList } from './articles/article-list/article-list';
import { ArticleDetail } from './articles/article-detail/article-detail';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleList },
  { path: 'articles/:articleId', component: ArticleDetail },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'articles' },
];
