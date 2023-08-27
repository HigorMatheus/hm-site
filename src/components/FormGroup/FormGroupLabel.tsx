import React from 'react';
import { twMerge } from 'tailwind-merge';

type FormGroupLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {};

export function FormGroupLabel({
  children,
  className,
  ...props
}: FormGroupLabelProps) {
  return (
    <label
      className={twMerge(
        'text-sm leading-4 h-4 font-medium text-zinc-400',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}
