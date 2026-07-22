export interface RestaurantDetails {
    id: string;
    name: string;
    location: string;
    city: string;
    pincode: string;
    rating: number;
    image?: string;
}

export interface Pagination {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
}

export interface PaginatedRestaurantsResponse {
    restaurants: RestaurantDetails[];
    pagination: Pagination;
}
