export interface RestaurantDetails {
    id: string;
    name: string;
    location: string;
    city: string;
    pincode: string;
    rating: number;
    image?: string;
}

export interface RestaurantsResponse {
    restaurants: RestaurantDetails[];
}
