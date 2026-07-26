import type { ItemDetails } from '@containers';

export type ItemDialogMode = 'add' | 'edit';

export interface EditItemFormData {
    price: number;
    quantity: number;
}

export interface ItemFormData extends EditItemFormData {
    name: string;
    category: string;
    cuisine: string;
}

export interface ItemDialogProps {
    open: boolean;
    mode: ItemDialogMode;
    item?: ItemDetails | null;
    onClose: () => void;
    onSave: (data: ItemFormData) => void;
}
