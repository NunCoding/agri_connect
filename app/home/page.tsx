import { Button } from "@/components/ui/button";
import Sidebar2 from "../ui/sidebar2";
import { ArrowRight } from "lucide-react";
const page = () => {
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
            <h1 className="text-2xl font-medium text-green-500 uppercase">Welcome to AgriCONNECT</h1>
            <div className="mt-10 flex flex-col gap-3">
            <h1 className="text-7xl font-bold text-gray-700">Fresh & Healthy</h1>
            <h1 className="text-7xl font-bold text-gray-700">FARM PRODUCTS</h1>
            </div>
            <Button className="mt-20 bg-green-600 w-42 h-12 hover:bg-transparent hover:border hover:text-gray-700 hover:border-gray-600">
                <span className="text-lg font-medium">Shop Now</span>
                <ArrowRight/>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
