'use client';
import classNames from 'classnames';
import React, { useState, RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export function NavBar() {
  const [isMenuOpen] = useState(false);

  // const handleSubMenu = useCallback((section: string) => {
  //   // setSlug(section);
  //   // setIsSubMenuVisible((isOpen) => !isOpen);
  // }, []);

  // const menus = [
  //   {
  //     description: 'Manutenção',

  //     menus: [
  //       {
  //         to: '/dashboard',
  //         description: 'Dashboard',
  //         // Icon: IoLogoBuffer,
  //       },
  //       {
  //         to: '/settings/cadastro/cliente',
  //         description: 'cadastro de client',
  //         // Icon: AiOutlineUserAdd,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div
      data-active={isMenuOpen}
      className={classNames(
        'w-11 bg-zinc-800 border-t border-r border-zinc-900 data-[active=true]:w-48',
      )}
    >
      <aside
        data-active={isMenuOpen}
        className={classNames(
          'w-11 translate-x-0  z-[9999999999999]  transition-all   data-[active=true]:w-48',
        )}
      >
        menu
      </aside>
    </div>
  );
}
