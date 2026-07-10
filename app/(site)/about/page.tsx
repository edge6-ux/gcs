import Link from "next/link";

const stats = [
  { value: "[X]+", label: "Years in business" },
  { value: "[X]+", label: "Homes & facilities served" },
  { value: "[X]", label: "Team members" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow mb-4">OUR STORY</span>
          <h1 className="font-display text-[32px] font-normal text-ink">
            About Gilleland Cleaning Services
          </h1>
        </div>
      </section>

      <section className="bg-cream px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-2xl space-y-6 font-body text-[15px] leading-relaxed text-body">
          <p>
            [Founder name] started Gilleland Cleaning Services in [year] with a
            simple goal: [founding motivation — e.g. &ldquo;bring a more
            personal, detail-oriented standard of cleaning to homes and
            businesses in the area&rdquo;]. Since then, we&apos;ve grown to serve{" "}
            [service area — city/county/region], working with [type of clients —
            e.g. &ldquo;homeowners and local businesses who care about the
            details&rdquo;].
          </p>
          <p>
            What sets us apart is [differentiator — e.g. consistency,
            communication, trust]. Every visit follows the same standard,
            whether it&apos;s your first cleaning or your fiftieth.
          </p>
          <p>
            We&apos;re [licensed/insured/bonded status — placeholder], and proud
            to be a [local/family-owned/woman-owned — placeholder, only include
            if true] business serving our community.
          </p>
        </div>
      </section>

      <section className="bg-stone px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="font-display text-[36px] text-gold/40">
                  {stat.value}
                </span>
                <h2 className="mt-2 font-display text-[16px] font-medium text-ink">
                  {stat.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[20px] font-normal text-ink">
            Ready to see the difference?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/residential"
              className="inline-block rounded-[6px] border border-line px-6 py-3 font-body text-[14px] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Residential
            </Link>
            <Link
              href="/commercial"
              className="inline-block rounded-[6px] border border-line px-6 py-3 font-body text-[14px] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Commercial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
