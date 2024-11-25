import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('userId');
    window.location.href = '/login';
  }
}
