import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { Comment } from '../comment.model';

@Component({
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, TextareaModule],
  selector: 'app-comment-form',
  styleUrl: './comment-form.scss',
  templateUrl: './comment-form.html',
})
export class CommentForm {
  isLoading = input.required<boolean>();
  publishButtonClicked = output<Omit<Comment, 'id' | 'articleId' | 'date'>>();

  form = new FormGroup({
    author: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    content: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(10)],
      nonNullable: true,
    }),
  });

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.publishButtonClicked.emit(this.form.getRawValue());
  }
}
