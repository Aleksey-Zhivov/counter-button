import { TButtonContext } from '@components/button/types';
import { createContext, useContext } from 'react';

export const ButtonContext = createContext<TButtonContext | undefined>(
  undefined,
);

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error(
      'Отсутствует контекст, counter должен использоваться внутри button',
    );
  } else {
    return context;
  }
};
