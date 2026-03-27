import Card from '../Card';
import TrainingCard from './TrainingCard';

export default function Training() {
  return (
    <section className="bg-bg2">
      <div>
        <div className="section-label">03 / Formation</div>
        <h2 className="section-title">Diplômes</h2>
      </div>
      <div className="card-grid">
        <Card label="2020 — 2022">
          <TrainingCard
            diploma={{ title: 'Master Logiciel et Ingénierie des Données', location: 'Université Gustave Eiffel' }}
          />
        </Card>
        <Card label="2017 — 2020">
          <TrainingCard diploma={{ title: 'Licence Informatique', location: 'Université Paris-Est Marne-la-Valléé' }} />
        </Card>
        <Card label="2014 - 2017">
          <TrainingCard diploma={{ title: 'Baccalauréat Scientifique (SI)', location: 'Lycée Martin Luther King' }} />
        </Card>
      </div>
    </section>
  );
}
