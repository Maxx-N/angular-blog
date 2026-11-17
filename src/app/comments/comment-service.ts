import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

import { environment } from '../../environments/environment';
import { Comment } from './comment.model';

@Service()
export class CommentService {
  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  private baseUrl = `${environment.apiUrl}/comments`;

  getArticleComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl, { params: { articleId } }).pipe(
      map((comments) =>
        comments.sort((comment1, comment2) => {
          const date1 = new Date(comment1.date);
          const date2 = new Date(comment2.date);
          return date1 > date2 ? -1 : +1;
        }),
      ),
      catchError((error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: "Les commentaires n'ont pas pu être chargés.",
        });
        throw error;
      }),
    );
  }
}
