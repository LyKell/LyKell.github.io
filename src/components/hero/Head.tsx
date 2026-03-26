export default function Head() {
  return (
    <>
      <div className="flex items-center text-accent font-jb-mono text-[11px] tracking-[.2em] uppercase mb-6 gap-3">
        Software Engineer · Paris
      </div>
      <h1
        style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: "1" }}
        className="text-white font-dm-serif text-[clamp(52px, 8vw, 96px)] tracking-[-.02em] font-bold"
      >
        Kévin
        <br />
        <em className="text-accent2 italic">SAVANE</em>
      </h1>
      <p className="flex flex-row text-muted items-center gap-1.5 mt-5">
        <span className="flex items-center font-jb-mono text-[13px] text-muted gap-1.5">
          TypeScript · NestJS · React
        </span>
        <span
          style={{ animation: "blink 1.1s step-end infinite" }}
          className="inline-block w-2 h-3.5 bg-accent align-middle"
        ></span>
      </p>
    </>
  );
}
