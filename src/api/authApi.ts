import axiosInstance from "./axiosInstance";
import type {
  RegisterDto,
  LoginDto,
  AuthResponse,
} from "../types/auth";

export const registerUser = async (
  userData: RegisterDto
): Promise<AuthResponse> => {
  const res = await axiosInstance.post<AuthResponse>(
    "/auth/register",
    userData
  );

  return res.data;
};

export const loginUser = async (
  userData: LoginDto
): Promise<AuthResponse> => {
  const res = await axiosInstance.post<AuthResponse>(
    "/auth/login",
    userData
  );

  return res.data;
};