import { FC } from 'react';
import '../../styles/counter.styl';
import { formatCounterValue } from '../../utils/valueFormatter';
import { ICounterProps, TCounterSize } from './types';
import { useButtonContext } from '../button/useButtonContext';
import { TButtonSize } from '@components/button/types';

const Counter: FC<ICounterProps> = ({ value }) => {
  const { variant, size } = useButtonContext();

  const getCounterSize = (buttonSize: TButtonSize): TCounterSize => {
    const sizeMap: Record<TButtonSize, TCounterSize> = {
      28: 16,
      36: 20,
      56: 24,
    };

    return sizeMap[buttonSize] || 20;
  };

  const counterSize = getCounterSize(size);

  return (
    <span className={`counter ${variant} size-${counterSize}`}>
      {counterSize === 8 || counterSize === 12 ? '' : formatCounterValue(value)}
    </span>
  );
};

export default Counter;
