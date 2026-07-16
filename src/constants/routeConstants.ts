export const ROUTES = {
    HOME: '/',
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
        SIGNUP: '/signup',
    },
    DASHBOARD: {
        ROOT: '/dashboard',
        UPDATE_PROFILE: '/dashboard/profile',

        CART: '/dashboard/cart',
        PAST_ORDERS: '/dashboard/orders',
        ORDER_DETAILS: (orderId: string) =>
            `/dashboard/orders/${orderId}/order-details`,

        RESTAURANTS: {
            ROOT: '/dashboard/restaurants',
            MENU: (restaurantId: string) =>
                `/dashboard/restaurants/${restaurantId}/menu`,
            ANALYTICS: {
                ROOT: (restaurantId: string) =>
                    `/dashboard/restaurants/${restaurantId}/analytics`,
                MENU_STATS: (restaurantId: string) =>
                    `/dashboard/restaurants/${restaurantId}/analytics/menu-stats`,
                TOP_CUSTOMERS: (restaurantId: string) =>
                    `/dashboard/restaurants/${restaurantId}/analytics/top-customers`,
                ORDER_HISTORY: (restaurantId: string) =>
                    `/dashboard/restaurants/${restaurantId}/analytics/order-history`,
            },
        },
    },
} as const;
