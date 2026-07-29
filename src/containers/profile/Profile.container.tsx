import { useNavigate } from 'react-router-dom';

import { AccountBalanceWallet, History } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { Loading } from '@components';
import { ROLE, ROUTES } from '@constants';
import { useApiErrorHandler } from '@hooks';
import { useGetUserQuery } from '@services';
import { useAppSelector } from '@store';

import {
    BalanceAmount,
    BalanceCard,
    BalanceLabel,
    DetailLabel,
    DetailsGrid,
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
    const { role, id, accessToken } = useAppSelector((state) => state.auth);
    const {
        data: user,
        isLoading,
        error,
    } = useGetUserQuery(id as string, { skip: !accessToken || !id });

    useApiErrorHandler(error);

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
                            <Typography variant="body1">{user.city}</Typography>
                        </Box>

                        <Box>
                            <DetailLabel>State</DetailLabel>
                            <Typography variant="body1">{user.state}</Typography>
                        </Box>

                        <Box>
                            <DetailLabel>Zip Code</DetailLabel>
                            <Typography variant="body1">{user.zipcode}</Typography>
                        </Box>

                        <Box>
                            <DetailLabel>Preference</DetailLabel>
                            <Typography variant="body1">{user.preference}</Typography>
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
