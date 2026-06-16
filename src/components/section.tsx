import type { ReactNode } from "react";
import { Container } from "@/components/container";

type SectionProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-12 text-center max-w-3xl mx-auto">
            {eyebrow && <p className="text-sm font-bold tracking-wider uppercase text-[var(--color-gold-500)] mb-3">{eyebrow}</p>}
            {title && <h2 className="font-heading text-3xl font-bold text-[var(--color-navy-900)] sm:text-4xl">{title}</h2>}
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-gold-400)] to-[var(--color-gold-200)]" />
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
