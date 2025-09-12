import { Truck, Headphones, Shield, Package } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on all your order",
    },
    {
      icon: Headphones,
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: Shield,
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: Package,
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ]

  return (
    <div className="py-8 px-4">
      <div className="shadow-lg rounded-lg p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex justify-start items-center gap-4">
              <div className="flex-shrink-0 ">
                <badge.icon className="w-12 h-12 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
