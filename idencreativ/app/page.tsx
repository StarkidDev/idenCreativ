import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="section bg-subtle">
        <div className="container">
          <ServiceCards />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PortfolioPreview />
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      <section className="section">
        <div className="container max-w-2xl">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
