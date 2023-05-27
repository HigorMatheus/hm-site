/* eslint-disable @next/next/no-img-element */

// import { useState } from 'react';

// import Switch from '@/components/Switch';

export default function Home() {
  // const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <a
          href={'/home'}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </div>
    </div>
  );
}
