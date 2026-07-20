import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, whatsappLink } from "../../data/site";
import { LinkButton } from "../ui/Button";

const navItems = [
  { label: "Apresentação", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Interesses", href: "#interests" },
  { label: "Áreas", href: "#areas" },
  { label: "Abordagem", href: "#approach" },
  { label: "Contato", href: "#scheduling" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="group flex items-baseline gap-3">
          <span className="font-serif text-xl tracking-tight group-hover:opacity-80 transition-opacity">
            {site.initials}
          </span>
          <span className="hidden sm:inline font-sans text-sm text-muted-foreground">
            {site.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <LinkButton
            href={whatsappLink(
              "Olá, Raquel! Gostaria de agendar uma conversa.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5"
          >
            Agendar
          </LinkButton>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-foreground/80"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden border-t border-border px-6 py-5 flex flex-col gap-4 bg-background/95">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <LinkButton
            href={whatsappLink(
              "Olá, Raquel! Gostaria de agendar uma conversa.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Agendar
          </LinkButton>
        </div>
      ) : null}
    </header>
  );
}
