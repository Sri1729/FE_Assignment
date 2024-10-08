import { Clients, Header, Intro, Services, Testimonials } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Clients />

      <Services />
      <Testimonials />
    </div>
  );
}
