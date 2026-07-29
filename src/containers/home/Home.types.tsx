export interface RestaurantBasicDetails {
    id: string;
    name: string;
    image?: string;
}

export interface RestaurantDetails extends RestaurantBasicDetails {
    location: string;
    city: string;
    pincode: string;
    rating: number;
}

export interface RestaurantsResponse {
    restaurants: RestaurantDetails[];
}
