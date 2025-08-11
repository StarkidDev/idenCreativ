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
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(t);
  }, []);
  const item = testimonials[index];
  return (
    <div className="card p-8 text-center transition">
      <div key={index} className="animate-fade">
        <div className="text-xl md:text-2xl font-semibold text-deepblue">“{item.quote}”</div>
        <div className="mt-2 text-sm text-foreground/70">— {item.author}</div>
      </div>
      <style jsx>{`
        .animate-fade { animation: fade 400ms ease; }
        @keyframes fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}