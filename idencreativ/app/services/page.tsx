export const metadata = { title: "Services" };

const services = [
  { title: "Brand Identity", details: "Logo design, brand guidelines, naming, and messaging." },
  { title: "Design Studio", details: "Web UI, social templates, packaging, and presentations." },
  { title: "Web & Digital", details: "Websites, landing pages, and optimization for conversions." },
  { title: "Marketing", details: "Content strategy, social media, and growth campaigns." },
  { title: "Printing", details: "Stationery, merch, and large-format print production." },
  { title: "Tech Training", details: "AI, design tools, and digital skills for teams and schools." },
];

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-bold text-deepblue mb-6">Our Services</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-black/5 bg-white p-5">
              <div className="font-semibold text-deepblue">{s.title}</div>
              <div className="text-sm text-deepblue/70 mt-2">{s.details}</div>
              <a href="#" className="text-sm mt-3 inline-block text-deepblue underline underline-offset-4">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}