/* eslint-disable @next/next/no-img-element */
import { LuLogOut } from 'react-icons/lu';

import { Button } from '../Button';

export function Profile() {
  return (
    <div className="flex grid-cols-profile  items-center gap-3">
      <img
        src="https://github.com/higormatheus.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Higor Matheus
        </span>
        <span className="truncate text-sm text-zinc-500">
          higor@rocketseat.com.br
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LuLogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
