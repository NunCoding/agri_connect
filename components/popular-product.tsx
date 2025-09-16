"use client";
import { Handbag, Percent, Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Type for products
type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating?: number;
  discount?: number;
  featured: boolean;
};

export function PopularProduct() {
  const products: Product[] = [
    {
      id: 1,
      name: "Green Apple",
      image: "/products/green-apple.png",
      price: "$2.99",
      rating: 4,
      discount: 50,
      featured: true,
    },
    {
      id: 2,
      name: "Fresh Orange",
      image: "/products/fresh-orange.png",
      price: "$3.49",
      rating: 5,
      discount: 20,
      featured: false,
    },
    {
      id: 3,
      name: "Cabbage",
      image: "/products/cabbage.png",
      price: "$1.99",
      rating: 3,
      discount: 10,
      featured: false,
    },
    {
      id: 4,
      name: "Green Lettuce",
      image: "/products/green-lettuce.png",
      price: "$2.49",
      rating: 4,
      discount: 15,
      featured: false,
    },
    {
      id: 5,
      name: "Eggplant",
      image: "/products/eggplant.png",
      price: "$1.79",
      rating: 2,
      discount: 5,
      featured: false,
    },
    {
      id: 6,
      name: "Potatoes",
      image: "/products/potatoes.png",
      price: "$2.29",
      rating: 5,
      discount: 25,
      featured: false,
    },
    {
      id: 7,
      name: "Corn",
      image: "/products/corn.png",
      price: "$1.59",
      discount: 0,
      featured: false,
    }, // no rating
    {
      id: 8,
      name: "Fresh Cauliflower",
      image: "/products/cauliflower.png",
      price: "$2.89",
      rating: 4,
      discount: 30,
      featured: false,
    },
    {
      id: 9,
      name: "Green Capsicum",
      image: "/products/capsicum.png",
      price: "$2.39",
      rating: 3,
      discount: 0,
      featured: false,
    },
    {
      id: 10,
      name: "Green chili",
      image: "/products/chili.png",
      price: "$1.49",
      rating: 4,
      discount: 0,
      featured: false,
    },
  ];

  const [ratings, setRatings] = useState<Record<number, number>>({});
  const max = 5;

  const handleRating = (productId: number, value: number) => {
    setRatings((prev) => ({ ...prev, [productId]: value }));
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
        Popular Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => {
          // Show user rating if clicked, otherwise fallback to default rating
          const currentRating = ratings[product.id] ?? product.rating ?? 0;

          return (
            <div
              key={product.id}
              className="border p-4 hover:shadow-sm hover:shadow-green-500 hover:border-green-700 transition-shadow duration-300"
            >
              {product.discount ? (
                <p className="text-md text-white h-12 w-12 rounded-full bg-red-500 flex justify-center items-center">
                  {product.discount} <Percent size={15} />
                </p>
              ) : null}

              <div className="relative w-full h-56 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-green-600 font-bold">{product.price}</p>

                  {/* ⭐ Rating */}
                  <div className="flex space-x-1 mt-2">
                    {[...Array(max)].map((_, i) => (
                      <Star
                        key={i}
                        onClick={() => handleRating(product.id, i + 1)}
                        className="cursor-pointer"
                        size={24}
                        fill={i < currentRating ? "gold" : "none"}
                        stroke={i < currentRating ? "gold" : "gray"}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-3 h-12 w-12 bg-green-100 text-green-600 flex justify-center items-center rounded-full">
                  <Handbag className="cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
