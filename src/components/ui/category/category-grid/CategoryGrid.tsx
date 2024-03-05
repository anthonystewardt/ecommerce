import { Category,  } from "@/interfaces";
import { categoryMap } from "@/seed/seed";
import React from "react";
import CategoryCard from "../category-card/CategoryCard";


interface Props {
  categories: Category[];
}

const CategorytGrid = ({ categories }: Props) => {
  return (
    <div className=" xl:px-20 px-5">
      <div className="flex gap-10 overflow-x-auto">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorytGrid;
