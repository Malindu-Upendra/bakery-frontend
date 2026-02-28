import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userName = signal('');

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getLoggedInUser().subscribe({
      next: (res) => {
        if (res.result && res.user) {
          this.userName.set(`${res.user.firstName} ${res.user.lastName}`);
        }
      },
      error: () => {
        this.userName.set('');
      }
    });
  }
}
