interface CustomButtonProps {
  display: 'highlighted' | 'muted';
  text: string;
  ref: string;
  children: React.ReactNode;
}

export default function CustomButton({ display, text, ref, children }: CustomButtonProps) {
  return (
    <a
      className={`btn ${display === 'highlighted' ? 'border-accent bg-accent text-white' : 'text-accent2 border-line border bg-transparent'}`}
      href={ref}
    >
      {children}
      {text}
    </a>
  );
}
