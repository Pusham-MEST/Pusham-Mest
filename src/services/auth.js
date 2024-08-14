import { apiClient } from "./Config";

// Sign up API call
export const apiSignUp = async (payload) => {
    return apiClient.post("/auth/signup", payload);
};

// Login API call
export const apiLogin = async (payload) => {
    return apiClient.post("/auth/token/login", payload);
};

// Check if username exists
export const apiCheckUsernameExists = async (userName) => {
    return apiClient.get(`/auth/username-check/${userName}`);
};

// Get user profile
export const apiGetUserProfile = async (userId) => {
    return apiClient.get(`/users/userProfile/${userId}`);
};
