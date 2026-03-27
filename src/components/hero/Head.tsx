export default function Head() {
  return (
    <>
      <div className="hero-tag">Software Engineer · Paris</div>
      <h1 className="hero-name">
        Kévin
        <br />
        <em className="text-accent2 italic">SAVANE</em>
      </h1>
      <p className="text-muted mt-5 flex flex-row items-center gap-1.5">
        <span className="hero-role">TypeScript · NestJS · React</span>
        <span
          style={{ animation: 'blink 1.1s step-end infinite' }}
          className="bg-accent inline-block h-3.5 w-2 align-middle"
        ></span>
      </p>
    </>
  );
}
