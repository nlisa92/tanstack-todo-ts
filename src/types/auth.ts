export interface RegisterDto {
  login: string;
  email: string;
  password: string;
  age: number;
  gender: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}
