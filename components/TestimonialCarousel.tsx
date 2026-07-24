"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/testimonials";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  intervalMs?: number;
};

export default function TestimonialCarousel({
  testimonials,
  intervalMs = 6000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [testimonials.length, intervalMs, activeIndex]);

  const active = testimonials[activeIndex];

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <div className="mb-10 h-[1px] w-14 bg-gold" aria-hidden="true" />
      <blockquote className="font-display text-[20px] font-normal italic leading-relaxed text-ink md:text-[22px]">
        &ldquo;{active.quote}&rdquo;
      </blockquote>
      <cite className="mt-6 font-body text-[13px] not-italic text-taupe">
        — {active.author}
      </cite>

      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={`${testimonial.author}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-gold" : "bg-line hover:bg-gold-tint"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
