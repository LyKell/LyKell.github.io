import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useStaggerReveal } from '../../hooks/useStaggerReveal';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg">
      <div className="reveal" ref={useScrollReveal<HTMLDivElement>()}>
        <div className="section-label">02 / Parcours</div>
        <h2 className="section-title">Expérience</h2>
      </div>
      <div className="border-line ml-3 border-l pl-10" ref={useStaggerReveal<HTMLDivElement>('.experience-card')}>
        <ExperienceCard
          startDate={'NOV. 2022'}
          job={'Software Engineer'}
          company={'EY Fabernovel'}
          location={'Paris'}
          missions={[
            "Développement d'un POC CMS avec Payload, React et Next.js en TypeScript (fév.-mars 2026)",
            'Interface de visualisation de KPIs de ventes automobiles avec Node.js et NestJS (oct.-déc. 2025)',
            'Interventions sur des applications WeWeb et Retool (sept. 2025)',
            'Maintenance et développement de fonctionnalités internes en TypeScript et Java 17 (fp-ts, Dynamics) pour un groupe de luxe français (mai 2024–juil. 2025)',
            "Développement d'API de recherche produits avec NestJS et OpenSearch (fév.-mai 2024)",
            "Réécriture d'une application Java de gestion de défauts en TypeScript/NestJS (sept. 2023-janv. 2024)",
            "Développement Scala backend pour l'application Welcome - BNP Paribas, déploiement multi-pays (déc. 2022-juin 2023)",
          ]}
        />
        <ExperienceCard
          startDate={'AVR. 2022'}
          endDate={'SEPT. 2022'}
          job={'Software Engineer Intern'}
          company={'Dassault Systèmes'}
          location={'Vélizy-Villacoublay'}
          missions={[
            "Plugin d'intégration Squash TM / People Support pour la création et le suivi de tickets de bug (Finance, People, Sales & Support)",
            'Plugins de génération de rapports de tests personnalisés (cas de test, exigences, tickets)',
          ]}
        />
      </div>
    </section>
  );
}
