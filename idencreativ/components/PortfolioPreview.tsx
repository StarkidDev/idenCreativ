import Link from "next/link";
import Reveal from "@/components/Reveal";

const items = [
  { title: "Branding — Nova", category: "Branding" },
  { title: "Web — Apex", category: "Web" },
  { title: "Content — Lumina", category: "Content" },
  { title: "Print — Atlas", category: "Printing" },
];

export default function PortfolioPreview() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-bold text-deepblue">Featured Work</h2>
        <Link href="/portfolio" className="text-deepblue underline underline-offset-4 hover:text-primary">View all</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.05}>
            <div className="card p-5 hover:-translate-y-0.5 hover:shadow-sm transition transform">
              <div className="h-28 rounded-md bg-subtle mb-3" />
              <div className="font-semibold text-deepblue">{item.title}</div>
              <div className="text-xs text-foreground/60">{item.category}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}