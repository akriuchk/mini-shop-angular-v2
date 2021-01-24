import { environment } from './environment';

export const api = {
    auth: `${environment.apiUrl}/auth/login`,
    categories: `${environment.apiUrl}/categories`,
    search: `${environment.apiUrl}/findByNameContainingIgnoreCase`,
    files: `${environment.apiUrl}/parse`,
    images: `${environment.apiUrl}/images`
  };