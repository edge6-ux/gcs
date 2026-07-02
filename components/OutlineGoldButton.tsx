import type { ReactNode } from "react";

type OutlineGoldButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export default function OutlineGoldButton({
  href,
  children,
  className = "",
  variant = "dark",
}: OutlineGoldButtonProps) {
  const variantClasses =
    variant === "light"
      ? "border-gold text-ink hover:bg-gold hover:text-ink"
      : "border-gold text-cream hover:bg-gold hover:text-ink";

  return (
    <a
      href={href}
      className={`inline-block rounded-[6px] border px-6 py-3 font-body text-[14px] font-medium transition-colors ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}
