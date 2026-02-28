import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { AddMemberComponent } from '../../modals/add-member/add-member.component';
import { EditMemberComponent } from '../../modals/edit-member/edit-member.component';

type StatusFilter = 'all' | 'enabled' | 'disabled';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, AddMemberComponent, EditMemberComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users = signal<User[]>([]);
  totalRecords = signal(0);
  totalPages = signal(0);
  currentPage = signal(1);
  searchText = signal('');
  activeFilter = signal<StatusFilter>('all');
  isLoading = signal(false);

  isAddModalOpen = false;
  isEditModalOpen = false;
  selectedUser: User | null = null;

  private searchTimeout: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  getStatusValue(): number | string {
    const filter = this.activeFilter();
    if (filter === 'enabled') return 4;
    if (filter === 'disabled') return -4;
    return '';
  }

  loadUsers(): void {
    this.isLoading.set(true);
    this.usersService.getAllUsers({
      currentPage: this.currentPage(),
      searchText: this.searchText(),
      status: this.getStatusValue()
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.users.set(res.users || []);
        this.totalRecords.set(res.totalRecords);
        this.totalPages.set(res.totalPages);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  onSearchChange(value: string): void {
    this.searchText.set(value);
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage.set(1);
      this.loadUsers();
    }, 400);
  }

  setFilter(filter: StatusFilter): void {
    this.activeFilter.set(filter);
    this.currentPage.set(1);
    this.loadUsers();
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
      this.loadUsers();
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
      this.loadUsers();
    }
  }

  openAddModal(): void {
    this.isAddModalOpen = true;
  }

  openEditModal(user: User): void {
    this.selectedUser = user;
    this.isEditModalOpen = true;
  }

  onMemberAdded(): void {
    this.currentPage.set(1);
    this.loadUsers();
  }

  onMemberUpdated(): void {
    this.loadUsers();
  }

  getStatusLabel(status: number): string {
    if (status === 4) return 'Enabled';
    if (status === -4) return 'Disabled';
    if (status === 0) return 'Pending';
    return 'Unknown';
  }

  getStatusClass(status: number): string {
    if (status === 4) return 'badge-enabled';
    if (status === -4) return 'badge-disabled';
    return 'badge-pending';
  }

  getInitials(user: User): string {
    return `${user.firstName?.charAt(0) ?? ''}${user.lastName?.charAt(0) ?? ''}`.toUpperCase();
  }
}
