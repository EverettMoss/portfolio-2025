const Projects = () => {
    const items = [
        {
            title: "Song Credits Database",
            link: "https://github.com/EverettMoss",
            description: "A searchable database for song credits and collaborators.",
            tech: ["React", "MongoDB", "Node", "Express", "TailwindCSS"]
        },
        {
            title: "Apple Music Rewind",
            link: "https://github.com/EverettMoss",
            description: "A personal listening recap with charts and highlights.",
            tech: ["React", "moment", "papaparse", "chart.js", "TailwindCSS"]
        },
        {
            title: "SoundCloud Stats",
            link: "https://github.com/EverettMoss",
            description: "Sort any user's tracks by plays, comments, reposts, and likes.",
            tech: ["React", "Node", "Express", "TailwindCSS"]
        },
        {
            title: "Baby Name API",
            link: "https://github.com/EverettMoss",
            description: "A simple API for searching and filtering baby names.",
            tech: ["Node", "Express"]
        },
        {
            title: "Twitch Widget",
            link: "https://github.com/EverettMoss",
            description: "A lightweight widget for live stream status and stats.",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Music Blog",
            link: "https://github.com/EverettMoss",
            description: "A blog for writing about music, artists, and releases.",
            tech: ["Next.js", "TailwindCSS"]
        },
        {
            title: "Reaction Game",
            link: "https://github.com/EverettMoss",
            description: "A multiplayer reaction-time game with real-time scoring.",
            tech: ["Next.js", "WebSockets"]
        },
        {
            title: "Portfolio Website",
            link: "https://github.com/EverettMoss",
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
                        target="_blank"
                        rel="noopener noreferrer"
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
