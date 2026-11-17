import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

import { environment } from '../../environments/environment';
import { Article } from './article.model';

@Service()
export class ArticleService {
  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  private baseUrl = `${environment.apiUrl}/articles`;

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl).pipe(
      catchError((error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: "Les articles n'ont pas pu être chargés.",
        });
        throw error;
      }),
    );
  }

  getArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${articleId}`).pipe(
      catchError((error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: "L'article n'a pas pu être chargé.",
        });
        throw error;
      }),
    );
  }
}
