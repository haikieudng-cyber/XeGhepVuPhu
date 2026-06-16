import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", className = "" }: CtaLinkProps) {
  let classes = "";
  
  if (variant === "primary") {
    classes = "bg-[var(--color-navy-800)] text-white hover:bg-[var(--color-navy-900)] hover:-translate-y-0.5 hover:shadow-md";
  } else if (variant === "secondary") {
    classes = "bg-[var(--color-gold-400)] text-white hover:bg-[var(--color-gold-500)] hover:-translate-y-0.5 hover:shadow-md";
  } else if (variant === "outline") {
    classes = "bg-white text-[var(--color-navy-800)] ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-[var(--color-navy-900)]";
  }

  return (
    <Link
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all shadow-sm active:scale-95 ${classes} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
