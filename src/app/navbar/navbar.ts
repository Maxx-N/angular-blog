import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { RouterLinkActive } from '@angular/router';

@Component({
  imports: [ButtonModule, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {}
