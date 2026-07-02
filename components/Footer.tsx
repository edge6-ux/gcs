import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer shrink-0 bg-ink text-cream">
      {/* Gold hairline accent */}
      <div className="h-[2px] bg-gold" />

      <div className="footer-inner px-6 py-14 md:px-12">
        <div className="footer-grid grid max-w-5xl gap-10 md:grid-cols-3">
          {/* Left zone */}
          <div className="footer-brand">
            <p className="font-display text-cream text-[15px] tracking-[0.06em] font-normal mb-2">
              Gilleland Cleaning Services, LLC
            </p>
            <p className="footer-tagline font-body text-[13px] text-cream/50 leading-relaxed">
              Proudly serving the local community
            </p>
          </div>

          {/* Middle zone — quick links */}
          <div className="footer-links">
            <span className="footer-label eyebrow text-cream/40 mb-5">Quick Links</span>
            <div className="footer-link-list flex flex-col gap-3 mt-5">
              <Link
                href="/residential"
                className="font-body text-[13px] text-cream/60 hover:text-cream transition-colors"
              >
                Residential
              </Link>
              <Link
                href="/commercial"
                className="font-body text-[13px] text-cream/60 hover:text-cream transition-colors"
              >
                Commercial
              </Link>
              <Link
                href="/contact"
                className="font-body text-[13px] text-cream/60 hover:text-cream transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right zone — contact */}
          <div className="footer-contact">
            <span className="footer-label eyebrow text-cream/40 mb-5">Get In Touch</span>
            <div className="footer-contact-list flex flex-col gap-2 mt-5">
              <a
                href="tel:7705190618"
                className="font-body text-[13px] text-cream/60 hover:text-cream transition-colors"
              >
                (770) 519-0618
              </a>
              <a
                href="mailto:contact@sgcleans.com"
                className="font-body text-[13px] text-cream/60 hover:text-cream transition-colors"
              >
                contact@sgcleans.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom mt-12 border-t border-cream/10 pt-6">
          <p className="font-body text-[12px] text-cream/30">
            © {year} Gilleland Cleaning Services, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
