const experiences = [
    {
        period: "May 2024 – Nov 2025",
        title: "Website Developer",
        company: "CQ Partners",
        bullets: [
            "Designed and maintained customer-branded websites and internal web apps.",
            "Improved performance through efficient coding and troubleshooting.",
            "Built solutions with PHP, HTML5, CSS, JavaScript/jQuery, and MySQL.",
            "Delivered creative, timely solutions aligned to client needs and SEO best practices.",
        ],
    },
    {
        period: "Feb 2023 – May 2024",
        title: "Data Analyst",
        company: "Nex Level Networks",
        bullets: [
            "Built a verification system used by hundreds of students with PHP, Python, and SQL.",
            "Managed LAMP and WordPress sites, improving SEO and monthly traffic by 20–30%.",
            "Collaborated with clients to plan and ship custom websites.",
            "Provisioned Linux servers and provided remote IT troubleshooting.",
        ],
    },
    {
        period: "Aug 2022 – Nov 2022",
        title: "Software Engineer Intern",
        company: "M.S. Hall + Associates",
        bullets: [
            "Refactored legacy classes to improve object-oriented design.",
            "Built PHPUnit test coverage for new hospital projects.",
            "Wrote SQL queries and PHP scripts to standardize and clean data.",
        ],
    },
];

const Experience = () => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold">Experience</h1>

            <div className="mt-8 flex flex-col gap-6">
                {experiences.map((job, i) => (
                    <div key={i} className="rounded-lg border border-black/10 p-5">
                        <p className="text-xs text-black/50 uppercase tracking-wide">{job.period}</p>
                        <h2 className="mt-1 text-base font-semibold">{job.title}</h2>
                        <p className="text-sm text-black/60">{job.company}</p>
                        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-black/80">
                            {job.bullets.map((b, j) => (
                                <li key={j}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
