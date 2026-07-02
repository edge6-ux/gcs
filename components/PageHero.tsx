type PageHeroProps = {
  variant: "residential" | "commercial";
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
};

export default function PageHero({
  variant,
  eyebrow,
  title,
  description,
  imageSrc,
}: PageHeroProps) {
  const isResidential = variant === "residential";

  return (
    <section
      className={`relative flex min-h-[52vh] items-end md:min-h-[58vh] ${
        isResidential ? "bg-stone" : "bg-slate"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${
          isResidential
            ? "bg-gradient-to-t from-ink/85 via-ink/45 to-ink/15"
            : "bg-gradient-to-t from-ink/90 via-slate/70 to-slate/25"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-2xl">
          <span
            className={`eyebrow mb-4 ${isResidential ? "text-gold-tint" : "text-gold-tint"}`}
          >
            {eyebrow}
          </span>
          <h1 className="font-display text-[34px] font-normal leading-tight text-cream md:text-[42px]">
            {title}
          </h1>
          <p
            className="mt-4 max-w-lg font-body text-[15px] leading-relaxed md:text-[16px]"
            style={{ color: "#B8AE9A" }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
