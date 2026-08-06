import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Results } from "@/components/site/Results";
import { Courses } from "@/components/site/Courses";
import { VideoReviews } from "@/components/site/VideoReviews";
import { Enquiry } from "@/components/site/Enquiry";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Footer } from "@/components/site/Footer";

const title = "MAPS Educare — IIT-JEE, NEET & MHT-CET Coaching, Nalasopara";
const description =
  "MAPS Educare Nalasopara: 15+ years of IIT-JEE, NEET, MHT-CET and Board coaching. 250+ rankers, small batches, weekly mock tests. Yes, I Can!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Results />
        <Courses />
        <VideoReviews />
        <WhyChoose />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
