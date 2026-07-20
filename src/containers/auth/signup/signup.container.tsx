import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'services/authApi';

import { Form } from '@components';
import { ROUTES, SUCCESS_MESSAGES } from '@constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { showSnackbar } from '@slices';
import { useAppDispatch } from '@store';
import { getErrorMessage } from '@utils';

import { signupFields } from './signup.helper';
import { SignupCard } from './signup.style';
import type { User } from './signup.types';
import { AuthContainer } from '../auth.style';

export const SignupContainer = () => {
    const navigate = useNavigate();
    const [signup] = useSignupMutation();
    const dispatch = useAppDispatch();

    const handleSignup = async (data: User) => {
        try {
            await signup(data).unwrap();

            dispatch(
                showSnackbar({
                    message: SUCCESS_MESSAGES.SIGNUP_SUCCESS,
                    severity: 'success',
                }),
            );

            void navigate(ROUTES.AUTH.LOGIN);
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
            <SignupCard elevation={3}>
                <Form<User>
                    title="Signup"
                    fields={signupFields}
                    buttonText="Signup"
                    bottomText="Already have an account?"
                    bottomLinkText="Login"
                    bottomLinkTo={ROUTES.AUTH.LOGIN}
                    onSubmit={(data) => void handleSignup(data)}
                />
            </SignupCard>
        </AuthContainer>
    );
};
