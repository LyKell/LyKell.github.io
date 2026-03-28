interface CustomButtonProps {
  display: 'highlighted' | 'muted';
  text: string;
  ref: string;
  children: React.ReactNode;
}

export default function CustomButton({ display, text, ref, children }: CustomButtonProps) {
  const buttonStyle =
    display === 'highlighted'
      ? 'border-accent bg-accent hover:bg-accent2 hover:border-accent2 text-white hover:shadow-[0_8px_32px_rgba(168,85,247,0.4)]'
      : 'text-accent2 border-line hover:border-accent border bg-transparent hover:text-white hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)]';

  return (
    <a className={`btn ${buttonStyle}`} href={ref}>
      {children}
      {text}
    </a>
  );
}
