import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, delay, map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Comment } from './comment.model';

@Service()
export class CommentService {
  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  private baseUrl = `${environment.apiUrl}/comments`;

  getArticleComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl, { params: { articleId } }).pipe(
      delay(500),
      map((comments) =>
        comments
          .sort((comment1, comment2) => (comment1.id > comment2.id ? -1 : +1))
          .sort((comment1, comment2) => {
            const date1 = new Date(comment1.date);
            const date2 = new Date(comment2.date);
            return date1 > date2 ? -1 : +1;
          }),
      ),
      catchError((error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: "Les commentaires n'ont pas pu être chargés.",
        });
        throw error;
      }),
    );
  }

  postComment(commentToPost: Omit<Comment, 'id'>): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl, commentToPost).pipe(
      delay(500),
      catchError((error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: "Le commentaire n'a pas pu être ajouté.",
        });
        throw error;
      }),
    );
  }
}
