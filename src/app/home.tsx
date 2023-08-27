/* eslint-disable @next/next/no-img-element */
'use client';

import { Search } from '@/components/Search';

export default function Home() {
  return (
    <div className="DesktopHome mt-1 flex  h-auto w-full overflow-auto bg-neutral-700 hover:text-end">
      {/* <div className="Background w-screen h-52 absolute top-0  bg-neutral-900 " /> */}
      <div className="mx-auto my-2 flex w-11/12 max-w-7xl flex-col gap-2">
        <div className="Dashboard   inline-flex items-center justify-center gap-8">
          <div className="Card inline-flex w-80 flex-col items-start justify-start gap-3 rounded-md bg-zinc-800 py-6 pl-8 pr-6">
            <div className="Header inline-flex items-start justify-between gap-48 self-stretch">
              <div className="Entradas text-base font-normal leading-relaxed text-stone-300">
                Entradas
              </div>
              <div className="Icons relative h-8 w-8" />
            </div>
            <div className="R1740000 self-stretch text-3xl font-bold leading-10 text-zinc-200">
              R$ 17.400,00
            </div>
          </div>
          <div className="Card inline-flex w-80 flex-col items-start justify-start gap-3 rounded-md bg-zinc-800 py-6 pl-8 pr-6">
            <div className="Header inline-flex items-start justify-between gap-48 self-stretch">
              <div className="Entradas text-base font-normal leading-relaxed text-stone-300">
                Saídas
              </div>
              <div className="Icons relative h-8 w-8" />
            </div>
            <div className="R1740000 self-stretch text-3xl font-bold leading-10 text-zinc-200">
              R$ 1.259,00
            </div>
          </div>
          <div className="Card inline-flex w-80 flex-col items-start justify-start gap-3 rounded-md bg-emerald-800 py-6 pl-8 pr-6">
            <div className="Header inline-flex items-start justify-between gap-48 self-stretch">
              <div className="Entradas text-base font-normal leading-relaxed text-stone-300">
                Total
              </div>
              <div className="Icons relative h-8 w-8" />
            </div>
            <div className="R1740000 self-stretch text-3xl font-bold leading-10 text-zinc-200">
              R$ 16.141,00
            </div>
          </div>
        </div>
        <Search />
        <div className="Table inline-flex  h-96 flex-col items-start justify-start gap-2 overflow-auto">
          <div className="BodyLine inline-flex items-center justify-start gap-2 self-stretch rounded bg-zinc-800 px-8 py-5">
            <div className="DesenvolvimentoDeSite shrink grow basis-0 text-base font-normal leading-relaxed text-stone-300">
              Desenvolvimento de site
            </div>
            <div className="R1200000 w-48 text-base font-normal leading-relaxed text-emerald-500">
              R$ 12.000,00
            </div>
            <div className="Venda w-60 text-base font-normal leading-relaxed text-stone-300">
              Venda
            </div>
            <div className="042022 w-24 text-base font-normal leading-relaxed text-stone-300">
              13/04/2022
            </div>
          </div>
          <div className="BodyLine inline-flex items-center justify-start gap-2 self-stretch rounded bg-zinc-800 px-8 py-5">
            <div className="DesenvolvimentoDeSite shrink grow basis-0 text-base font-normal leading-relaxed text-stone-300">
              Aluguel do apartamento
            </div>
            <div className="R1200000 w-48 text-base font-normal leading-relaxed text-red-400">
              - R$ 1.200,00
            </div>
            <div className="Venda w-60 text-base font-normal leading-relaxed text-stone-300">
              Casa
            </div>
            <div className="042022 w-24 text-base font-normal leading-relaxed text-stone-300">
              27/03/2022
            </div>
          </div>
        </div>
        <div className="Pagination flex items-center justify-center gap-4">
          <div className="Icons h-6 w-6 " />
          <div className="Pages flex items-center justify-center gap-2">
            <div className=" Page flex h-10 w-10 items-center justify-center rounded-md bg-emerald-800 ">
              <div className=" flex h-10 w-10  items-center justify-center text-center text-base font-bold leading-snug text-zinc-200">
                1
              </div>
            </div>
            <div className=" Page flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800 ">
              <div className=" flex h-10 w-10  items-center justify-center text-center text-base font-bold leading-snug text-neutral-400">
                2
              </div>
            </div>
            <div className=" Page flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800 ">
              <div className=" flex h-10 w-10  items-center justify-center text-center text-base font-bold leading-snug text-neutral-400">
                3
              </div>
            </div>
          </div>
          <div className="Icons relative h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
