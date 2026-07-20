import type { FormField } from '@components';

import type { FormData } from './login.types';
import { getEmailFieldValidator, getPasswordFieldValidator } from '../auth.helper';

export const loginFields: FormField<FormData>[] = [
    getEmailFieldValidator<FormData>(),
    getPasswordFieldValidator<FormData>(),
];
