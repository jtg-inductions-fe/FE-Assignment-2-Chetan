import type { ItemDetails } from '@containers';

/** Whether the item dialog is creating a new item or editing an existing one. */
export type ItemDialogMode = 'add' | 'edit';

/** Form fields available when editing an existing item. */
export interface EditItemFormData {
    price: number;
    quantity: number;
}

/** Form fields required when adding a new item. */
export interface ItemFormData extends EditItemFormData {
    name: string;
    category: string;
    cuisine: string;
}

/** Props for the dialog used to add or edit a menu item. */
export interface ItemDialogProps {
    open: boolean;
    mode: ItemDialogMode;
    item?: ItemDetails | null;
    onClose: () => void;
    onSave: (data: ItemFormData) => void;
}
