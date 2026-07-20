import type { FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface SelectOption {
    value: string;
    label: string;
}

export interface FormField<T extends FieldValues> {
    name: Path<T>;
    label: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'radio' | 'select';
    validation?: RegisterOptions<T>;
    options?: SelectOption[];
}

export interface AuthFormProps<T extends FieldValues> {
    title: string;
    fields: FormField<T>[];
    buttonText: string;
    bottomText: string;
    bottomLinkText: string;
    bottomLinkTo: string;
    onSubmit: (data: T) => void;
}
