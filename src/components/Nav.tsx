export default function Nav() {
  return (
    <nav className="fixed flex w-full flex-row items-center justify-between px-15 py-5.5 font-mono tracking-widest">
      <a className="text-accent text-[12px]" href="#hero">
        ks.dev
      </a>
      <ul className="text-muted flex flex-row gap-9 font-mono text-[11px] tracking-[.12em] uppercase">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Expérience</a>
        </li>
        <li>
          <a href="#education">Formation</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
