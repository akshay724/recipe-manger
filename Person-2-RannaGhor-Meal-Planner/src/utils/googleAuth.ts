import { UserProfile } from '../types';

export interface DecodedGoogleToken {
  sub: string;
  name: string;
  given_name?: string;
  family_name?: string;
  email: string;
  picture: string;
  email_verified?: boolean;
}

/**
 * Safely decodes a Google JWT credential token on the client side
 */
export const decodeGoogleJwt = (token: string): DecodedGoogleToken | null => {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error('Error decoding Google JWT credential:', err);
    return null;
  }
};

/**
 * Convert a decoded Google token into a RannaGhor UserProfile
 */
export const googleTokenToUserProfile = (payload: DecodedGoogleToken): UserProfile => {
  return {
    id: payload.sub,
    name: payload.name,
    givenName: payload.given_name || payload.name.split(' ')[0],
    familyName: payload.family_name || payload.name.split(' ').slice(1).join(' '),
    email: payload.email,
    avatarUrl: payload.picture,
    emailVerified: payload.email_verified ?? true,
    authProvider: 'google',
    joinedAt: new Date().toISOString()
  };
};


export const getStoredGoogleClientId = (): string => {
  try {
    return localStorage.getItem('rannaghor_google_client_id') || 
           (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || 
           '';
  } catch {
    return '';
  }
};

export const setStoredGoogleClientId = (clientId: string): void => {
  try {
    if (clientId.trim()) {
      localStorage.setItem('rannaghor_google_client_id', clientId.trim());
    } else {
      localStorage.removeItem('rannaghor_google_client_id');
    }
  } catch (e) {
    console.error('Failed to save Google Client ID:', e);
  }
};
