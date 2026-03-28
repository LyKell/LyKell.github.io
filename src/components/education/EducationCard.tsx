interface EducationCardProps {
  diploma: {
    title: string;
    location: string;
  };
}

export default function EducationCard({ diploma }: EducationCardProps) {
  return (
    <>
      <div className="education-degree">{diploma.title}</div>
      <div className="education-school">{diploma.location}</div>
    </>
  );
}
