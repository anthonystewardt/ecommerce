import { initialData } from "./seed"
import prisma from '../lib/prisma';

interface Abc {
  assd: String
}


async function main() {
  await Promise.all([
    prisma.category.deleteMany(),
    prisma.product.deleteMany(),
    prisma.productImage.deleteMany(),
  ]);

  const {categories, products} = initialData

  // Categories
  const categoriesData = categories.map((name) =>({name: name as string}))
  console.log(categoriesData)

  await prisma.category.createMany({
    data: categoriesData
  })

  const categoriesDB = await prisma.category.findMany()


  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()]  = category.id;
    return map;
  }, {} as Record<string, string>)


  // Products
  const {images,type, ...product1} = products[0];

  // await prisma.product.create({
  //   data: {
  //     ...product1,
  //     categoryId: categoriesMap['shirts'],
  //   }
  // });

  products.forEach(async(product) => {
    const {images, type, ...productData} = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...productData,
        categoryId: categoriesMap[type],
      }
    })
  })

  console.log("Seed complete");

}


(() => {

  // protect the seed main function if it's called from production
  if (process.env.NODE_ENV === "production") {
    return;
  }

  main()
})()




