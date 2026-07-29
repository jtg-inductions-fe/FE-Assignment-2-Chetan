import type { DefaultValues, FieldValues, Path, RegisterOptions } from 'react-hook-form';

/** A single option for a radio or select field. */
export interface SelectOption {
    value: string;
    label: string;
}

/** Config for a single field rendered by the reusable Form component. */
export interface FormField<T extends FieldValues> {
    name: Path<T>;
    label: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'radio' | 'select';
    validation?: RegisterOptions<T>;
    options?: SelectOption[];
}

/** Base props shared by auth-style forms (login/signup layout). */
export interface AuthFormProps<T extends FieldValues> {
    title?: string;
    fields: FormField<T>[];
    buttonText?: string;
    bottomText?: string;
    bottomLinkText?: string;
    bottomLinkTo?: string;
    onSubmit: (data: T) => void;
}

/** Props for the reusable Form component, including edit-mode defaults. */
export interface FormProps<T extends FieldValues> extends AuthFormProps<T> {
    defaultValues?: DefaultValues<T>;
    formId?: string;
}
