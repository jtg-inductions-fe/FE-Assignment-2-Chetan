export interface ItemDetails {
    id: string;
    name: string;
    category: string;
    price: number;
    cuisine: string;
    rating: number;
    quantity: number;
    image?: string;
}

export interface ItemsResponse {
    items: ItemDetails[];
}
