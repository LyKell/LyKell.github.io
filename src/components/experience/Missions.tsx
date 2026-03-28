interface MissionsProps {
  missions: string[];
}

export default function Missions({ missions }: MissionsProps) {
  return (
    <ul className="experience-bullets">
      {missions.map((mission) => (
        <li>{mission}</li>
      ))}
    </ul>
  );
}
