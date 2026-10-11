import { Suspense } from 'react';
import { Header } from './features/header/components/Header';
import { HeroBanner } from './features/home/components/HeroBanner';
import { Categories } from './features/categories/components/Categories';
import { ShowcaseList } from './features/showcase/components/ShowcaseList';

export function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <Suspense fallback={<p style={{ textAlign: 'center', padding: '40px 0', color: '#808080' }}>Carregando vitrine...</p>}>
          <ShowcaseList />
        </Suspense>
      </main>
    </>
  );
}

export default App;