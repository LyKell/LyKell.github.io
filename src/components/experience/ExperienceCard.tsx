import Missions from './Missions';

interface ExperienceCardProps {
  startDate: string;
  endDate?: string;
  job: string;
  company: string;
  location: string;
  missions: string[];
}

export default function ExperienceCard({ startDate, endDate, job, company, location, missions }: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-date">
        {startDate} - {endDate ?? 'PRÉSENT'}
      </div>
      <div className="experience-title">{job}</div>
      <div className="experience-company">
        {company} · {location}
      </div>
      <Missions missions={missions} />
    </div>
  );
}
