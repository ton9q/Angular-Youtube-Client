import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
