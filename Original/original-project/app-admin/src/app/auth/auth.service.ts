/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /auth.service.ts                                                      *
 * Purpose: Centralizes administration login and authentication-token storage  *
 *          behavior.                                                          *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

// One storage key keeps authentication state consistent across admin services.
// Local storage survives reloads but exposes bearer tokens to injected scripts.
// Reassess the token/CSRF design before production use.
const AUTH_TOKEN_KEY = 'travlr-token';

interface AuthenticationResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  /** Stores the API-issued token after a successful login so protected trip writes can reuse it. */
  login(email: string, password: string): Observable<AuthenticationResponse> {
    return this.http
      .post<AuthenticationResponse>(`${environment.apiBaseUrl}/login`, { email, password })
      .pipe(
        tap(({ token }) => {
          localStorage.setItem(AUTH_TOKEN_KEY, token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  /** Returns a token only while its declared expiration is still in the future. */
  getToken(): string | null {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      if (!payload) throw new Error('Missing token payload');
      const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
      const claims = JSON.parse(atob(normalized)) as { exp?: unknown };
      if (typeof claims.exp !== 'number' || claims.exp * 1000 <= Date.now()) {
        throw new Error('Expired token');
      }
      return token;
    } catch {
      this.logout();
      return null;
    }
  }

  /** Client-side expiration is only a UI convenience; the API verifies signatures. */
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
