import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main>
      {children}
      <h1>MAIN</h1>
    </main>
  );
}

export default Main;
