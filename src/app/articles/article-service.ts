import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Article } from './article.model';

@Service()
export class ArticleService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/articless`;

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }

  getArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${articleId}`);
  }
}
