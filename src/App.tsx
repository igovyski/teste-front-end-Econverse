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
        <ShowcaseList />
      </main>
    </>
  );
}

export default App;