interface CustomButtonProps {
  display: "highlighted" | "muted";
  text: string;
  children: React.ReactNode;
}

export default function CustomButton({
  display,
  text,
  children,
}: CustomButtonProps) {
  return (
    <a
      className={`btn ${display === "highlighted" ? "border-accent bg-accent text-white" : "border text-accent2 border-line bg-transparent"} `}
    >
      {children}
      {text}
    </a>
  );
}
