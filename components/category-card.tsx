import Image from "next/image";

interface CategoryCardProps {
  image: string;
  title: string;
  total: number;
}
export function CategoryCard({ image, title, total }: CategoryCardProps) {
  return (
    <>
      <div className="border border-gray-200 p-5 px-20 rounded-md flex flex-col gap-3">
        <Image src={image} width={100} height={100} alt="fish" />
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-gray-500">{total} Products</p>
      </div>
    </>
  );
}
