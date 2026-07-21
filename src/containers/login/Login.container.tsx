import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'utils/jwt/jwt';

import { Form } from '@components';
import { ROUTES, SUCCESS_MESSAGES } from '@constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useLoginMutation } from '@services';
import { addAuth, showSnackbar } from '@slices';
import { useAppDispatch } from '@store';
import { getErrorMessage } from '@utils';

import { LoginCard } from './Login.styles';
import { AuthContainer } from './Login.styles';
import type { FormData } from './Login.types';
import { loginFields } from './Login.validations';

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

            const payload = decodeToken(response.accessToken);
            dispatch(
                addAuth({
                    accessToken: response.accessToken,
                    id: payload.id,
                    role: payload.role,
                }),
            );
            localStorage.setItem('accessToken', response.accessToken);
            dispatch(
                showSnackbar({
                    message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
                    severity: 'success',
                }),
            );
            void navigate(ROUTES.HOME);
        } catch (error) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(error as FetchBaseQueryError | SerializedError),
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
