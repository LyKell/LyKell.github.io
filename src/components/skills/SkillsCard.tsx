interface SkillsCardProp {
  tags: string[];
}

export default function SkillsCard({ tags }: SkillsCardProp) {
  return (
    <div className="skill-tags">
      {tags.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  );
}
