import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream px-6 py-16 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow mb-4">GET IN TOUCH</span>
          <h1 className="font-display text-[30px] font-normal text-ink">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-cream px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-3xl rounded-[6px] border border-line bg-stone p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                Phone
              </span>
              <a
                href="tel:7705190618"
                className="mt-2 block font-display text-[20px] text-ink transition-colors hover:text-gold"
              >
                (770) 519-0618
              </a>
            </div>

            <div>
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                Email
              </span>
              <a
                href="mailto:contact@sgcleans.com"
                className="mt-2 block font-body text-[15px] text-ink transition-colors hover:text-gold"
              >
                contact@sgcleans.com
              </a>
            </div>

            <div>
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                Hours
              </span>
              <p className="mt-2 font-body text-[15px] text-body">
                Monday – Thursday, 9am – 5pm
              </p>
            </div>

            <div>
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                Service area
              </span>
              <p className="mt-2 font-body text-[15px] text-body">
                Jackson, Hall, and surrounding areas
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-body text-[15px] leading-relaxed text-body">
          Looking for a quote? Visit our{" "}
          <Link href="/residential" className="text-ink underline decoration-gold/40 hover:decoration-gold">
            Residential
          </Link>{" "}
          or{" "}
          <Link href="/commercial" className="text-ink underline decoration-gold/40 hover:decoration-gold">
            Commercial
          </Link>{" "}
          page to get started.
        </p>
      </section>
    </>
  );
}
