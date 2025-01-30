import { FC } from 'react';
import { useButtonContext } from './useButtonContext';
import Counter from '../counter/counter';

const ButtonCounter: FC = () => {
  const { count } = useButtonContext();
  return <Counter value={count} />;
};

export default ButtonCounter;
