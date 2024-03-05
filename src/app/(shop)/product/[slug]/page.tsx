import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}


const ProductPage = ({ params }: Props) => {

  const {slug}  = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3  md:px-20">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5  whitespace-normal">
        <h1 className={`  antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[1]}
          availableSizes={product.sizes}
        />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />

        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <div className="  whitespace-normal">
          <p className="inline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        {/* <p className="font-light">{product.description}</p> */}
      </div>
    </div>
  );
}

export default ProductPage;
