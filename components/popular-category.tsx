import Image from "next/image";
export function PopularCategory() {
  const categories = [
    {
      name: "Fresh Fruit",
      image: "/Fresh-Fruit.png",
      featured: false,
    },
    {
      name: "Fresh Vegetables",
      image: "/Fresh-Vegetables.png",
      featured: true,
    },
    {
      name: "Meat & Fish",
      image: "/Meat-Fish.png",
      featured: false,
    },
    {
      name: "Snacks",
      image: "/Snacks.png",
      featured: false,
    },
    {
      name: "Beverages",
      image: "/Beverages.png",
      featured: false,
    },
    {
      name: "Beauty & Health",
      image: "/Beauty-Health.png",
      featured: false,
    },
    {
      name: "Bread & Bakery",
      image: "/Bread-Bakery.png",
      featured: false,
    },
    {
      name: "Baking Needs",
      image: "/Baking-Needs.png",
      featured: false,
    },
    {
      name: "Cooking",
      image: "/Cooking.png",
      featured: false,
    },
    {
      name: "Diabetic Food",
      image: "/Diabetic-Food.png",
      featured: false,
    },
    {
      name: "Dish Detergents",
      image: "/Dish-Detergents.png",
      featured: false,
    },
    {
      name: "Oil",
      image: "/Oil.png",
      featured: false,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md hover:border-green-700 hover:shadow-md hover:shadow-green-400/40 transition-all duration-300"
            >
              <div className="h-48 flex items-center justify-center">
                {/* Placeholder for category image */}
                <Image
                  src={`/popular${category.image}`}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
