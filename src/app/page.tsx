import {
  AboutUs,
  Banner,
  Clients,
  EcoSystem,
  Faq,
  Footer,
  Header,
  Intro,
  Services,
  Testimonials,
  WhyUs,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Clients />

      <section id="services">
        <Services />
      </section>
      <Testimonials />
      <WhyUs />
      <EcoSystem />
      <section id="about-us">
        <AboutUs />
      </section>
      <Faq />
      <Banner />
      <Footer />
    </div>
  );
}
