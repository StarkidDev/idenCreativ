"use client";
import { useState } from "react";

const categories = ["All", "Branding", "Web", "Content", "Printing"] as const;

export default function PortfolioPage() {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const items = Array.from({ length: 8 }).map((_, i) => ({ id: i, title: `Project ${i + 1}`, category: categories[(i % (categories.length - 1)) + 1] }));

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-bold text-deepblue mb-6">Portfolio</h1>
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full border ${active === c ? 'bg-primary text-deepblue border-primary' : 'border-black/10'}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-lg border border-black/5 bg-white p-5 cursor-pointer">
              <div className="h-28 rounded-md bg-muted/60 mb-3" />
              <div className="font-semibold text-deepblue">{item.title}</div>
              <div className="text-xs text-deepblue/60">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}