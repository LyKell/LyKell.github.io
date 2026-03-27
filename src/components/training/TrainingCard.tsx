interface TrainingCardProps {
  diploma: {
    title: string;
    location: string;
  };
}

export default function TrainingCard({ diploma }: TrainingCardProps) {
  return (
    <div className="training-tags">
      <div className="font-dm-serif mb-2 text-[20px] leading-[1.2] text-white">{diploma.title}</div>
      <div className="text-muted text-[13px]">{diploma.location}</div>
    </div>
  );
}
