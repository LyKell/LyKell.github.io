import Contact from "./Contact";
import Head from "./Head";

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen justify-center pt-30 px-15 pb-20 overflow-hidden">
      <Head />
      <Contact />
    </section>
  );
}
