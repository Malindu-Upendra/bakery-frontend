import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

interface AddMemberForm {
  firstName: string;
  lastName: string;
  username: string;
  city: string;
  birthdate: string;
  phone: string;
  email: string;
  userType: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() memberAdded = new EventEmitter<void>();

  isLoading = signal(false);
  errorMessage = signal('');
  successMessage = signal('');

  form: AddMemberForm = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    birthdate: '',
    phone: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private usersService: UsersService) {}

  close(): void {
    this.openChange.emit(false);
    this.resetForm();
  }

  resetForm(): void {
    this.form = {
      firstName: '', lastName: '', username: '', city: '',
      birthdate: '', phone: '', email: '', userType: '',
      password: '', confirmPassword: ''
    };
    this.errorMessage.set('');
    this.successMessage.set('');
  }

  onSubmit(): void {
    const required = ['firstName', 'lastName', 'username', 'city', 'birthdate', 'phone', 'password'] as const;
    for (const field of required) {
      if (!this.form[field]) {
        this.errorMessage.set(`${field} is required.`);
        return;
      }
    }

    if (this.form.password !== this.form.confirmPassword) {
      this.errorMessage.set('Passwords do not match.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.usersService.createUser({
      username: this.form.username,
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      city: this.form.city,
      birthdate: this.form.birthdate,
      phone: this.form.phone,
      email: this.form.email,
      password: this.form.password,
      userType: this.form.userType
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.result) {
          this.successMessage.set('Member added successfully!');
          this.memberAdded.emit();
          setTimeout(() => this.close(), 1200);
        } else {
          this.errorMessage.set(res.message || 'Failed to add member.');
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message || 'An error occurred.');
      }
    });
  }
}
