import { useNavigate } from 'react-router-dom';

import { Form } from '@components';
import { ROUTES, SUCCESS_MESSAGES } from '@constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useLoginMutation } from '@services';
import { showSnackbar } from '@slices';
import { addAccessToken } from '@slices';
import { useAppDispatch } from '@store';
import { getErrorMessage } from '@utils';

import { loginFields } from './login.helper';
import { LoginCard } from './login.style';
import type { FormData } from './login.types';
import { AuthContainer } from '../auth.style';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [login] = useLoginMutation();

    const handleLogin = async (data: FormData) => {
        try {
            const response = await login({
                email: data.email.trim().toLowerCase(),
                password: data.password,
            }).unwrap();

            dispatch(addAccessToken(response.accessToken));
            localStorage.setItem('accessToken', response.accessToken);
            dispatch(
                showSnackbar({
                    message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
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
        <AuthContainer>
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
        </AuthContainer>
    );
};
