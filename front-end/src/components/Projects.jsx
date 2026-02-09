const Projects = () => {
    const items = [
        {
            title: "Song Credits Database",
            link: "#",
            description: "A searchable database for song credits and collaborators.",
            tech: ["React", "MongoDB", "Node", "Express", "TailwindCSS"]
        },
        {
            title: "Apple Music Rewind",
            link: "#",
            description: "A personal listening recap with charts and highlights.",
            tech: ["React", "moment", "papaparse", "chart.js", "TailwindCSS"]
        },
        {
            title: "SoundCloud Stats",
            link: "#",
            description: "Sort any user's tracks by plays, comments, reposts, and likes.",
            tech: ["React", "Node", "Express", "TailwindCSS"]
        },
        {
            title: "Baby Name API",
            link: "#",
            description: "A simple API for searching and filtering baby names.",
            tech: ["Node", "Express"]
        },
        {
            title: "Twitch Widget",
            link: "#",
            description: "A lightweight widget for live stream status and stats.",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Portfolio Website",
            link: "#",
            description: "A focused portfolio showcasing my recent work.",
            tech: ["React", "TailwindCSS"]
        }
    ];



    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Projects</h1>
                <p className="mt-2 text-base text-black/70">
                    A selection of projects that highlight my interests across web apps, data, and user experience.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="rounded-lg border border-black/10 p-4 h-full flex flex-col hover:shadow-sm transition-shadow"
                    >
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                            {item.title}
                        </h5>
                        <p className="mt-2 text-sm text-gray-700">
                            {item.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {item.tech.map((tag, i) => (
                                <span key={i} className="rounded-full border border-black/10 px-2.5 py-1 text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>


        </>

    );
};

export default Projects
