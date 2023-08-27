import { FiSearch } from 'react-icons/fi'
import { Button } from './Button'

export function Search() {
  return (
    <div className="Search w-full rounded-md justify-start items-center gap-4 inline-flex">
      <div className="TextField grow shrink basis-0 h-14 p-4 bg-neutral-900 rounded-md justify-start items-start gap-3 flex">
        <div className="BusqueUmaTransaO grow shrink basis-0 text-gray-500 text-base font-normal leading-snug">
          Busque uma transação
        </div>
      </div>
      <Button size="lg" variant="reverse" className="">
        <FiSearch className=" w-5 h-5 font-bold" />
        Buscar
      </Button>
    </div>
  )
}
