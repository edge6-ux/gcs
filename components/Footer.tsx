import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer shrink-0 bg-black text-white">
      {/* Gold hairline accent */}
      <div className="h-[2px] bg-gold" />

      <div className="footer-inner px-6 py-14 md:px-12">
        <div className="footer-grid grid max-w-5xl gap-10 md:grid-cols-3">
          {/* Left zone */}
          <div className="footer-brand">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png?v=2"
                alt=""
                aria-hidden="true"
                className="h-[126px] w-auto md:h-[140px]"
              />
            </Link>
            <p className="mt-3 font-display text-[15px] font-normal tracking-[0.06em] text-white">
              Gilleland Cleaning Services, LLC
            </p>
            <p className="footer-tagline mt-2 font-body text-[13px] text-white/60 leading-relaxed">
              Serving Jackson, Hall, and surrounding areas
            </p>
          </div>

          {/* Middle zone — quick links */}
          <div className="footer-links">
            <span className="footer-label eyebrow mb-5 !text-white/50">Quick Links</span>
            <div className="footer-link-list mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="/residential"
                className="font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                Residential
              </Link>
              <Link
                href="/commercial"
                className="font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                Commercial
              </Link>
              <Link
                href="/contact"
                className="font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right zone — contact */}
          <div className="footer-contact">
            <span className="footer-label eyebrow mb-5 !text-white/50">Get In Touch</span>
            <div className="footer-contact-list mt-5 flex flex-col gap-2">
              <a
                href="tel:7705190618"
                className="font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                (770) 519-0618
              </a>
              <a
                href="mailto:contact@sgcleans.com"
                className="font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                contact@sgcleans.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom mt-12 border-t border-white/10 pt-6">
          <p className="font-body text-[12px] text-white/50">
            © {year} Gilleland Cleaning Services, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
