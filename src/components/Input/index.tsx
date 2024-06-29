import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputPrefixProps extends ComponentProps<'div'> {}

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export interface InputControlProps extends ComponentProps<'input'> {}

export const Control = React.forwardRef(
  ({ className, ref, ...props }: InputControlProps) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-0 focus:outline-0',
          className,
        )}
        {...props}
        // value={'test'}
      />
    );
  },
);

Control.displayName = 'inputControl';

export interface InputRootProps extends ComponentProps<'div'> {}

export function Root(props: InputRootProps) {
  return (
    <>
      <div
        className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:right-4 focus-within:border-violet-300 focus-within:ring-violet-100"
        {...props}
      />
    </>
  );
}

export const Input = { Root, Control, Prefix };
