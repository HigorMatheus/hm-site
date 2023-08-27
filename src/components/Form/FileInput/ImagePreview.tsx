'use client';
import { useMemo } from 'react';
import { LuUser } from 'react-icons/lu';

import { useFileInput } from './Root';

export interface ImagePreviewProps {}

export function ImagePreview(props: ImagePreviewProps) {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files?.length === 0) {
      return null;
    }
    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <LuUser className="h-8 w-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt=""
        className="flex h-16 w-16 rounded-full object-cover"
      />
    );
  }
}
