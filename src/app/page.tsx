import { HomeRandomeMaterial } from "@/components/HomeRandomMaterial";
import Typography from "../atoms/typography";

export default function Home() {

  return <div className="flex flex-col items-center">
    <div className="flex flex-col items-center pt-10">
      <Typography variant="h3">Welcome to</Typography>
      <div className="h-4"></div>
      <Typography variant="h1">Inm Archive</Typography>
      <div className="h-8"></div>
      <HomeRandomeMaterial></HomeRandomeMaterial>
    </div>
  </div >
}
