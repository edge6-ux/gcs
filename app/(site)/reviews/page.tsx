import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

const beforeAfterShowcase = [
  { title: "Kitchen Deep Clean" },
  { title: "Living Room Reset" },
  { title: "Move-Out Clean" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow mb-4">REVIEWS</span>
          <h1 className="font-display text-[34px] font-normal leading-tight text-ink md:text-[42px]">
            What our clients say
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-body text-[15px] leading-relaxed text-body md:text-[16px]">
            Real feedback from homeowners and businesses across Northeast
            Georgia who trust us with their space.
          </p>
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-stone px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mb-4">SEE THE DIFFERENCE</span>
          <h2 className="font-display text-[26px] font-normal text-ink">
            Before &amp; after
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {beforeAfterShowcase.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[6px] border border-line bg-cream text-left"
              >
                <div className="grid grid-cols-2">
                  <div className="flex h-40 items-center justify-center bg-stone">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">
                      Before
                    </span>
                  </div>
                  <div className="flex h-40 items-center justify-center bg-gold-tint/25">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[16px] font-normal text-ink">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full reviews grid */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="eyebrow mb-4">CLIENT FEEDBACK</span>
            <h2 className="font-display text-[26px] font-normal text-ink">
              Hear from the people we clean for
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.author}-${index}`}
                className="rounded-[6px] border border-line bg-stone p-6 text-left md:p-8"
              >
                <span
                  className="font-body text-[13px] tracking-[0.14em] text-gold"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </span>
                <blockquote className="mt-4 font-body text-[14px] leading-relaxed text-body">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="mt-4 block font-body text-[13px] not-italic text-taupe">
                  — {testimonial.author}
                </cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[20px] font-normal text-ink">
            Ready to see the difference for yourself?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/residential"
              className="inline-block rounded-[6px] border border-line bg-cream px-6 py-3 font-body text-[14px] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Residential
            </Link>
            <Link
              href="/commercial"
              className="inline-block rounded-[6px] border border-line bg-cream px-6 py-3 font-body text-[14px] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Commercial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
