const valueProps = [
  { title: "Hands-on labs", description: "Practice with real tools and scenarios." },
  { title: "Career guidance", description: "Role-by-role roadmaps and job-search prep." },
  { title: "Current threats", description: "Learn the techniques attackers use today." },
  { title: "Cert prep", description: "Structured paths to industry certifications." },
];

// A plain definition strip, not an icon-card grid.
export function ValuePropsSection() {
  return (
    <section aria-label="What the training covers" className="!py-10 bg-card">
      <dl className="container grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((p) => (
          <div key={p.title}>
            <dt className="font-display text-lg font-semibold">{p.title}</dt>
            <dd className="mt-1 text-muted-foreground">{p.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
