"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CountdownProps {
  targetDate: Date
}

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-2 text-white font-mono text-lg">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
        <span className="text-xs opacity-80">DAYS</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className="text-xs opacity-80">HOURS</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="text-xs opacity-80">MINS</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
        <span className="text-xs opacity-80">SECS</span>
      </div>
    </div>
  )
}

export function PromoBanner() {
  // Set countdown to 2 hours, 18 minutes, 46 seconds from now
  const countdownTarget = new Date(Date.now() + 2 * 60 * 60 * 1000 + 18 * 60 * 1000 + 46 * 1000)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Fresh Produce Card */}
      <div className="relative overflow-hidden rounded-lg bg-cyan-800 text-white min-h-[700px] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/promot-banner/sale-of-month.png')`,
          }}
        />
        <div className="relative mt-10 p-6 flex flex-col justify-start items-center h-full">
          <div className="text-sm font-medium opacity-90 mb-2">BEST DEALS</div>
          <h2 className="text-6xl font-black mb-6 text-balance">Sale of the Month</h2>

          <div className="mb-8 text-3xl">
            <Countdown targetDate={countdownTarget} />
          </div>

          <div>
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-20 py-5 rounded-full">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Meat Card */}
      <div className="relative overflow-hidden rounded-lg bg-black text-white min-h-[700px] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/promot-banner/fat-meat.png')`,
          }}
        />
        <div className="relative mt-10 p-6 flex flex-col justify-start items-center h-full">
          <div className="text-sm font-medium opacity-90 mb-2">85% FAT FREE</div>
          <h2 className="text-6xl font-black mb-6 text-balance">Low-Fat Meat</h2>

          <div className="mb-8">
            <div className="text-lg">
              Started at <span className="text-orange-400 font-bold text-xl">$79.99</span>
            </div>
          </div>

          <div>
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-20 py-5 rounded-full">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Fresh Fruit Card */}
      <div className="relative overflow-hidden rounded-lg bg-yellow-600 text-black min-h-[700px] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/promot-banner/fresh-fruit.png')`,
          }}
        />
        <div className="relative mt-10 p-6 flex flex-col justify-start items-center h-full">
          <div className="text-sm font-medium opacity-90 mb-2">SUMMER SALE</div>
          <h2 className="text-6xl font-black mb-6 text-balance">100% Fresh Fruit</h2>

          <div className="mb-8">
            <div className="inline-block bg-black text-white px-20 py-5 rounded-lg font-bold">Up to 64% OFF</div>
          </div>

          <div>
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
