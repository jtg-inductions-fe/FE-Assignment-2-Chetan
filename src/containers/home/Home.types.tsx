export interface RestaurantBasicDetails {
    name: string;
    image?: string;
}

export interface RestaurantDetails extends RestaurantBasicDetails {
    id: string;
    location: string;
    city: string;
    pincode: string;
    rating: number;
}

export interface RestaurantsResponse {
    restaurants: RestaurantDetails[];
}
