import { useNavigate } from 'react-router-dom';

import { useSignupMutation } from '@api/authApi';
import type { User } from '@app-types/authTypes';
import Form from '@components/forms/Form';
import { ROUTES } from '@constants';
import { SignCard, SignupContainer } from '@features/auth/authStyle';
import { signupFields } from '@features/auth/authValidation';
import { showSnackbar } from '@features/snackbar/snackbarSlice';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '@store/hooks';
import { getErrorMessage } from '@utils/error/getErrorMessage';

const Signup = () => {
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

export default Signup;
