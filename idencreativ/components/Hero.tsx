"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandIllustration from "@/components/BrandIllustration";

export default function Hero() {
  return (
    <section className="section bg-subtle">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-deepblue"
          >
            More Than Just Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-foreground/80"
          >
            Branding, design, digital marketing, printing, and tech training—tailored for startups and SMEs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-primary text-deepblue font-semibold shadow-sm hover:shadow transition-shadow">
              Start a Project
            </Link>
            <Link href="/portfolio" className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-border hover:bg-subtle">
              View Portfolio
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl card p-0 overflow-hidden"
        >
          <BrandIllustration />
        </motion.div>
      </div>
    </section>
  );
}