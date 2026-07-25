export const ROUTES = {
    HOME: '/',
    RESTAURANTS: {
        MENU: (restaurantId: string) => `/restaurants/${restaurantId}/menu`,
    },
    CART: '/cart',
    AUTH: {
        LOGIN: '/login',
        LOGOUT: '/logout',
        SIGNUP: '/signup',
    },
    DASHBOARD: {
        ROOT: '/dashboard',
        UPDATE_PROFILE: '/dashboard/profile',

        PAST_ORDERS: '/dashboard/orders',
        ORDER_DETAILS: (orderId: string) => `/dashboard/orders/${orderId}/order-details`,

        RESTAURANTS: {
            ROOT: '/dashboard/restaurants',

            ANALYTICS: {
                ROOT: (restaurantId: string) => `/dashboard/restaurants/${restaurantId}/analytics`,
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
