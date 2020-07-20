import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  title: string = 'Test';
  content: string = 'Coucou toi';
  loveIts: number = 13;
  createdAt: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
