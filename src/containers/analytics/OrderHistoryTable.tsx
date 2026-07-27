import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { StyledChip, StyledChipBox, TablePanel } from './Analytics.styles';
import type { OrderHistoryTableProps } from './Analytics.types';

export const OrderHistoryTable = ({ orders }: OrderHistoryTableProps) => (
    <TablePanel>
        <Typography variant="h4">Order History</Typography>

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id.slice(0, 8)}</TableCell>

                            <TableCell>{order.user.name}</TableCell>

                            <TableCell style={{}}>
                                <StyledChipBox>
                                    {order.orderItems.map((oi) => (
                                        <StyledChip
                                            key={oi.id}
                                            label={`${oi.item.name} x${oi.quantity}`}
                                        />
                                    ))}
                                </StyledChipBox>
                            </TableCell>

                            <TableCell align="right">₹{order.totalPrice}</TableCell>

                            <TableCell>
                                {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </TablePanel>
);
