export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container space-y-8">
        <h1 className="text-3xl font-bold text-deepblue">About Us</h1>
        <section>
          <h2 className="text-xl font-semibold text-deepblue">Founder</h2>
          <div className="mt-3 rounded-lg border border-black/5 bg-white p-5">
            <div className="font-semibold text-deepblue">Simon Yeboah Frimpong</div>
            <div className="text-sm text-deepblue/70">Creative Director & Strategist</div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-deepblue">Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-black/5 bg-white p-5">
                <div className="h-24 rounded-md bg-muted/60 mb-3" />
                <div className="font-semibold text-deepblue">Team Member {i + 1}</div>
                <div className="text-sm text-deepblue/70">Role / Specialty</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}