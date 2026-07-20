import { useNavigate } from 'react-router-dom';

import { Form } from '@components/forms';
import { showSnackbar } from '@components/snackbar';
import { ROUTES } from '@constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useLoginMutation } from '@services/auth-api';
import { useAppDispatch } from '@store/hooks';
import { getErrorMessage } from '@utils/error/get-error-messages';

import { loginFields } from './auth.helper';
import { addAccessToken } from './auth.slice';
import { LoginCard, LoginContainer } from './auth.style';
import type { FormData } from './auth.types';

export const LoginContainerComponent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [login] = useLoginMutation();

    const handleLogin = async (data: FormData) => {
        try {
            const response = await login({
                email: data.email.trim().toLowerCase(),
                password: data.password,
            }).unwrap();

            dispatch(addAccessToken(response.access_token));
            localStorage.setItem('token', response.access_token);
            dispatch(
                showSnackbar({
                    message: 'Login successful',
                    severity: 'success',
                }),
            );

            void navigate(ROUTES.DASHBOARD.ROOT);
        } catch (e) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(e as FetchBaseQueryError | SerializedError),
                    severity: 'error',
                }),
            );
        }
    };

    return (
        <LoginContainer>
            <LoginCard elevation={3}>
                <Form<FormData>
                    title="Login"
                    fields={loginFields}
                    buttonText="Login"
                    bottomText="Don't have an account?"
                    bottomLinkText="Sign Up"
                    bottomLinkTo={ROUTES.AUTH.SIGNUP}
                    onSubmit={(data) => void handleLogin(data)}
                />
            </LoginCard>
        </LoginContainer>
    );
};
