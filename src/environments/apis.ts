import { environment } from './environment';

export const api = {
    auth: `${environment.apiUrl}/auth/login`,
    categories: `${environment.apiUrl}/categories`,
    products: `${environment.apiUrl}/products`,
    search: `${environment.apiUrl}/findByNameContainingIgnoreCase`,
    files: `${environment.apiUrl}/files`,
    images: `${environment.apiUrl}/images`
  };