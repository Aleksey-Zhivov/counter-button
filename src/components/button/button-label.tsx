import { FC } from 'react';

const ButtonLabel: FC<{ text: string }> = ({ text }) => {
  return <span className="button-label">{text}</span>;
};

export default ButtonLabel;
