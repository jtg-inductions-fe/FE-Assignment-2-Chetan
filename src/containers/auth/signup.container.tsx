import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'services/auth-api';

import { Form } from '@components/forms/form.component';
import { showSnackbar } from '@components/snackbar/snackbar.slice';
import { ROUTES } from '@constants';
import { signupFields } from '@containers/auth/auth.helper';
import { SignCard, SignupContainer } from '@containers/auth/auth.style';
import type { User } from '@containers/auth/auth.types';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '@store/hooks';
import { getErrorMessage } from '@utils/error/get-error-messages';

export const SignupContainerComponent = () => {
    const navigate = useNavigate();
    const [signup] = useSignupMutation();
    const dispatch = useAppDispatch();

    const handleSignup = async (data: User) => {
        try {
            await signup(data).unwrap();

            dispatch(
                showSnackbar({
                    message: 'Signup successful',
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
        <SignupContainer>
            <SignCard elevation={3}>
                <Form<User>
                    title="Signup"
                    fields={signupFields}
                    buttonText="Signup"
                    bottomText="Already have an account?"
                    bottomLinkText="Login"
                    bottomLinkTo={ROUTES.AUTH.LOGIN}
                    onSubmit={(data) => void handleSignup(data)}
                />
            </SignCard>
        </SignupContainer>
    );
};
