'use client';

import { Button } from './button';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface InteractiveButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  onClick?: () => void;
  actionType?: 'console' | 'none';
  actionMessage?: string;
}

export const InteractiveButton = ({
  children,
  onClick,
  actionType = 'none',
  actionMessage = '',
  ...props
}: InteractiveButtonProps) => {
  const handleClick = () => {
    if (actionType === 'console' && actionMessage) {
      console.log(actionMessage);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default InteractiveButton;
