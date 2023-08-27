'use client'
import React, { useEffect } from 'react'
import { Button } from '../Button'

export function Header() {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <header className="w-full flex bg-indigo-700 dark:bg-neutral-900 p-3 ">
      <div className="PageHeader justify-between items-center w-11/12 mx-auto inline-flex">
        <div className="Logo justify-start items-center gap-4 flex">
          <div className="IgniteSimbolo w-10 h-9 relative bg-emerald-400 items-center justify-center text-white rounded-full flex">
            $
          </div>
          <div className="Heading justify-start items-center flex">
            <div className="DtMoney text-zinc-200 text-2xl font-bold leading-10">
              DT Money
            </div>
          </div>
        </div>
        <div>
          <div className=" flex w-90 gap-1">
            <button
              className="bg-slate-300 p-1 m-1 rounded leading-relaxed dark:text-white capitalize"
              onClick={() => {
                // localStorage.removeItem('theme')
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
              }}
            >
              dark
            </button>
            <button
              className="bg-slate-300 p-1 m-1 rounded leading-relaxed dark:text-white capitalize"
              onClick={() => {
                // localStorage.removeItem('theme')
                localStorage.theme = 'light'
                document.documentElement.classList.remove('dark')
              }}
            >
              light
            </button>
            <button
              className="bg-slate-300 p-1 m-1 rounded leading-relaxed dark:text-white capitalize"
              onClick={() => {
                localStorage.removeItem('theme')
                if (
                  localStorage.theme === 'dark' ||
                  (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              }}
            >
              sitiem
            </button>
            <Button variant="reverse">Nova transação</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
