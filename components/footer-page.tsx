import Image from "next/image";
export function FooterPage() {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-nowrap gap-1">
            <Image src={"/Group.png"} width={30} height={30} alt="tree" />
            <h1 className="text-2xl font-semibold">AgriConnect HUB</h1>
          </div>
          <div className="text-gray-400">
            <p>Agricultural Products Rural </p>
            <p>Entrepreneurship Management System:</p>
            <p>AgriConnect Hub</p>
          </div>
        </div>
        <div className="text-gray-400 flex flex-col gap-3">
          <h1 className="text-2xl text-white">My Account</h1>
          <p>My Account</p>
          <p>Order History</p>
          <p>Shopping Cart</p>
          <p>Wishlist</p>
        </div>
        <div className="text-gray-400 flex flex-col gap-3">
          <h1 className="text-2xl text-white">Helps</h1>
          <p>Contact</p>
          <p>Faqs</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="text-gray-400 flex flex-col gap-3">
          <h1 className="text-2xl text-white">Categories</h1>
          <p>Fruit & Vegetables</p>
          <p>Meat & Fish</p>
          <p>Bread & Bakery</p>
          <p>Beauty & Health</p>
        </div>
      </section>
    </>
  );
}
