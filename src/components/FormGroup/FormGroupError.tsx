import React from 'react';

export function FormGroupError({
  children,
}: React.HTMLAttributes<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
>) {
  return <p className="h-3 text-xs leading-3 text-red-400">{children}</p>;
}
