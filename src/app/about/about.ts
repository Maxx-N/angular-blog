import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  imports: [CardModule],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {}
