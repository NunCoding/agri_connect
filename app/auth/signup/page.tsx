import Sidebar from "@/app/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="h-screen bg-green-50">
        <Sidebar />
        <div className="flex justify-between px-40 mt-20">
          <div className="w-lg bg-white p-10 rounded-lg shadow">
            <h1 className="text-4xl font-medium">Get Started Now</h1>
            <form action="/home" className="flex flex-col gap-5 mt-10">
              <div>
                <label htmlFor="text">Name</label>
                <Input type="text" placeholder="name" />
              </div>
              <div>
                <label htmlFor="text">Email</label>
                <Input type="email" placeholder="email" />
              </div>
              <div>
                <label htmlFor="text">Password</label>
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex flex-nowrap gap-1 justify-start items-center">
                <Checkbox />
                <label htmlFor="text">I agree to the terms & policy</label>
              </div>
              <Input
                type="submit"
                value={"Sign up"}
                className="bg-green-700 text-white font-medium"
              />
            </form>
            <div className="flex justify-center p-5">
              <p>Or</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Button
                variant={"secondary"}
                className="w-full border border-gray-400 bg-white"
              >
                <span>Sign in with google</span>
              </Button>
              <Button
                variant={"secondary"}
                className="w-full border border-gray-400 bg-white"
              >
                <Apple />
                <span>Sign in with apple</span>
              </Button>
            </div>
            <div className="mt-5 flex justify-center items-center gap-1 font-medium">
                <p>Have an account? </p>
                <Link href={'/auth/signin'} className="text-blue-700">Sign In</Link>
            </div>
          </div>
          <div className="max-w-6xl">
            <p className="text-2xl text-green-700">
              Reach your customers faster,
            </p>
            <h1 className="text-4xl text-orange-600 font-bold">With Us.</h1>
            <div className="flex justify-start">
              <Image
                src={"/removebg-preview.png"}
                alt="preview"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
