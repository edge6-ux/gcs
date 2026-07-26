import GoldButton from "@/components/GoldButton";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { featuredTestimonials } from "@/lib/testimonials";

const trustPoints = [
  {
    label: "No contracts",
    description: "Cancel or reschedule anytime, no penalties.",
    iconSrc: "/residential-icon-no-contracts.png",
    iconAlt: "Document with cancel symbol — no contracts",
  },
  {
    label: "Same trusted team",
    description: "You'll know who's coming, every time.",
    iconSrc: "/residential-icon-team.png",
    iconAlt: "Team of three people icon",
  },
  {
    label: "Satisfaction guaranteed",
    description: "Not happy? We'll make it right.",
    iconSrc: "/residential-icon-satisfaction.png",
    iconAlt: "Satisfaction guaranteed badge with checkmark",
  },
  {
    label: "Flexible scheduling",
    description: "Cleaning that fits your calendar — not the other way around.",
    iconSrc: "/residential-icon-scheduling.png",
    iconAlt: "Calendar and clock icon for flexible scheduling",
  },
  {
    label: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind.",
    iconSrc: "/shield2.png",
    iconAlt: "Shield with checkmark icon representing licensed and insured status",
  },
  {
    label: "Organic Cleaning Products",
    description:
      "Now offering organic supplies as an option — safe for kids and pets, just ask.",
    iconSrc: "/residential-icon-organic.svg",
    iconAlt: "Leaf icon representing organic cleaning products",
  },
];

const services = [
  {
    label: "Standard Cleaning",
    title: "Standard Cleaning",
    description:
      "Regular upkeep to keep your home consistently fresh — dusting, floors, kitchens, bathrooms, the essentials done right.",
    imageSrc: "/residential-service-standard.png",
    imageAlt: "Spray bottle and microfiber cloth on a bright, clean kitchen counter",
  },
  {
    label: "Deep Cleaning",
    title: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom reset — baseboards, appliance interiors, grout, the details a standard clean doesn't reach.",
    imageSrc: "/residential-service-deep.png",
    imageAlt: "Spotless tiled shower corner with water droplets on gleaming surfaces",
  },
  {
    label: "Move-In / Move-Out",
    title: "Move-In / Move-Out",
    description:
      "A completely empty, completely clean space — for the home you're leaving or the one you're just starting in.",
    imageSrc: "/residential-service-move.png",
    imageAlt: "Empty, sunlit room with hardwood floors, ready for move-in",
  },
];

const steps = [
  {
    title: "1. Tell us about your space",
    description:
      "A few quick details: home size, what you need, how often.",
    iconSrc: "/residential-step-space.png",
    iconAlt: "House with magnifying glass icon",
    iconClassName: "h-[55px] w-[55px]",
  },
  {
    title: "2. We confirm the details",
    description:
      "We'll confirm the details in person before your first clean.",
    iconSrc: "/residential-step-confirm.png",
    iconAlt: "Clipboard with checkmark icon",
  },
  {
    title: "3. We show up and handle it",
    description: "Same trusted team, every visit, done right.",
    iconSrc: "/residential-step-showup.png",
    iconAlt: "Cleaning supplies icon — spray bottle and cloth",
    iconClassName: "h-[52px] w-[52px]",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Section A — Hero */}
      <section className="bg-cream px-4 py-6 md:px-10 md:py-8">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-line bg-cream shadow-[0_4px_32px_rgba(44,42,38,0.07)]"
          aria-label="Residential cleaning services hero"
        >
          <div className="h-[2px] bg-gold" aria-hidden="true" />

          <div className="grid md:min-h-[80vh] md:grid-cols-2">
            <div className="relative order-1 h-[50vh] min-h-[320px] md:order-2 md:h-auto">
              <img
                src="/residential-page-hero.png"
                alt="Clean, sunlit residential kitchen"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="order-2 flex flex-col justify-center border-line bg-cream px-6 py-14 md:order-1 md:border-r md:px-12 md:py-16 lg:px-16">
              <div className="mx-auto w-full max-w-lg md:mx-0">
                <span className="mb-4 block font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-gold md:text-[14px]">
                  Residential
                </span>
                <h1 className="font-display text-[36px] font-normal leading-[1.1] text-ink md:text-[44px] lg:text-[48px]">
                  Give yourself back your time.
                </h1>
                <p className="mt-5 max-w-[460px] font-body text-[15px] leading-relaxed text-body md:text-[16px]">
                  Meticulous, recurring care tailored to how you live — because a
                  clean home shouldn&rsquo;t be one more thing on your list.
                </p>
                <div className="mt-8">
                  <GoldButton href="/residential/estimate">Get your free estimate</GoldButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B — Trust strip */}
      <section className="bg-stone py-10 px-6 md:px-12">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-10">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              {"iconSrc" in point && point.iconSrc && (
                <img
                  src={point.iconSrc}
                  alt={point.iconAlt ?? ""}
                  className="mx-auto mb-3 h-10 w-10 brightness-0"
                />
              )}
              <p className="font-body text-[14px] font-medium text-ink">
                {point.label}
              </p>
              <p className="mt-1 font-body text-[13px] leading-relaxed text-body">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section C — Services grid */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mb-4">WHAT WE OFFER</span>
          <h2 className="font-display text-[28px] font-normal text-ink">
            Care for every corner.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.label}
                className="overflow-hidden rounded-[6px] border border-line bg-stone text-left"
              >
                <div className="relative h-44 bg-stone md:h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.imageSrc})` }}
                    role="img"
                    aria-label={service.imageAlt}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {service.label}
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-normal text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-relaxed text-body">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section D — Trust quote carousel */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <TestimonialCarousel testimonials={featuredTestimonials} />
      </section>

      {/* Section E — How it works */}
      <section className="bg-stone px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mb-4">GETTING STARTED</span>
          <h2 className="font-display text-[26px] font-normal text-ink">
            Simple, from the first message.
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

      {/* Section F — Estimate CTA */}
      <section
        id="estimate"
        className="scroll-mt-20 bg-ink px-6 py-20 text-center md:px-12"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[28px] font-normal !text-cream md:text-[32px]">
            Ready for a cleaner, calmer home?
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] leading-relaxed !text-cream/70">
            Get a free, no-obligation estimate — takes less than two minutes.
          </p>
          <div className="mt-8">
            <GoldButton href="/residential/estimate">Get your free estimate</GoldButton>
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
