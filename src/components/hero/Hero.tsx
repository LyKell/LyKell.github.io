import ContactCard from '../contact/ContactCard';
import Head from './Head';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-15 pt-30 pb-20">
      <Head />
      <ContactCard />
    </section>
  );
}
