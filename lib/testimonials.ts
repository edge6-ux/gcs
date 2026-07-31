export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We had to have a deep clean on our home after some construction and they spent hours here working on our home and it was absolutely wonderful. They did inside cabinets, cabinets, drapes, windows, and furniture it was a wonderful job. They are also cleaning our home on a regular basis and we are 100% satisfied. Godly, wonderful and professional!! I give them 15 out of 10!! Would highly recommend!",
    author: "Amy",
  },
  {
    quote:
      "They show up on time, every time, and their attention to detail is second to none.",
    author: "Sarah",
  },
  {
    quote:
      "Booking was effortless and the team made my move-out clean completely stress-free.",
    author: "Rachel",
  },
  {
    quote:
      "Consistent, trustworthy, and thorough — exactly what I was looking for in a cleaning service.",
    author: "Michael",
  },
  {
    quote:
      "Our office has never looked better. The team is professional and easy to schedule with.",
    author: "David",
  },
  {
    quote:
      "I love that I see the same faces every visit. It feels like they actually care about my home.",
    author: "Jennifer",
  },
  {
    quote:
      "From the first call to the final walkthrough, everything felt easy and transparent.",
    author: "Karen",
  },
  {
    quote: "Reliable, detail-oriented, and always leaves the place spotless.",
    author: "Laura",
  },
];

export const featuredTestimonials = testimonials.slice(0, 4);
