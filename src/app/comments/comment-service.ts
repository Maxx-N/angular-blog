import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Comment } from './comment.model';

@Service()
export class CommentService {
  private http = inject(HttpClient);
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
    );
  }
}
