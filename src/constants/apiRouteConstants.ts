export const API_ROUTES = {
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
    },
    USERS: {
        CREATE: '/users/',
        GET: (userId: string) => `/users/${userId}`,
        UPDATE: (userId: string) => `/users/${userId}`,
    },
    RESTAURANTS: {
        GET_MENU: (restaurantId: string) =>
            `/restaurants/${restaurantId}/items`,
        PLACE_ORDER: (restaurantId: string) =>
            `/restaurants/${restaurantId}/orders`,

        MENU_ITEMS: {
            CREATE: (restaurantId: string) =>
                `/restaurants/${restaurantId}/items`,
            UPDATE: (restaurantId: string, itemId: string) =>
                `/restaurants/${restaurantId}/items/${itemId}`,
            DELETE: (restaurantId: string, itemId: string) =>
                `/restaurants/${restaurantId}/items/${itemId}`,
        },
        OWNER: {
            GET_ITEM_STATS: (restaurantId: string) =>
                `/restaurants/${restaurantId}/stats`,
            GET_TOP_CUSTOMERS: (restaurantId: string) =>
                `/restaurants/${restaurantId}/top-customers`,
            GET_RESTAURANT_ORDERS: (restaurantId: string) =>
                `/restaurants/${restaurantId}/orders`,
        },
    },
    ORDERS: {
        GET_DETAILS: (orderId: string) => `/orders/${orderId}`,
    },
} as const;
