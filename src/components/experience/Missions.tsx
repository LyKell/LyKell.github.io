interface MissionsProps {
  missions: string[];
}

export default function Missions({ missions }: MissionsProps) {
  return (
    <ul className="experience-bullets flex list-none flex-col gap-2">
      {missions.map((mission) => (
        <li className="text-text relative max-w-170 pl-5 text-[13.5px]">{mission}</li>
      ))}
    </ul>
  );
}
