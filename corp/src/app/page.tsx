import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      altImg={"car factory"}
      title="Professional cloud hosting"
    />
  );
}
