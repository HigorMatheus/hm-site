import React from 'react';

// import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 h-24 flex justify-center items-center text-gray-50">
      <div className="container max-w-5xl p-4 flex items-center justify-center ">
        <h1>Ignite Feed</h1>
      </div>
    </header>
  );
};
