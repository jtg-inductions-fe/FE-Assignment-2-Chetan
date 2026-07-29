/** Props for the +/- quantity stepper used for cart items. */
export interface QuantitySelectorProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    disableIncrement?: boolean;
}
