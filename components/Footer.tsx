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
              <a
                href="https://www.instagram.com/shawng5347/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/shawn-gilleland-54aa493a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@gillelandgetsitclean"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M16.6 5.82c-.86-.6-1.5-1.51-1.72-2.53-.05-.23-.08-.47-.09-.71h-3.45v13.5c0 1.65-1.34 3-3 3-.55 0-1.06-.15-1.5-.4a2.99 2.99 0 0 1-1.5-2.6c0-1.66 1.34-3 3-3 .3 0 .58.05.85.13v-3.5a6.5 6.5 0 0 0-.85-.06 6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5 6.5 6.5 0 0 0 6.5-6.5V9.4a8.16 8.16 0 0 0 4.76 1.52V7.47a4.85 4.85 0 0 1-2.99-1.65z" />
                </svg>
                TikTok
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
