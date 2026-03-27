export default function Nav() {
  return (
    <nav
      className="fixed top-0 right-0 left-0 z-100 flex items-center justify-between px-15 py-5.5 backdrop-blur-xs"
      style={{ background: 'linear-gradient(to bottom, rgba(9, 8, 15, 0.96), transparent)' }}
    >
      <a className="text-accent font-mono text-[12px] tracking-widest no-underline opacity-[0.9]" href="#hero">
        ks.dev
      </a>
      <ul className="nav-links flex list-none gap-9 font-mono">
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
