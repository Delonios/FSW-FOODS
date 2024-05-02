import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const Category = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-md">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default Category;
