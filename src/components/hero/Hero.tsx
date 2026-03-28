import ContactCard from '../contact/ContactCard';
import Head from './Head';

export default function Hero() {
  return (
    <section id="hero">
      <Head />
      <ContactCard className="opacity-0" />
    </section>
  );
}
