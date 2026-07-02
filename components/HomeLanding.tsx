import Link from "next/link";

function ForkCard({
  href,
  variant,
  imageSrc,
}: {
  href: string;
  variant: "residential" | "commercial";
  imageSrc?: string;
}) {
  const isResidential = variant === "residential";
  const hasImage = Boolean(imageSrc);
  const onDark = hasImage || !isResidential;

  return (
    <Link
      href={href}
      className={`group relative flex min-h-[120px] flex-col justify-end overflow-hidden rounded-[8px] px-6 py-8 transition-all duration-200 md:h-full md:min-h-[480px] md:px-14 md:py-14 ${
        hasImage
          ? "border border-line hover:brightness-105"
          : isResidential
            ? "border border-line bg-stone hover:border-gold-tint hover:bg-gold-tint"
            : "bg-slate hover:brightness-110"
      }`}
    >
      {hasImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url(${imageSrc})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/25"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative z-10">
        <span
          className={`eyebrow mb-3 ${onDark ? "!text-gold-tint" : ""}`}
        >
          {isResidential ? "FOR YOUR HOME" : "FOR YOUR BUSINESS"}
        </span>
        <h2
          className={`font-display text-[22px] font-normal md:text-[36px] ${
            onDark ? "!text-cream" : "!text-ink"
          }`}
        >
          {isResidential ? "Residential" : "Commercial"}
        </h2>
        <p
          className={`mt-2 font-body text-[14px] leading-relaxed md:mt-5 md:max-w-[90%] md:text-[17px] ${
            onDark ? "!text-cream/85" : "!text-body"
          }`}
        >
          {isResidential
            ? "Thoughtful, recurring care tailored to how you live."
            : "Reliable, accountable cleaning for offices and facilities."}
        </p>
      </div>
    </Link>
  );
}

export default function HomeLanding() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-cream px-6 py-8 md:px-12 md:py-4">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col md:max-w-7xl">
        <header className="mb-8 shrink-0 text-center md:mb-5">
          <span className="eyebrow mb-3">WELCOME TO GILLELAND</span>
          <h1 className="font-display text-[22px] font-normal text-ink md:text-[28px]">
            Where would you like to begin?
          </h1>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <ForkCard
            href="/residential"
            variant="residential"
            imageSrc="/residential-hero.png"
          />
          <ForkCard
            href="/commercial"
            variant="commercial"
            imageSrc="/commercial-hero.png"
          />
        </div>

        <p className="mt-6 shrink-0 text-center font-body text-[13px] italic text-taupe md:mt-5">
          Not sure? Choose either path — we&rsquo;ll guide you from there.
        </p>
      </div>
    </div>
  );
}
