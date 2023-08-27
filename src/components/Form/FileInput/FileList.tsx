'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import { FileItem } from './FileItem';
import { useFileInput } from './Root';

export interface FileListProps {}

export function FileList(props: FileListProps) {
  const [parent] = useAutoAnimate({});

  const { files } = useFileInput();
  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="error"
          />
        );
      })}
    </div>
  );
}
