import { Product } from '@/interfaces';
import { initialData } from '@/seed/seed';
import React from 'react';
import Productcard from '../card/Productcard';

interface Props {
  products: Product[];
}




const ProductGrid = ({products}: Props) => {
  return (
    <div className=" xl:px-20 px-5">
      <div className="flex gap-4 overflow-x-auto">
        {products.map((product) => (
          <Productcard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
