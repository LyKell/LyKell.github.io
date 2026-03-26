interface CustomButtonProps {
  display: 'highlighted' | 'muted';
  text: string;
  children: React.ReactNode;
}

export default function CustomButton({ display, text, children }: CustomButtonProps) {
  return (
    <a
      className={`btn ${display === 'highlighted' ? 'border-accent bg-accent text-white' : 'text-accent2 border-line border bg-transparent'} `}
    >
      {children}
      {text}
    </a>
  );
}
