import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deepblue text-white mt-16">
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-2xl">idenCreativ.</div>
          <p className="text-sm opacity-80 mt-2">More Than Just Design.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Get in touch</div>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:hello@idencreativ.com" className="underline">hello@idencreativ.com</a></li>
            <li>WhatsApp: <a className="underline" href="https://wa.me/233000000000?text=Hi%20idenCreativ,%20I%20want%20to%20start%20a%20project">Chat now</a></li>
            <li>Social: <a className="underline" href="#">Instagram</a> · <a className="underline" href="#">LinkedIn</a> · <a className="underline" href="#">X</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-xs opacity-80">© {new Date().getFullYear()} idenCreativ. All rights reserved.</div>
      </div>
    </footer>
  );
}