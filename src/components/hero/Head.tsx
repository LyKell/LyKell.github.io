export default function Head() {
  return (
    <>
      <div className="hero-tag text-accent font-jb-mono mb-6 flex items-center gap-3 text-[11px] tracking-[.2em] uppercase">
        Software Engineer · Paris
      </div>
      <h1
        style={{ fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: '1' }}
        className="font-dm-serif text-[clamp(52px, 8vw, 96px)] font-bold tracking-[-.02em] text-white"
      >
        Kévin
        <br />
        <em className="text-accent2 italic">SAVANE</em>
      </h1>
      <p className="text-muted mt-5 flex flex-row items-center gap-1.5">
        <span className="font-jb-mono text-muted flex items-center gap-1.5 text-[13px]">
          TypeScript · NestJS · React
        </span>
        <span
          style={{ animation: 'blink 1.1s step-end infinite' }}
          className="bg-accent inline-block h-3.5 w-2 align-middle"
        ></span>
      </p>
    </>
  );
}
