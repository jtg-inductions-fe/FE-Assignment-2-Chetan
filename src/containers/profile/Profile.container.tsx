import { useNavigate } from 'react-router-dom';

import { AccountBalanceWallet, History } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';

import { ClampedTypography, Loading } from '@components';
import { FONT_WEIGHT, ROLE, ROUTES } from '@constants';
import { useApiErrorHandler } from '@hooks';
import { useGetUserQuery } from '@services';
import { useAppSelector } from '@store';
import { theme } from '@theme';

import {
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
                            <ClampedTypography variant="h3">{user.name}</ClampedTypography>
                            <Typography variant="body1" color="text.secondary" marginTop={0.5}>
                                {user.email}
                            </Typography>
                            <RoleChip
                                label={role === ROLE.ADMIN ? 'Admin' : 'User'}
                                color={'primary'}
                            />
                        </Box>
                    </ProfileHeader>

                    <Divider />

                    <DetailsGrid>
                        <Box>
                            <DetailLabel>
                                <Typography>City</Typography>
                            </DetailLabel>
                            <ClampedTypography variant="body1">{user.city}</ClampedTypography>
                        </Box>

                        <Box>
                            <DetailLabel>
                                <Typography>State</Typography>
                            </DetailLabel>
                            <ClampedTypography variant="body1">{user.state}</ClampedTypography>
                        </Box>

                        <Box>
                            <DetailLabel>
                                <Typography>Zip Code</Typography>
                            </DetailLabel>
                            <Typography variant="body1">{user.zipcode}</Typography>
                        </Box>

                        <Box>
                            <DetailLabel>
                                <Typography>Preference</Typography>
                            </DetailLabel>
                            <Typography variant="body1">{user.preference}</Typography>
                        </Box>
                    </DetailsGrid>
                </ProfileCard>

                <BalanceCard>
                    <Box>
                        <AccountBalanceWallet fontSize="large" />

                        <Box marginTop={24}>
                            <BalanceLabel>
                                <Typography>Available Balance</Typography>
                            </BalanceLabel>
                            <Typography
                                fontWeight={FONT_WEIGHT.BOLD}
                                fontSize={theme.typography.pxToRem(32)}
                            >
                                ₹{user.balance}
                            </Typography>
                        </Box>
                    </Box>

                    {role === ROLE.USER && (
                        <PastOrdersButton
                            variant="outlined"
                            startIcon={<History />}
                            onClick={handlePastOrders}
                        >
                            View Past Orders
                        </PastOrdersButton>
                    )}
                </BalanceCard>
            </ProfileGrid>
        </PageWrapper>
    );
};
