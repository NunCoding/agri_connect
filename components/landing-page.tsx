import { Button } from "./ui/button";
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
      <div className="flex gap-5 text-xl">
        <Button className="bg-orange-400 border-none w-44 h-12" variant={'outline'}>Sell Here</Button>
        <Button className="bg-orange-400 border-none w-44 h-12" variant={'outline'}>Buy Here</Button>
      </div>
      </div>
    </div>
  );
};

export default Landing;
