import ContactCard from './ContactCard';

export default function Contact() {
  return (
    <section id="contact" className="bg-bg text-center">
      <div className="section-label justify-center">04 / Contact</div>
      <h2 className="contact-title">Travaillons ensemble.</h2>
      <p className="text-muted font-jb-mono mb-12 text-[13px] tracking-widest">Paris & remote</p>
      <ContactCard className="justify-center" />
    </section>
  );
}
