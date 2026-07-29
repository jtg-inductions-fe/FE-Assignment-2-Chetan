export const ROUTES = {
    HOME: '/',

    CART: '/cart',
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
        SIGNUP: '/signup',
    },
    PROFILE: '/profile',
    PAST_ORDERS: '/orders',
    ORDER_DETAILS: (orderId: string) => `/orders/${orderId}/order-details`,

    RESTAURANTS: {
        ROOT: '/restaurants',
        MENU_URL: 'restaurants/:restaurantId/menu',
        MENU: (restaurantId: string) => `/restaurants/${restaurantId}/menu`,
        ANALYTICS: {
            ROOT: (restaurantId: string) => `/restaurants/${restaurantId}/analytics`,
            MENU_STATS: (restaurantId: string) =>
                `/restaurants/${restaurantId}/analytics/menu-stats`,
            TOP_CUSTOMERS: (restaurantId: string) =>
                `/restaurants/${restaurantId}/analytics/top-customers`,
            ORDER_HISTORY: (restaurantId: string) =>
                `/restaurants/${restaurantId}/analytics/order-history`,
        },
    },
} as const;
