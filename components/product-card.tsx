import { Card } from "@/components/ui/card";
import { Handbag, Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  maxRating?: number;
  salePercentage?: number;
  image: string;
  imageAlt: string;
}

export function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  maxRating = 5,
  salePercentage,
  image,
  imageAlt,
}: ProductCardProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="w-full max-w-[480px] bg-card border-border overflow-hidden hover:shadow-lg hover:shadow-green-100 hover:border hover:border-green-600 transition-shadow duration-300">
      <div className="relative">
        {/* Sale Badge */}
        {salePercentage && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-semibold">
              Sale {salePercentage}%
            </div>
          </div>
        )}

        {/* Product Image */}
        <div className="bg-background flex justify-center items-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Product Title */}
        <h3 className="text-xl font-semibold text-card-foreground text-balance">
          {title}
        </h3>

        {/* Price */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="p-3 rounded-full bg-gray-100">
            <Handbag />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {renderStars()}
          <span className="text-sm text-muted-foreground ml-2">
            ({rating}/{maxRating})
          </span>
        </div>
      </div>
    </Card>
  );
}
