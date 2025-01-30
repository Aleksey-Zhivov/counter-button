import { FC, useState } from 'react';
import { IButtonProps } from './types';
import { ButtonContext } from './useButtonContext';
import ButtonLabel from './button-label';
import ButtonCounter from './button-counter';
import ButtonLoader from './button-loader';
import '../../styles/button.styl';

const Button: FC<IButtonProps> & {
  Label: typeof ButtonLabel;
  Counter: typeof ButtonCounter;
  Loader: typeof ButtonLoader;
} = ({ children, variant = 'primary', size = 28 }) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const increment = () => {
    if (isLoading) return;
    
    setIsloading(true);
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setIsloading(false);
    }, 1000);
  };

  return (
    <ButtonContext.Provider
      value={{
        count,
        increment,
        isLoading,
        variant,
        size,
      }}
    >
      <button
        className={`button ${variant} size-${size} ${isLoading ? 'loading' : ''} ${isLoading ? 'disabled' : ''}`}
        onClick={increment}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
};

Button.Label = ButtonLabel;
Button.Counter = ButtonCounter;
Button.Loader = ButtonLoader;

export default Button;
