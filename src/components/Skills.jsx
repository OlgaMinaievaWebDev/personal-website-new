const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Data & APIs",
    skills: ["REST APIs", "Authentication", "Supabase"],
  },
  {
    title: "Engineering",
    skills: [
      "Git & GitHub",
      "Testing",
      "Accessibility",
      "Responsive Design",
      "Code Reviews & PRs",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-[72px] bg-white px-8 py-12 text-brand-charcoal md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="skills-heading" className="text-4xl font-semibold">
          Skills
        </h2>
        <div className="mt-2 h-1 w-[60px] bg-brand-orange"></div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          The core technologies and practices behind my recent work.
        </p>

        <ul className="mt-6 divide-y divide-orange-100 border-y border-orange-100 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              className="py-5 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="text-lg font-bold">{group.title}</h3>
              <ul
                className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700"
                aria-label={`${group.title} skills`}
              >
                {group.skills.map((skill) => (
                  <li key={skill} className="font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
