import { OrderDetails } from '@types';

export interface OrderDetailsDialogProps {
    open: boolean;
    order: OrderDetails;
    isLoading: boolean;
    onClose: () => void;
}
