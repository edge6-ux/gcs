import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer shrink-0 bg-black text-white">
      {/* Gold hairline accent */}
      <div className="h-[2px] bg-gold" />

      <div className="footer-inner px-6 py-10 md:px-12 md:py-10">
        <div className="footer-grid grid max-w-5xl gap-7 md:grid-cols-3 md:gap-8">
          {/* Left zone */}
          <div className="footer-brand">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png?v=2"
                alt=""
                aria-hidden="true"
                className="h-[88px] w-auto md:h-[98px]"
              />
            </Link>
            <p className="mt-2 font-display text-[14px] font-normal tracking-[0.06em] text-white">
              Gilleland Cleaning Services, LLC
            </p>
            <p className="footer-tagline mt-1 font-body text-[12px] text-white/60 leading-relaxed">
              Serving Jackson, Hall, and surrounding areas
            </p>
          </div>

          {/* Middle zone — quick links */}
          <div className="footer-links">
            <span className="footer-label eyebrow mb-3 !text-white/50">Quick Links</span>
            <div className="footer-link-list mt-3 flex flex-col gap-2">
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
            <span className="footer-label eyebrow mb-3 !text-white/50">Get In Touch</span>
            <div className="footer-contact-list mt-3 flex flex-col gap-1.5">
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
              <a
                href="https://www.facebook.com/sgilleland03/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom mt-8 border-t border-white/10 pt-4">
          <p className="font-body text-[12px] text-white/50">
            © {year} Gilleland Cleaning Services, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
