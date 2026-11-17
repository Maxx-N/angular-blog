export interface Comment {
  id: number;
  articleId: number;
  author: string;
  content: string;
  date: string;
}

export type PostingCommentStatus = 'idle' | 'loading' | 'success';
