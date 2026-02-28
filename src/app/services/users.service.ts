import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  User,
  PaginatedUsersResponse,
  ApiResponse,
  GetUsersRequest,
  CreateUserRequest,
  UpdateUserRequest
} from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // POST /users/get-all-users - Get paginated list of users with search and filter
  getAllUsers(params: GetUsersRequest): Observable<PaginatedUsersResponse> {
    return this.http.post<PaginatedUsersResponse>(
      `${this.baseUrl}/get-all-users`,
      params,
      { headers: this.getAuthHeaders() }
    );
  }

  // GET /users/logged-in-user - Get currently logged-in user details
  getLoggedInUser(): Observable<{ user: User; result: boolean }> {
    return this.http.get<{ user: User; result: boolean }>(
      `${this.baseUrl}/logged-in-user`,
      { headers: this.getAuthHeaders() }
    );
  }

  // POST /users - Create a new user
  createUser(userData: CreateUserRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.baseUrl}`,
      userData,
      { headers: this.getAuthHeaders() }
    );
  }

  // PATCH /users - Update user details
  updateUser(userData: UpdateUserRequest): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(
      `${this.baseUrl}`,
      userData,
      { headers: this.getAuthHeaders() }
    );
  }

  // DELETE /users/:userid - Soft delete a user
  deleteUser(userId: number): Observable<{ reply: string; result: boolean }> {
    return this.http.delete<{ reply: string; result: boolean }>(
      `${this.baseUrl}/${userId}`,
      { headers: this.getAuthHeaders() }
    );
  }

  // PATCH /users/updateMember/:id - Approve/activate a pending user
  approveMember(userId: number): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(
      `${this.baseUrl}/updateMember/${userId}`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }
}
