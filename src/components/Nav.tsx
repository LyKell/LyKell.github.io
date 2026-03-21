export default function Nav() {
  return (
    <nav className="fixed w-full flex flex-row justify-between px-15 py-5.5 font-mono tracking-widest items-center">
      <a className="text-accent text-[12px]" href="#hero">
        ks.dev
      </a>
      <ul className="flex flex-row gap-9 text-muted text-[11px] font-mono uppercase tracking-[.12em]">
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
