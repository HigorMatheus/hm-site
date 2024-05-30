import { FiSearch } from 'react-icons/fi';

import { Button } from './Button';

export function Search() {
  return (
    <div className="Search inline-flex w-full items-center justify-start gap-4 rounded-md">
      <div className="TextField flex h-14 shrink grow basis-0 items-start justify-start gap-3 rounded-md bg-neutral-900 p-4">
        <div className="BusqueUmaTransaO shrink grow basis-0 text-base font-normal leading-snug text-gray-500">
          Busque uma transação
        </div>
      </div>
      {/* <Button size="lg" variant="reverse" className="">
        <FiSearch className=" h-5 w-5 font-bold" />
        Buscar
      </Button> */}
    </div>
  );
}
