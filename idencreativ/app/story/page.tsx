export const metadata = { title: "Our Story" };

export default function StoryPage() {
  return (
    <main className="section">
      <div className="container space-y-8">
        <h1 className="text-3xl font-bold text-deepblue">Our Story</h1>
        <p className="text-deepblue/80 max-w-2xl">idenCreativ. began with a simple belief: great brands are built through clarity and creativity. Today, we partner with startups, SMEs, and schools to craft identities that drive growth.</p>
        <section>
          <h2 className="text-xl font-semibold text-deepblue">Mission</h2>
          <p className="text-deepblue/80">Empower brands with strategy-driven design and technology.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-deepblue">Vision</h2>
          <p className="text-deepblue/80">Be the most trusted creative partner for emerging businesses.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-deepblue mb-3">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Creativity', 'Integrity', 'Growth', 'Collaboration', 'Excellence', 'Impact'].map((v) => (
              <div key={v} className="rounded-lg border border-black/5 bg-white p-5">
                <div className="font-semibold text-deepblue">{v}</div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-deepblue mb-3">Timeline</h2>
          <div className="rounded-lg border border-black/5 bg-white p-5">Animated timeline coming soon.</div>
        </section>
      </div>
    </main>
  );
}