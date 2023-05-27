import classNames from 'classnames';
import React from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'reverse';
};

export const Button: React.FC<IButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const variants = {
    primary: classNames('bg-green-500 bg text-white hover:bg-green-700'),
    reverse: classNames(
      'text-green-500 border-green-500',
      'hover:bg-green-500 hover:text-white',
    ),
  };
  return (
    <button
      className={classNames(
        'p-4 text-sm rounded-lg transition-colors border duration-1000',
        variants[variant],
        `${className}`,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
