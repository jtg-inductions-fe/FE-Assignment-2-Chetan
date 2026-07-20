import type { FieldValues, Path } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Link,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import type { AuthFormProps } from '@components/forms/form.types';

export const Form = <T extends FieldValues>({
    title,
    fields,
    buttonText,
    bottomText,
    bottomLinkText,
    bottomLinkTo,
    onSubmit,
}: AuthFormProps<T>) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<T>();

    const handleFormSubmit = handleSubmit((data) => {
        void onSubmit(data);
    });

    return (
        <Box component="form" onSubmit={(e) => void handleFormSubmit(e)}>
            <Stack spacing={5}>
                <Typography variant="h2">{title}</Typography>

                {fields.map((field) => {
                    const nameKey = field.name as Path<T>;
                    const errorObj = errors[nameKey];
                    const errorMsg = typeof errorObj?.message === 'string' ? errorObj.message : '';

                    return field.type === 'radio' ? (
                        <FormControl key={field.name} error={!!errorObj}>
                            <FormLabel>{field.label}</FormLabel>

                            <Controller
                                name={nameKey}
                                control={control}
                                rules={field.validation}
                                render={({ field: { onChange, value } }) => (
                                    <RadioGroup
                                        row
                                        value={(value as string) || ''}
                                        onChange={onChange}
                                    >
                                        {field.options?.map(
                                            (opt: { value: string; label: string }) => (
                                                <FormControlLabel
                                                    key={opt.value}
                                                    value={opt.value}
                                                    control={<Radio />}
                                                    label={opt.label}
                                                />
                                            ),
                                        )}
                                    </RadioGroup>
                                )}
                            />

                            {errorMsg && <FormHelperText>{errorMsg}</FormHelperText>}
                        </FormControl>
                    ) : (
                        <TextField
                            key={field.name}
                            label={field.label}
                            type={field.type}
                            error={!!errorObj}
                            helperText={errorMsg || undefined}
                            {...register(nameKey, field.validation)}
                        />
                    );
                })}

                <Button type="submit" variant="contained">
                    {buttonText}
                </Button>

                <Typography textAlign="center">
                    {bottomText}{' '}
                    <Link component={RouterLink} to={bottomLinkTo}>
                        {bottomLinkText}
                    </Link>
                </Typography>
            </Stack>
        </Box>
    );
};
