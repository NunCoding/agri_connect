"use client";
import Sidebar2 from "../ui/sidebar2";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TrustBadges } from "@/components/trust-badges";
export default function Page() {
  return (
    <>
      <Sidebar2 />
      <section className="mt-20 px-40 py-20">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-screen max-h-[800px]">
            {/* Main Hero Section */}
            <div className="lg:col-span-2 bg-gradient-to-br from-green-900 to-green-400 rounded-lg px-20 flex items-center justify-between text-white relative overflow-hidden">
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl xl:text-7xl font-bold mb-6 text-balance">
                  AgriConnect Hub
                </h1>
                <div className="mb-6 border-l-2 border-green-500 px-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">Sale up to</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold text-lg">
                      30% OFF
                    </span>
                  </div>
                  <p className="text-green-100 text-lg">
                    Free shipping on all your order.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-green-600 max-w-52 py-7 hover:bg-gray-100 rounded-full px-8 font-semibold text-lg"
                >
                  Shop now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Hero Image */}
              <div className="flex-1 relative h-full">
                <Image
                  src="/pngtree-woman.png"
                  alt="Woman with fresh produce"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col gap-6">
              {/* Summer Sale Card */}
              <Card className="bg-gray-100 p-6 rounded-lg flex-1 relative overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/buyer1.png"
                  alt="Fresh produce in bag"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay content */}
                <div className="relative z-10">
                  <p className="text-gray-600 font-medium mb-2">SUMMER SALE</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    75% OFF
                  </h2>
                  <p className="text-gray-600 mb-4">Only Fruit & Vegetable</p>
                  <button
                    className="text-green-400 hover:text-green-300 p-0 font-semibold"
                    onClick={() => console.log("world")}
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </Card>

              {/* Special Products Card */}
              <Card className="relative p-6 rounded-2xl flex-1 text-white overflow-hidden shadow-lg">
                {/* Background Image */}
                <Image
                  src="/buyer2.png"
                  alt="Leafy vegetables background"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-green-300 font-medium mb-2">BEST DEAL</p>
                  <h2 className="text-3xl font-bold mb-1">Special Products</h2>
                  <h3 className="text-2xl font-semibold mb-4">
                    Deal of the Month
                  </h3>

                  <Button
                    variant="ghost"
                    className="text-green-400 hover:text-green-300 p-0 font-semibold"
                    onClick={() => console.log("world")}
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="category-buyer">
        <div className="">
          <TrustBadges />
        </div>
      </section>
    </>
  );
}
