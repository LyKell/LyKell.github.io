interface CardProps {
  label: string;
  children: React.ReactNode;
}

export default function Card({ label, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-label">{label}</div>
      {children}
    </div>
  );
}
