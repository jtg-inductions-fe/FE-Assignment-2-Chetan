import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Form, StyledDialog } from '@components';

import type { ItemDialogProps, ItemFormData } from './ItemDialog.types';
import { addItemFields, editItemFields } from './ItemDialog.validations';

const FORM_ID = 'item-form';

export const ItemDialog = ({ open, mode, item, onClose, onSave }: ItemDialogProps) => {
    const isEdit = mode === 'edit';

    const fields = isEdit ? editItemFields : addItemFields;

    const defaultValues: Partial<ItemFormData> = isEdit
        ? {
              price: item?.price,
              quantity: item?.quantity,
          }
        : {
              name: '',
              category: '',
              cuisine: '',
              price: 0,
              quantity: 1,
          };

    return (
        <StyledDialog open={open} onClose={onClose}>
            <DialogTitle>{isEdit ? 'Edit Item' : 'Add New Item'}</DialogTitle>

            <DialogContent>
                <Form<ItemFormData>
                    formId={FORM_ID}
                    fields={fields}
                    defaultValues={defaultValues}
                    onSubmit={onSave}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="inherit">
                    Cancel
                </Button>

                <Button type="submit" form={FORM_ID} variant="contained">
                    {isEdit ? 'Save' : 'Add'}
                </Button>
            </DialogActions>
        </StyledDialog>
    );
};
