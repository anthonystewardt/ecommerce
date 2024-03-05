import TopAlert from "@/components/ui/alerts/TopAlert";
import CategorytGrid from "@/components/ui/category/category-grid/CategoryGrid";
import { CarouselHero } from "@/components/ui/hero/Carousel";
import OfferGrid from "@/components/ui/offers/offer-grid/OfferGrid";
import ProductGrid from "@/components/ui/products/product-grid/ProductGrid";
import TitleTab from "@/components/ui/tabs/TitleTab";
import TopMenu from "@/components/ui/top-menu/TopMenu";
import { categoryMap, initialData } from "@/seed/seed";
import Image from "next/image";

const productList = initialData.products;
const categoryList = categoryMap;


export default function Home() {
  return (
    <main className="">
      
      <CarouselHero />
      <section className="xl:my-16 my-5">
        <TitleTab title="Los productos más vendidos" />
        <ProductGrid products={productList} />
      </section>
      <section className="xl:my-16 my-5">
        <TitleTab title="Categorías" />
        <CategorytGrid categories={categoryList} />
      </section>
      <section className="xl:my-16 my-5">
        <TitleTab title="últimas Ofertas" />
        <OfferGrid />
      </section>
    </main>
  );
}
