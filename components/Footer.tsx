export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-7">
      <div className="section-wrap flex flex-col justify-between gap-3 text-[10px] tracking-[.15em] text-zinc-600 sm:flex-row">
        <span>© {new Date().getFullYear()} BAYU SAPUTRA.</span>
        <a href="#home" className="transition hover:text-[#ef4754]">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
