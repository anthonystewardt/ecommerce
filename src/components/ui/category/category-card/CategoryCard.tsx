import { Category } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';


interface Prop {
  category: Category;
}

const CategoryCard = ({category}: Prop) => {
  return (
    <Link href={category.href || ""} className='w-[160px] h-[160px] rounded-full p-5 bg-slate-100 hover:border hover:cursor-pointer hover:border-blue-500 transition ease'>
      <div className="flex justify-center items-center">
        <Image
          width={100}
          height={100}
          src={category.image}
          alt={category.name}
          className='min-h-[100px] min-w-[100px] object-cover rounded-full'
        />
      </div>
      <div className="text-center">
        <h2>{ category.name }</h2>
      </div>
    </Link>
  );
}

export default CategoryCard;
