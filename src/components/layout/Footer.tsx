import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {site.title} · {site.crp}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {site.year} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
