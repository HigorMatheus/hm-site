/* eslint-disable @next/next/no-img-element */
'use client';

import { useQuery } from '@tanstack/react-query';

import { api } from '@/services/api';
import { User } from '@/services/mirage';
// import { queryClient } from '@/services/queryClient';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

export function Container() {
  const { data } = useQuery(
    ['users'],
    async () => {
      const response = await api.get<{ users: Array<User> }>('/users');

      return response.data.users;
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
  console.log(data);
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Your content */}
            <a
              href={'/'}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              home
            </a>
            <a
              href="/home/app"
              className="m-8 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              test
            </a>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {data?.map((person) => (
              <li
                key={person.email}
                className="flex justify-between py-5 gap-x-6"
              >
                <div className="flex gap-x-4">
                  <div className="flex-auto min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                      {person.email}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end"></div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
