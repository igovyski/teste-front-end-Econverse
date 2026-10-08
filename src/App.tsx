import React from 'react';
import { ShowcaseList } from './features/showcase/components/ShowcaseList';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <main>
        <ShowcaseList />
      </main>
    </div>
  );
};

export default App;