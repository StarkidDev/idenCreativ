"use client";
import { useForm } from "react-hook-form";

type ContactData = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  topic?: string; // honeypot
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactData>();

  const onSubmit = async (data: ContactData) => {
    if (data.topic) return;
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) { reset(); alert("Thanks! We'll be in touch shortly."); } else { alert("Please try again."); }
  };

  return (
    <main className="section">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-deepblue mb-4">Start a Project</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-black/5 bg-white p-5 space-y-3">
            <input placeholder="Name" {...register("name", { required: true })} className="w-full h-11 px-3 rounded-md border border-black/10" />
            <input placeholder="Email" type="email" {...register("email", { required: true })} className="w-full h-11 px-3 rounded-md border border-black/10" />
            <input placeholder="Phone" {...register("phone")} className="w-full h-11 px-3 rounded-md border border-black/10" />
            <select {...register("service")} className="w-full h-11 px-3 rounded-md border border-black/10">
              <option value="">Service Needed</option>
              <option>Brand Identity</option>
              <option>Design</option>
              <option>Web & Digital</option>
              <option>Marketing</option>
              <option>Printing</option>
              <option>Tech Training</option>
            </select>
            <textarea placeholder="Message" {...register("message", { required: true })} className="w-full min-h-28 p-3 rounded-md border border-black/10" />
            <input type="text" {...register("topic")} className="hidden" aria-hidden="true" tabIndex={-1} />
            <button type="submit" disabled={isSubmitting} className="h-11 px-5 rounded-md bg-primary text-deepblue font-semibold">Send</button>
            <a href="https://wa.me/233000000000?text=Hi%20idenCreativ,%20I%20want%20to%20start%20a%20project" className="inline-flex items-center h-11 px-5 rounded-md border border-deepblue/20 hover:bg-deepblue/5">Or chat on WhatsApp</a>
          </form>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden border border-black/5">
            <iframe
              title="idenCreativ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-0.0!3d0.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sidenCreativ!5e0!3m2!1sen!2sgh!4v0000000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-deepblue/70 mt-3">Update the map embed with your actual office location.</p>
        </div>
      </div>
    </main>
  );
}