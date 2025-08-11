"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section bg-gradient-to-br from-amber/20 via-muted to-coral/10">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-deepblue"
          >
            More Than Just Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-deepblue/80"
          >
            Branding, design, digital marketing, printing, and tech training—tailored for startups and SMEs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-primary text-deepblue font-semibold">
              Start a Project
            </Link>
            <Link href="/portfolio" className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-deepblue/20 hover:bg-deepblue/5">
              View Portfolio
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="h-64 md:h-80 rounded-xl bg-white shadow-sm border border-black/5 flex items-center justify-center"
        >
          <div className="text-center p-6">
            <div className="text-sm uppercase tracking-widest text-deepblue/60">idenCreativ.</div>
            <div className="mt-2 font-semibold">Illustration Placeholder</div>
            <div className="text-sm text-deepblue/60">Replace with custom vector illustration</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}