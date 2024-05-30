/* eslint-disable @next/next/no-img-element */
// 'use client';
import Image from 'next/image';
import React from 'react';

export function Header() {
  // useEffect(() => {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (
  //     localStorage.theme === 'dark' ||
  //     (!('theme' in localStorage) &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   ) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, []);

  return (
    <header className="flex w-full bg-zinc-400 p-3 dark:bg-zinc-900 ">
      <div className="PageHeader mx-auto inline-flex w-11/12 items-center justify-between">
        <div className="Logo flex items-center justify-start gap-4">
          <div className="IgniteSimbolo relative flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
            $
          </div>
          <div className="Heading flex items-center justify-start">
            <div className="DtMoney text-2xl font-bold leading-10 text-zinc-200">
              DT Money 2
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-10 w-10 rounded-full bg-slate-300"
            src="https://avatars.githubusercontent.com/u/53712358?v=4"
            alt="Higor Santos"

            // srcset=""
          />
        </div>
      </div>
      {/* <div className="PageHeader mx-auto inline-flex w-11/12 items-center justify-between">
        <div className="Logo flex items-center justify-start gap-4">
          <div className="IgniteSimbolo relative flex h-9 w-10 items-center justify-center rounded-full bg-emerald-400 text-white">
            $
          </div>
          <div className="Heading flex items-center justify-start">
            <div className="DtMoney text-2xl font-bold leading-10 text-zinc-200">
              DT Money
            </div>
          </div>
        </div>
        <div>
          <div className=" w-90 flex gap-1">
            <button
              className="m-1 rounded bg-slate-300 p-1 capitalize leading-relaxed dark:text-white"
              // onClick={() => {
              //   // localStorage.removeItem('theme')
              //   // localStorage.theme = 'dark';
              //   // document.documentElement.classList.add('dark');
              // }}
            >
              dark
            </button>
            <button
              className="m-1 rounded bg-slate-300 p-1 capitalize leading-relaxed dark:text-white"
              // onClick={() => {
              //   // localStorage.removeItem('theme')
              //   // localStorage.theme = 'light';
              //   // document.documentElement.classList.remove('dark');
              // }}
            >
              light
            </button>
            <button
              className="m-1 rounded bg-slate-300 p-1 capitalize leading-relaxed dark:text-white"
              onClick={() => {
                // localStorage.removeItem('theme');
                // if (
                //   localStorage.theme === 'dark' ||
                //   (!('theme' in localStorage) &&
                //     window.matchMedia('(prefers-color-scheme: dark)').matches)
                // ) {
                //   document.documentElement.classList.add('dark');
                // } else {
                //   document.documentElement.classList.remove('dark');
                // }
              }}
            >
              sitiem
            </button>
            {/* <Button variant="reverse">Nova transação</Button> *
          </div>
        </div>
      </div> */}
    </header>
  );
}
