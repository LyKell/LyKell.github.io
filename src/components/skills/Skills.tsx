import SkillsCard from './SkillsCard';

export default function Skills() {
  return (
    <section className="bg-bg2 px-15 py-25">
      <div>
        <div className="section-label">01 / Compétences</div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)' }} className="section-title">
          Stack & Outils
        </h2>
      </div>
      <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <SkillsCard label="Langages" tags={['TypeScript', 'JavaScript', 'Java', 'Scala']} />
        <SkillsCard label="Frameworks" tags={['NestJS', 'React.js', 'Next.js', 'Node.js']} />
        <SkillsCard label="Outils & Plateformes" tags={['Payload CMS']} />
        <SkillsCard label="Langues" tags={['Français', 'Anglais', 'Mandarin']} />
        <SkillsCard label="Logiciels" tags={['Visual Studio Code', 'Git']} />
      </div>
    </section>
  );
}
