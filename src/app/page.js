import FeaturesSection from "./components/home/FeaturesSection";
import FoundSection from "./components/home/FoundSection";
import HeroSection from "./components/home/HeroSection";
import RankingSection from "./components/home/RatingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RankingSection />
      <FoundSection/>
    </>
  );
}
