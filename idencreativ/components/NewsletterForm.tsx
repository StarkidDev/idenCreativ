"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  company: z.string().optional(),
  website: z.string().optional(),
  // honeypot
  topic: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data.topic) return; // bot trap
    const res = await fetch("/api/newsletter", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) {
      reset();
      alert("Thanks! You're subscribed.");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-black/5 bg-white p-5">
      <h3 className="text-lg font-semibold text-deepblue">Join our newsletter</h3>
      <p className="text-sm text-deepblue/70 mb-4">Insights on branding, design, and growth—no spam.</p>
      <div className="grid sm:grid-cols-[1fr_auto] gap-3">
        <div>
          <input type="email" placeholder="Your email" {...register("email")} className="w-full h-11 px-3 rounded-md border border-black/10" />
          {errors.email && <div className="text-xs text-red-600 mt-1">A valid email is required</div>}
        </div>
        <button type="submit" disabled={isSubmitting} className="h-11 px-5 rounded-md bg-primary text-deepblue font-semibold">Subscribe</button>
      </div>
      <input type="text" {...register("topic")} className="hidden" aria-hidden="true" tabIndex={-1} />
    </form>
  );
}