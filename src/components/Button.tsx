import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, ...props }) => {
  return (
    <button
      type="button"
      className={`rounded-full ${
        variant === 'primary'
          ? 'bg-blue-700 text-white'
          : 'bg-gray-100 text-black border border-gray-300'
      } py-2 px-4 hover:shadow-md transition duration-100`}
      {...props}
    >
      {label}
    </button>
  );
};
