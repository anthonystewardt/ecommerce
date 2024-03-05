import Productcard from "@/components/ui/products/card/Productcard";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string;
  }
}



const CategoryId = ({ params }: Props) => {
  
  const navigationList = ["phones","technology", "hombres", "mujeres", "progamadores"]

  // return NotFound if the category doesn't exist in the array navigationList
  if (!navigationList.includes(params.id)) {
    return notFound()
  }

  const productList = initialData.products.filter((product) => product.gender === "men");


  return (
    <section className="xl:px-20 px-5">
      <h1 className="text-2xl font-semibold">Categoria {params.id} </h1>
      <div className="grid grid-cols-12 gap-5">
        {
          productList.map((product) => (
            <Productcard key={product.title} product={product} />
          ))
        }
      </div>
    </section>
  );
}

export default CategoryId;
