import { ComponentProps } from 'react';

export type TextareaProps = ComponentProps<'textarea'>;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:right-4 focus:border-violet-300"
      {...props}
    />
  );
}
