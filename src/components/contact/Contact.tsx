import ContactCard from './ContactCard';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">04 / Contact</div>
      <h2 className="contact-title">Travaillons ensemble.</h2>
      <p className="contact-sub">Paris & remote</p>
      <ContactCard className="justify-center" />
    </section>
  );
}
