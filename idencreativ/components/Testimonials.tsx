"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { quote: "idenCreativ elevated our brand beyond expectations.", author: "Ama, Startup Founder" },
  { quote: "Designs that convert. Team is fast and reliable.", author: "Kofi, Marketing Lead" },
  { quote: "Our rebrand boosted trust and sales.", author: "Nana, SME Owner" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);
  const item = testimonials[index];
  return (
    <div className="text-center">
      <div className="text-xl md:text-2xl font-semibold text-deepblue">“{item.quote}”</div>
      <div className="mt-2 text-sm text-deepblue/70">— {item.author}</div>
    </div>
  );
}