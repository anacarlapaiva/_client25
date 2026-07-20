import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  intro?: ReactNode;
};

export function Section({
  id,
  label,
  title,
  children,
  className,
  titleClassName,
  intro,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-22 border-t border-border", className)}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="section-label mb-3">{label}</p>
        <h2 className={cn("text-3xl md:text-4xl max-w-3xl mb-4", titleClassName)}>
          {title}
        </h2>
        {intro ? (
          <div className="text-muted-foreground leading-relaxed max-w-2xl mb-10 md:mb-12">
            {intro}
          </div>
        ) : (
          <div className="mb-8 md:mb-10" />
        )}
        {children}
      </div>
    </section>
  );
}
