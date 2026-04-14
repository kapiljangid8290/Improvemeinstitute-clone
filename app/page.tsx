import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import HomeCourses from "@/components/HomeCourses";
import HomeEnrichment from "@/components/HomeEnrichment";
import HomeApproach from "@/components/HomeApproach";
import HomeTestimonials from "@/components/HomeTestimonials";
import Assessment from "@/components/Assessment";
import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeCourses />
        <HomeEnrichment />
        <HomeApproach />
        <HomeTestimonials />
        <Assessment />
      </main>
      <HomeFooter />
    </>
  );
}
