import { OrderDetails } from '@types';

/** Props for the dialog showing a single order's full details. */
export interface OrderDetailsDialogProps {
    open: boolean;
    order: OrderDetails;
    isLoading: boolean;
    onClose: () => void;
}
