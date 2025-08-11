import Link from "next/link";

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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.title} className="group rounded-lg border border-black/5 bg-white p-5 hover:shadow-sm transition-shadow">
            <div className="h-28 rounded-md bg-muted/60 mb-3" />
            <div className="font-semibold text-deepblue group-hover:text-primary transition-colors">{item.title}</div>
            <div className="text-xs text-deepblue/60">{item.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}