export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  date: string;
}

export type PostingCommentStatus = 'idle' | 'loading' | 'success';
