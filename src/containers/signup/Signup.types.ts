import { ROLE } from '@constants';
import { RestaurantsResponse } from '@containers';

/** Common user fields shared across signup, profile, and API responses. */
export interface BaseUser {
    name: string;
    email: string;
    city: string;
    state: string;
    zipcode: string;
    balance: string;
    preference: string;
}

/** Signup form shape, including password and assigned role. */
export interface User extends BaseUser {
    password: string;
    readonly role: typeof ROLE.ADMIN | typeof ROLE.USER;
}

/** API response for a user, including their restaurants if they're an admin. */
export interface UserResponse extends BaseUser, RestaurantsResponse {
    id: string;
}
