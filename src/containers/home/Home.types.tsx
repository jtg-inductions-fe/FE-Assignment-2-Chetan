/** Minimal restaurant info shown in cards or navigation state. */
export interface RestaurantBasicDetails {
    id: string;
    name: string;
    image?: string;
}

/** Full restaurant details including location and rating. */
export interface RestaurantDetails extends RestaurantBasicDetails {
    location: string;
    city: string;
    pincode: string;
    rating: number;
}

/** API response shape for fetching a list of restaurants. */
export interface RestaurantsResponse {
    restaurants?: RestaurantDetails[];
}
