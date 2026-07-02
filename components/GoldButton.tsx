import type { ReactNode } from "react";

type GoldButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function GoldButton({
  href,
  children,
  className = "",
}: GoldButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-[6px] bg-gold px-6 py-3 font-body text-[14px] font-medium text-ink transition-colors hover:bg-gold/90 ${className}`}
    >
      {children}
    </a>
  );
}
