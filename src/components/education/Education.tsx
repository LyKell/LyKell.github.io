import { useScrollReveal } from '../../hooks/useScrollReveal';
import Card from '../Card';
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <section id="education">
      <div className="reveal" ref={useScrollReveal<HTMLDivElement>()}>
        <div className="section-label">03 / Formation</div>
        <h2 className="section-title">Diplômes</h2>
      </div>
      <div className="card-grid reveal" ref={useScrollReveal<HTMLDivElement>()}>
        <Card label="2020 — 2022">
          <EducationCard
            diploma={{ title: 'Master Logiciel et Ingénierie des Données', location: 'Université Gustave Eiffel' }}
          />
        </Card>
        <Card label="2017 — 2020">
          <EducationCard
            diploma={{ title: 'Licence Informatique', location: 'Université Paris-Est Marne-la-Valléé' }}
          />
        </Card>
        <Card label="2014 - 2017">
          <EducationCard diploma={{ title: 'Baccalauréat Scientifique (SI)', location: 'Lycée Martin Luther King' }} />
        </Card>
      </div>
    </section>
  );
}
