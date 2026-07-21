"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav sticky top-0 z-50 shrink-0 border-b border-line bg-cream/95 px-6 py-5 backdrop-blur-sm md:px-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="group flex min-w-0 max-w-[calc(100%-2.5rem)] flex-wrap items-baseline gap-x-2 gap-y-0.5 hover:text-gold transition-colors"
        >
          <span className="font-display text-[15px] font-medium tracking-[0.12em] text-ink group-hover:text-gold">
            GILLELAND
          </span>
          <span className="font-body text-[13px] text-taupe group-hover:text-gold">
            Cleaning Services
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-body text-[13px] text-taupe hover:text-ink transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-body text-[13px] text-taupe hover:text-ink transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-body text-[13px] text-taupe hover:text-ink transition-colors"
          >
            Contact
          </Link>
          <a
            href="tel:7705190618"
            className="font-body text-[13px] text-ink underline decoration-transparent hover:decoration-gold transition-all"
          >
            (770) 519-0618
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink origin-center transition-transform duration-200 ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink origin-center transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 pt-6 pb-2 border-t border-line mt-4">
          <Link
            href="/"
            className="font-body text-[14px] text-taupe hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-body text-[14px] text-taupe hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-body text-[14px] text-taupe hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:7705190618"
            className="font-body text-[14px] text-ink"
          >
            (770) 519-0618
          </a>
        </nav>
      </div>
    </header>
  );
}
