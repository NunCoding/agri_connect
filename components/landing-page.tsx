import { Button } from "./ui/button";
import Link from "next/link";
const Landing = () => {
  return (
    <div>
      {/* Content goes here */}
      <div className="flex p-40 flex-col text-white gap-10 w-4xl">
        <p className="text-2xl">
          WELCOME TO Agricultural Products Rural Entrepreneurship Management
          System.
        </p>
        <h1 className="text-7xl text-white font-bold">Agriconnect hub</h1>
        <p className="text-2xl">
          Empowering Rural Dreams, Nurturing Agricultural Growth - AgriConnect
          Hub cultivates prosperity from the roots up.
        </p>
      <div className="flex gap-5">
        <Button className="bg-orange-400 border-none w-44 h-12" variant={'outline'}>
          <span className="text-sm sm:text-lg font-bold">
            <Link href={'/auth/signup'}>SELL HERE</Link>
          </span>
        </Button>
        <Button className="bg-green-700 border-none w-44 h-12 cursor-pointer" variant={'outline'}>
        <span className="text-sm sm:text-lg font-bold">
          <Link href={'/buyer'}>BUY HERE</Link>
        </span>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Landing;
