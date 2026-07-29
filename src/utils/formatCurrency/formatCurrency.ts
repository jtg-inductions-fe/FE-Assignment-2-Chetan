export const formatCurrency = (amount: number): string => {
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)} L`;
    }

    if (amount >= 1000) {
        return `₹${(amount / 1000).toFixed(1)} K`;
    }

    return `₹${amount}`;
};
