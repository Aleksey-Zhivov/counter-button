import { FC } from "react";
import '../../styles/counter.styl';
import { formatCounterValue } from "../../utils/valueFormatter";

interface CounterProps {
  value: string | number;
  variant?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
}

const Counter: FC<CounterProps> = ({ value, variant, size }) => (
    <span className={`counter ${variant} size-${size}`}>
        {(size === 8 || size === 12) ? '' : formatCounterValue(value)}
    </span>
);

export default Counter;
