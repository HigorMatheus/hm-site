'use client';

import Image from 'next/image';

import { useCountStore } from '@/lib/store';

import { Button } from '../Button';

export function Publication() {
  const { count } = useCountStore((state) => {
    return {
      count: state.count,
      text: state.text,
    };
  });
  return (
    <section className="p-10 mt-4 rounded bg-zinc-800">
      <div className="flex items-center gap-4">
        <div className="p-[0.05rem] w-[2.7rem] h-[2.7rem] border border-green-400 rounded ">
          <Image
            className="w-10 h-10 rounded"
            src="https://github.com/HigorMatheus.png"
            alt=""
          />
        </div>
        <div>
          <span className="font-bold text-zinc-50">Higor Matheus{count}</span>
          <p className="text-sm text-zinc-400">Dev Front-End</p>
        </div>
        <span className="ml-auto text-sm text-zinc-400">Publicado à 1h</span>
      </div>
      <aside className="mt-4 text-sm font-normal text-white">
        Fala galera 👋 Acabei de subir mais um projeto no meu portifa. É um
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <br /> 👉 jane.design/doctorcare #novoprojeto #nlw #rocketseat
      </aside>
      <hr className="my-2 border-zinc-500" />
      <div className="flex flex-col gap-4 text-white">
        <span>Deixe seu feedback </span>
        <textarea
          className="h-24 p-2 text-sm border rounded outline-none resize-none border-zinc-800 hover:border-green-600 focus:border focus:border-green-600 bg-zinc-900"
          placeholder="Escreva um comentário..."
        />
        <footer>
          <Button>Publicar</Button>
        </footer>
      </div>
    </section>
  );
}
