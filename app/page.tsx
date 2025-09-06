import Sidebar from "@/app/ui/sidebar"
import Landing from "@/components/landing-page"

const page = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/main-slider.png')" }}>
      <Sidebar/>
      <Landing/>
    </div>
  )
}
export default page