export interface UserRole {
  id: number;
  role: string;
}

export interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  city: string;
  birthdate: string;
  email: string;
  phone: string;
  status: number;
  roleId: number | null;
  role?: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedUsersResponse {
  totalRecords: number;
  totalPages: number;
  users: User[];
}

export interface LoginResponse {
  accessToken: string;
  result: boolean;
  message?: string;
}

export interface ApiResponse {
  result: boolean;
  message: string;
}

export interface GetUsersRequest {
  currentPage: number;
  searchText: string;
  status: number | string;
}

export interface CreateUserRequest {
  username: string;
  firstName: string;
  lastName: string;
  city: string;
  birthdate: string;
  email?: string;
  phone: string;
  password: string;
  userType?: string;
}

export interface UpdateUserRequest {
  _id: number;
  firstName: string;
  lastName: string;
  city?: string;
  birthDate?: string;
  email?: string;
  phone?: string;
  roles?: string;
  active?: boolean;
}
