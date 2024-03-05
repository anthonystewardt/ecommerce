import { Footer } from "@/components";
import TopAlert from "@/components/ui/alerts/TopAlert";
import TopMenu from "@/components/ui/top-menu/TopMenu";



export const metadata = {
 title: 'Tienda Yura',
 description: 'Tienda Yura - Compra tus productos favoritos en línea vía importación de China y USA a Perú.',
};


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen">
      <TopAlert />
      <TopMenu />
      {children}
      <Footer />
    </main>
  );
}