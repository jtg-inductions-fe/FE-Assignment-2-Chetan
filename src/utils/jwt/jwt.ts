import { jwtDecode } from 'jwt-decode';

import { JwtPayload } from '@types';

export const decodeToken = (token: string): JwtPayload => jwtDecode<JwtPayload>(token);
