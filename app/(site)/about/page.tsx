import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero — owners */}
      <section className="bg-cream px-4 py-6 md:px-10 md:py-8">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-line bg-cream shadow-[0_4px_32px_rgba(44,42,38,0.07)]"
          aria-label="About Gilleland Cleaning Services"
        >
          <div className="h-[2px] bg-gold" aria-hidden="true" />

          <div className="grid md:min-h-[70vh] md:grid-cols-2">
            <div className="relative order-1 h-[50vh] min-h-[320px] md:order-2 md:h-auto">
              <img
                src="/about-owners-hero.png"
                alt="Shawn and Travis Gilleland, owners of Gilleland Cleaning Services"
                className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
              />
            </div>

            <div className="order-2 flex flex-col justify-center border-line bg-cream px-6 py-14 md:order-1 md:border-r md:px-12 md:py-16 lg:px-16">
              <div className="mx-auto w-full max-w-lg md:mx-0">
                <span className="mb-4 block font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-gold md:text-[14px]">
                  About Us
                </span>
                <h1 className="font-display text-[36px] font-normal leading-[1.1] text-ink md:text-[44px] lg:text-[48px]">
                  Meet Shawn &amp; Travis
                </h1>
                <p className="mt-5 max-w-[460px] font-body text-[15px] leading-relaxed text-body md:text-[16px]">
                  The family-owned team behind Gilleland Cleaning Services —
                  bringing professionalism, attention to detail, and genuine
                  care to every home and business we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow mb-4">OUR STORY</span>
          <div className="space-y-6 font-body text-[15px] leading-relaxed text-body">
            <p>
              Gilleland Cleaning Services was founded by Shawn Gilleland with a
              passion for serving others through professionalism, attention to
              detail, and genuine care. Alongside her husband, Travis, they
              provide dependable residential, commercial, and pressure washing
              services throughout Northeast Georgia.
            </p>
            <p>
              What makes us different is our commitment to trust, reliability,
              and doing the job right. We treat every home and business as if
              it were our own, communicate clearly, and take pride in the quality
              of our work. As a family-owned, licensed, and insured business, we
              are dedicated to providing service you can count on every time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[20px] font-normal text-ink">
            Ready to see the difference?
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
