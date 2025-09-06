import { Button } from "@/components/ui/button";
import Sidebar2 from "../ui/sidebar2";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";

const page = () => {
  const services = [
    {
      id: 1,
      icon: "/icon/shipingfee.png",
      name: "Free Shipping",
      content: "Free shipping with discount",
    },
    {
      id: 2,
      icon: "/icon/support.png",
      name: "Great Support 24/7",
      content: "Instant access to Contact",
    },
    {
      id: 3,
      icon: "/icon/shoping.png",
      name: "100% Secure Payment",
      content: "We ensure your money is save",
    },
    {
      id: 4,
      icon: "/icon/money.png",
      name: "Money-Back Guarantee",
      content: "30 days money-back",
    },
  ];

  const products = [
    {
      id: 1,
      image: "/fruits/apple-red.png",
      name: "Red Apple",
      price: 999,
      discount: 50,
    },
    {
      id: 2,
      image: "/fruits/cabbage.png",
      name: "Chanise Cabbage",
      price: 149,
      discount: 0,
    },
    {
      id: 3,
      image: "/fruits/capsicum.png",
      name: "Green Capsicum",
      price: 14.99,
      discount: 0,
    },
    {
      id: 4,
      image: "/fruits/finger.png",
      name: "Ladies Finger",
      price: 14.99,
      discount: 0,
    },
  ];
  return (
    <>
      <section
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/BG.png')" }}
      >
        <Sidebar2 />

        <div className="flex justify-center items-center px-40">
          <div className="w-2xl"></div>
          <div className="mt-40">
            <h1 className="text-2xl font-medium text-green-500 uppercase">
              Welcome to AgriCONNECT
            </h1>
            <div className="mt-10 flex flex-col gap-3">
              <h1 className="text-7xl font-bold text-gray-700">
                Fresh & Healthy
              </h1>
              <h1 className="text-7xl font-bold text-gray-700">
                FARM PRODUCTS
              </h1>
            </div>
            <Button className="mt-20 bg-green-600 w-42 h-12 hover:bg-transparent hover:border hover:text-gray-700 hover:border-gray-600">
              <span className="text-lg font-medium">Shop Now</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>
      <section
        id="service"
        className="px-40 py-20 flex justify-center items-center gap-24"
      >
        {services.map((item) => (
          <div
            className="p-5 border-b flex flex-col justify-center items-center gap-3 border-gray-200"
            key={item.id}
          >
            <Image src={item.icon} width={100} height={100} alt="money" />
            <h1 className="text-xl font-medium">{item.name}</h1>
            <p className="text-gray-500">{item.content}</p>
          </div>
        ))}
      </section>
      <section id="products" className="px-5 py-20 sm:px-40">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Featured Products</h1>
          <div className="flex justify-center items-center font-medium text-green-600 cursor-pointer">
            <h1>View All</h1>
            <ArrowRight />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-center mt-10">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.name}
              price={item.price}
              rating={4}
              maxRating={5}
              salePercentage={50}
              image={item.image}
              imageAlt={item.name}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
