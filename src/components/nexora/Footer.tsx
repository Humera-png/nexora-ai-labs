export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] blur-[6px] opacity-80" />
            <span className="relative h-3 w-3 rounded-full bg-white" />
          </span>
          <div>
            <div className="text-sm font-semibold">Nexora Labs</div>
            <div className="text-xs text-muted-foreground">AI • Software • Innovation</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nexora Labs. Engineered with intention.
        </div>
      </div>
    </footer>
  );
}
