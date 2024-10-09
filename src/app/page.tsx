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

      <Services />
      <Testimonials />
      <WhyUs />
      <EcoSystem />
      <AboutUs />
      <Faq />
      <Banner />
      <Footer />
    </div>
  );
}
