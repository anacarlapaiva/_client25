import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-serif text-2xl mb-2">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {site.title} · {site.crp}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Londrina · Assis · Online
          </p>
        </div>
        <div className="md:text-right space-y-1">
          <p className="text-sm text-muted-foreground">
            © {site.year} — Todos os direitos reservados.
          </p>
          <a
            href="#hero"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors inline-block"
          >
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
