/** Full menu item details as returned by the menu API. */
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

/** API response shape for fetching a restaurant's menu items. */
export interface ItemsResponse {
    items: ItemDetails[];
}
