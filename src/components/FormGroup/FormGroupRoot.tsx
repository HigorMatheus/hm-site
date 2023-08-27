import React from 'react';
import { twMerge } from 'tailwind-merge';
type FormGroupRootProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
};
export function FormGroupRoot({
  children,
  className,
  ...props
}: FormGroupRootProps): React.JSX.Element {
  return (
    <div className={twMerge('flex flex-col gap-1', className)} {...props}>
      {children}
    </div>
  );
}
