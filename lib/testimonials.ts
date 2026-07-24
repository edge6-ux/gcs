export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My home has never been cleaner and fresher. I would recommend them to my friends and family in a heartbeat.",
    author: "A longtime client",
  },
  {
    quote:
      "They show up on time, every time, and their attention to detail is second to none.",
    author: "A recent client",
  },
  {
    quote:
      "Booking was effortless and the team made my move-out clean completely stress-free.",
    author: "A moving client",
  },
  {
    quote:
      "Consistent, trustworthy, and thorough — exactly what I was looking for in a cleaning service.",
    author: "A satisfied homeowner",
  },
  {
    quote:
      "Our office has never looked better. The team is professional and easy to schedule with.",
    author: "A commercial client",
  },
  {
    quote:
      "I love that I see the same faces every visit. It feels like they actually care about my home.",
    author: "A returning client",
  },
  {
    quote:
      "From the first call to the final walkthrough, everything felt easy and transparent.",
    author: "A new client",
  },
  {
    quote: "Reliable, detail-oriented, and always leaves the place spotless.",
    author: "A longtime client",
  },
];

export const featuredTestimonials = testimonials.slice(0, 4);
