import Card from '../Card';
import SkillsCard from './SkillsCard';

export default function Skills() {
  return (
    <section className="bg-bg2">
      <div>
        <div className="section-label">01 / Compétences</div>
        <h2 className="section-title">Stack & Outils</h2>
      </div>
      <div className="card-grid">
        <Card label="Langages">
          <SkillsCard tags={['TypeScript', 'JavaScript', 'Java', 'Scala']} />
        </Card>
        <Card label="Frameworks">
          <SkillsCard tags={['NestJS', 'React.js', 'Next.js', 'Node.js']} />
        </Card>
        <Card label="Outils & Plateformes">
          <SkillsCard tags={['Payload CMS']} />
        </Card>
        <Card label="Langues">
          <SkillsCard tags={['Français', 'Anglais', 'Mandarin']} />
        </Card>
        <Card label="Logiciels">
          <SkillsCard tags={['Visual Studio Code', 'Git']} />
        </Card>
      </div>
    </section>
  );
}
