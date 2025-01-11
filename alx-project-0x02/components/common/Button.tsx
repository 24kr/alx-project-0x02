import React from 'react';
import { ButtonProps } from '../../interfaces';

const sizeClasses = {
  small: 'py-1 px-2 text-sm',
  medium: 'py-2 px-4 text-md',
  large: 'py-3 px-6 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${sizeClasses[size]} ${shapeClasses[shape]} focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  );
};

export default Button;
