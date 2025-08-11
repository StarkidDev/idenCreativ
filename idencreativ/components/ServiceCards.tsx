import { PenTool, Palette, Globe, Megaphone, Printer, GraduationCap } from "lucide-react";

const services = [
  { icon: PenTool, title: "Brand Identity", desc: "Logos, guidelines, and brand systems that speak clearly." },
  { icon: Palette, title: "Design Studio", desc: "Web, social, and print design with modern aesthetics." },
  { icon: Globe, title: "Web & Digital", desc: "Conversion-focused websites and landing pages." },
  { icon: Megaphone, title: "Marketing", desc: "Social campaigns and content that drives growth." },
  { icon: Printer, title: "Printing", desc: "Quality prints, merch, and large-format displays." },
  { icon: GraduationCap, title: "Tech Training", desc: "AI and digital skills training for schools and teams." },
];

export default function ServiceCards() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-deepblue mb-6">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-black/5 bg-white p-5 hover:shadow-sm transition-shadow">
            <Icon className="text-primary mb-3" />
            <div className="font-semibold text-deepblue">{title}</div>
            <div className="text-sm text-deepblue/70 mt-1">{desc}</div>
            <a href="/services" className="text-sm mt-3 inline-block text-deepblue underline underline-offset-4 hover:text-primary">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}