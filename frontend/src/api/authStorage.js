const ACCESS_TOKEN_KEY = "auth_token";
const REFRESH_TOKEN_KEY = "refresh_token";

export function getAuthToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAuthToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

export function setAuthTokens({ token, refreshToken } = {}) {
  if (token) {
    setAuthToken(token);
  }
  if (refreshToken) {
    setRefreshToken(refreshToken);
  }
}

export function clearAuthToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export const clearAuthTokens = clearAuthToken;
