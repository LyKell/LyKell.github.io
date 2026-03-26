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
      <div className="font-jb-mono text-muted mb-2 text-[10px] tracking-[.15em]">
        {startDate} - {endDate ?? 'PRÉSENT'}
      </div>
      <div className="font-dm-serif mb-1 text-[22px] text-white">{job}</div>
      <div className="font-jb-mono text-accent mb-5 text-[12px]">
        {company} · {location}
      </div>
      <Missions missions={missions} />
    </div>
  );
}
