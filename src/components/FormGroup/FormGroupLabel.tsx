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
        'h-4 text-sm font-medium leading-4 text-zinc-400',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}
