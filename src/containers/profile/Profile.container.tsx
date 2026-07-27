import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { AccountBalanceWallet, History } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { Loading } from '@components';
import { HTTP_STATUS_CODES, ROLE, ROUTES } from '@constants';
import { useGetUserQuery } from '@services';
import { showSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { getErrorMessage } from '@utils';

import {
    BalanceAmount,
    BalanceCard,
    BalanceLabel,
    DetailLabel,
    DetailsGrid,
    DetailValue,
    PageWrapper,
    PastOrdersButton,
    ProfileAvatar,
    ProfileCard,
    ProfileGrid,
    ProfileHeader,
    RoleChip,
    StyledDivider,
} from './Profile.styles';

export const ProfileContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { role, id, accessToken } = useAppSelector((state) => state.auth);
    const {
        data: user,
        isLoading,
        error,
    } = useGetUserQuery(id as string, { skip: !accessToken || !id });

    useEffect(() => {
        if (error) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(error),
                    severity: 'error',
                }),
            );

            const isAuthError =
                'status' in error && error.status === HTTP_STATUS_CODES.UNAUTHORIZED;

            if (isAuthError) {
                localStorage.removeItem('accessToken');
                void navigate(ROUTES.AUTH.LOGIN, { replace: true });
            }
        }
    }, [error, dispatch, navigate]);

    if (isLoading || !user) return <Loading />;

    const handlePastOrders = () => {
        void navigate(ROUTES.PAST_ORDERS);
    };

    return (
        <PageWrapper>
            <ProfileGrid>
                <ProfileCard>
                    <ProfileHeader>
                        <ProfileAvatar>{user.name.charAt(0).toUpperCase()}</ProfileAvatar>

                        <Box>
                            <Typography variant="h3">{user.name}</Typography>
                            <Typography variant="body1" color="text.secondary" marginTop={0.5}>
                                {user.email}
                            </Typography>
                            <RoleChip
                                label={role === ROLE.ADMIN ? 'Admin' : 'User'}
                                color={'primary'}
                            />
                        </Box>
                    </ProfileHeader>

                    <StyledDivider />

                    <DetailsGrid>
                        <Box>
                            <DetailLabel>City</DetailLabel>
                            <DetailValue>{user.city}</DetailValue>
                        </Box>

                        <Box>
                            <DetailLabel>State</DetailLabel>
                            <DetailValue>{user.state}</DetailValue>
                        </Box>

                        <Box>
                            <DetailLabel>Zip Code</DetailLabel>
                            <DetailValue>{user.zipcode}</DetailValue>
                        </Box>

                        <Box>
                            <DetailLabel>Preference</DetailLabel>
                            <DetailValue>{user.preference}</DetailValue>
                        </Box>
                    </DetailsGrid>
                </ProfileCard>

                <BalanceCard>
                    <Box>
                        <AccountBalanceWallet fontSize="large" />

                        <Box marginTop={24}>
                            <BalanceLabel>Available Balance</BalanceLabel>
                            <BalanceAmount>₹{user.balance}</BalanceAmount>
                        </Box>
                    </Box>

                    <PastOrdersButton
                        variant="outlined"
                        startIcon={<History />}
                        onClick={handlePastOrders}
                    >
                        View Past Orders
                    </PastOrdersButton>
                </BalanceCard>
            </ProfileGrid>
        </PageWrapper>
    );
};
