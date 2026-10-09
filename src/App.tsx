import { HeroBanner } from './features/home/components/HeroBanner';
import { Categories } from './features/categories/components/Categories';
import { ShowcaseList } from './features/showcase/components/ShowcaseList';

function App() {
  return (
    <main>
      <HeroBanner />
      <Categories />
      <ShowcaseList />
    </main>
  );
}

export default App;