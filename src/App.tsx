import { Header } from '@/features/header/components/Header';
import { HeroBanner } from '@/features/home/components/HeroBanner';
import { Categories } from '@/features/categories/components/Categories';
import { ShowcaseList } from '@/features/showcase/components/ShowcaseList';
import { PartnerBanners } from '@/features/home/components/PartnerBanners';
import { BrandList } from '@/features/home/components/BrandList';
import { Footer } from '@/features/footer/components/Footer';

export function App() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. Categorias */}
        <Categories />

        {/* 3. Vitrine Principal com Filtros */}
        <ShowcaseList />

        {/* 4. Primeiro Bloco de Banners Duplos */}
        <PartnerBanners />

        {/* 5. Segunda Vitrine (Ver todos) */}
        <ShowcaseList showCategories={false} subtitle="Ver todos" />

        {/* 6. Segundo Bloco de Banners Duplos */}
        <PartnerBanners />

        {/* 7. Navegue por Marcas */}
        <BrandList />

        {/* 8. Terceira Vitrine (Ver todos) */}
        <ShowcaseList showCategories={false} subtitle="Ver todos" />
      </main>

      {/* 9. Footer Institucional */}
      <Footer />
    </>
  );
}

export default App;