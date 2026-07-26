import OutlineGoldButton from "@/components/OutlineGoldButton";

const whyGilleland = [
  {
    label: "Standardized checklists",
    title: "Standardized checklists",
    description:
      "Every visit follows the same documented scope, so quality never falters.",
    imageSrc: "/commercial-why-checklists.png",
    imageAlt: "Printed cleaning checklist on a clipboard with a pen",
  },
  {
    label: "One point of contact",
    title: "One point of contact",
    description:
      "A direct line to the same person for scheduling, questions, or changes — no call centers.",
    imageSrc: "/commercial-why-contact.png",
    imageAlt: "Phone and notepad on a desk, ready for a direct call",
  },
  {
    label: "Flexible scheduling",
    title: "Flexible scheduling",
    description:
      "Before-hours, after-hours, or weekends — cleaning that works around your business, not the other way around.",
    imageSrc: "/commercial-why-scheduling.png",
    imageAlt: "Desk calendar open to a monthly view beside a notebook and plant",
  },
  {
    label: "Licensed & Insured",
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind.",
    imageSrc: "/shield.png",
    imageAlt: "Shield with checkmark icon representing licensed and insured status",
  },
];

const facilityTypes = [
  {
    name: "Offices",
    imageSrc: "/commercial-facility-offices.png",
    imageAlt: "Clean open-plan office with rows of desks and natural light",
  },
  { name: "Retail & Storefronts", imageSrc: "/commercial-facility-retail.png", imageAlt: "Bright, minimalist retail showroom with polished floors and display shelving" },
  {
    name: "Medical & Professional Offices",
    imageSrc: "/commercial-facility-medical.png",
    imageAlt: "Calm, well-kept medical waiting room with upholstered chairs and natural light",
  },
];

const steps = [
  {
    title: "1. Tell us about your building",
    description: "Square footage, frequency, and any specific requirements.",
    iconSrc: "/commercial-step-building.png",
    iconAlt: "Building icon",
  },
  {
    title: "2. We walk the space",
    description:
      "In person or virtually — we confirm scope and provide your final rate.",
    iconSrc: "/commercial-step-walk.png",
    iconAlt: "Clipboard with checkmark icon",
  },
  {
    title: "3. We build a schedule around you",
    description:
      "Consistent service on the days and hours that work for your business.",
    iconSrc: "/commercial-step-schedule.png",
    iconAlt: "Calendar and clock icon for scheduling",
    iconClassName: "h-[52px] w-[52px]",
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* Section A — Hero */}
      <section className="bg-cream px-4 py-6 md:px-10 md:py-8">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-line bg-cream shadow-[0_4px_32px_rgba(44,42,38,0.07)]"
          aria-label="Commercial cleaning services hero"
        >
          <div className="h-[2px] bg-gold" aria-hidden="true" />

          <div className="grid md:min-h-[80vh] md:grid-cols-2">
            <div className="relative order-1 h-[50vh] min-h-[320px] md:order-2 md:h-auto">
              <img
                src="/commercial-page-hero.png"
                alt="Modern open-plan office with clean desks"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="order-2 flex flex-col justify-center border-line bg-cream px-6 py-14 md:order-1 md:border-r md:px-12 md:py-16 lg:px-16">
              <div className="mx-auto w-full max-w-lg md:mx-0">
                <span className="mb-4 block font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-gold md:text-[14px]">
                  Commercial
                </span>
                <h1 className="font-display text-[36px] font-normal leading-[1.1] text-ink md:text-[44px] lg:text-[48px]">
                  A standard your facility can rely on.
                </h1>
                <p className="mt-5 max-w-[460px] font-body text-[15px] leading-relaxed text-body md:text-[16px]">
                  Consistent, accountable cleaning for offices and facilities.
                  The same standard, every visit, no matter who&rsquo;s on the crew.
                </p>
                <div className="mt-8">
                  <OutlineGoldButton href="/commercial/estimate" variant="light">
                    Request a quote
                  </OutlineGoldButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B — Transparent pricing */}
      <section className="bg-slate px-6 py-14 text-center md:px-12">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow mb-4 !text-gold-tint">PRICING, UPFRONT</span>
          <h2 className="font-display text-[26px] font-normal !text-cream md:text-[30px]">
            Commercial cleaning starts at $0.10/sqft.
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] font-body text-[15px] leading-relaxed !text-cream/70">
            Your final rate depends on frequency, scope, and facility type —
            confirmed after a quick walkthrough, never a surprise on the invoice.
          </p>
        </div>
      </section>

      {/* Section C — Why Gilleland */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mb-4">WHY GILLELAND</span>
          <h2 className="font-display text-[28px] font-normal text-ink">
            Built for consistency, not just a clean day.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyGilleland.map((item) => (
              <article
                key={item.label}
                className="overflow-hidden rounded-[6px] border border-line bg-stone text-left"
              >
                {"imageSrc" in item && item.imageSrc && (
                  <div className="relative h-44 bg-stone md:h-48">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.imageSrc})` }}
                      role="img"
                      aria-label={item.imageAlt}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="p-8">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {item.label}
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-normal text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section D — Facility types */}
      <section className="bg-slate px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mb-4 !text-gold-tint">WHO WE SERVE</span>
          <h2 className="font-display text-[26px] font-normal !text-cream md:text-[28px]">
            Cleaning for every kind of workspace.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {facilityTypes.map((facility) => (
              <div
                key={facility.name}
                className="overflow-hidden rounded-[6px] border border-cream/20 bg-slate text-left"
              >
                <div className="relative h-44 bg-slate md:h-48">
                  {"imageSrc" in facility && facility.imageSrc ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${facility.imageSrc})` }}
                        role="img"
                        aria-label={facility.imageAlt}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent"
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 bg-cream/5"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-display text-[20px] font-normal !text-cream">
                    {facility.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E — How it works */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mb-4">GETTING STARTED</span>
          <h2 className="font-display text-[26px] font-normal text-ink">
            A straightforward process.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-3 flex h-[55px] items-end justify-center">
                  {"iconSrc" in step && step.iconSrc ? (
                    <img
                      src={step.iconSrc}
                      alt={step.iconAlt ?? ""}
                      className={`brightness-0 ${
                        "iconClassName" in step && step.iconClassName
                          ? step.iconClassName
                          : "h-10 w-10"
                      }`}
                    />
                  ) : (
                    <span className="font-display text-[36px] leading-none text-gold/40">
                      {index + 1}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-[16px] font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section F — Quote CTA */}
      <section
        id="quote"
        className="scroll-mt-20 bg-ink px-6 py-20 text-center md:px-12"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[28px] font-normal !text-cream md:text-[32px]">
            Let&rsquo;s talk about your facility.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] leading-relaxed !text-cream/70">
            Get a straightforward quote — no pressure, no long-term contract
            required to start.
          </p>
          <div className="mt-8">
            <OutlineGoldButton href="/commercial/estimate">Request a quote</OutlineGoldButton>
          </div>
          <p className="mt-6 font-body text-[13px] !text-cream/50">
            Prefer to talk first? Call{" "}
            <a
              href="tel:7705190618"
              className="text-cream/70 underline decoration-transparent transition-colors hover:text-cream hover:decoration-gold"
            >
              (770) 519-0618
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
