import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '@api/authApi';
import type { FormData } from '@app-types/authTypes';
import Form from '@components/forms/Form';
import { ROUTES } from '@constants';
import { addAccessToken } from '@features/auth/authSlice';
import { AuthCard, AuthContainer } from '@features/auth/authStyle';
import { loginFields } from '@features/auth/authValidation';
import { showSnackbar } from '@features/snackbar/snackbarSlice';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '@store/hooks';
import { getErrorMessage } from '@utils/error/getErrorMessage';

const Login = () => {
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
        <AuthContainer>
            <AuthCard elevation={3}>
                <Form<FormData>
                    title="Login"
                    fields={loginFields}
                    buttonText="Login"
                    bottomText="Don't have an account?"
                    bottomLinkText="Sign Up"
                    bottomLinkTo={ROUTES.AUTH.SIGNUP}
                    onSubmit={(data) => void handleLogin(data)}
                />
            </AuthCard>
        </AuthContainer>
    );
};

export default Login;
