import { jwtDecode } from 'jwt-decode';

import { JwtPayload } from '@types';

/** Decode JWT token */
export const decodeToken = (token: string): JwtPayload => jwtDecode<JwtPayload>(token);
