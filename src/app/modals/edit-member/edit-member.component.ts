import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

interface EditMemberForm {
  firstName: string;
  lastName: string;
  city: string;
  birthdate: string;
  phone: string;
  email: string;
  userType: string;
}

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.css'
})
export class EditMemberComponent implements OnChanges {
  @Input() open = false;
  @Input() user: User | null = null;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() memberUpdated = new EventEmitter<void>();

  isLoading = signal(false);
  errorMessage = signal('');
  successMessage = signal('');

  form: EditMemberForm = {
    firstName: '',
    lastName: '',
    city: '',
    birthdate: '',
    phone: '',
    email: '',
    userType: ''
  };

  constructor(private usersService: UsersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user) {
      this.form = {
        firstName: this.user.firstName || '',
        lastName: this.user.lastName || '',
        city: this.user.city || '',
        birthdate: this.user.birthdate || '',
        phone: this.user.phone || '',
        email: this.user.email || '',
        userType: this.user.role?.role || ''
      };
    }
  }

  close(): void {
    this.openChange.emit(false);
    this.errorMessage.set('');
    this.successMessage.set('');
  }

  onSubmit(): void {
    if (!this.user) return;

    if (!this.form.firstName || !this.form.lastName || !this.form.phone) {
      this.errorMessage.set('First name, last name, and phone are required.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.usersService.updateUser({
      _id: this.user.id,
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      city: this.form.city,
      birthDate: this.form.birthdate,
      phone: this.form.phone,
      email: this.form.email,
      roles: this.form.userType
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.result) {
          this.successMessage.set('Member updated successfully!');
          this.memberUpdated.emit();
          setTimeout(() => this.close(), 1200);
        } else {
          this.errorMessage.set(res.message || 'Failed to update member.');
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message || 'An error occurred.');
      }
    });
  }
}
