interface SkillsCardProp {
  label: string;
  tags: string[];
}

export default function SkillsCard({ label, tags }: SkillsCardProp) {
  return (
    <div className="skill-card">
      <div className="skill-card-label">{label}</div>
      <div className="skill-tags">
        {tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
