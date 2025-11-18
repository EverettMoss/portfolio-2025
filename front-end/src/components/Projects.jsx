import { Card } from "flowbite-react";


const Projects = () => {
    const items = [
        {
            type: "card",
            title: "Song Credits Database",
            link: "#",
            lines: [
                "Languages used: React, MongoDB, Node, Express",
                "Styling: TailwindCSS"
            ]
        },
        {
            type: "card",
            title: "Apple Music Rewind",
            link: "#",
            lines: [
                "Languages used: React",
                "Libraries used: moment, papaparse, chart.js",
                "Styling: TailwindCSS"
            ]
        },
        {
            type: "card",
            title: "SoundCloud Stats",
            link: "#",
            lines: [
                "Languages used: React, Node, Express",
                "Styling: TailwindCSS"
            ]
        },
        {
            type: "card",
            title: "Baby Name API",
            link: "#",
            lines: [
                "Languages used: Node & Express"
            ]
        },
        {
            type: "card",
            title: "Twitch Widget",
            link: "#",
            lines: [
                "Languages used: HTML, CSS, JS"
            ]
        },
        {
            type: "card",
            title: "Portfolio Website",
            link: "#",
            lines: [
                "Languages used: React",
                "Styling: TailwindCSS"
            ]
        }
    ];



    return (
        <>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 items-stretch">
                {items.map((item, index) => (
                    <div key={index}>

                        {/* Number cell */}
                        {item.type === "number" && item.label}

                        {/* Card cell */}
                        {item.type === "card" && (
                            <Card href={item.link} className="max-w-sm bg-white dark:bg-gray-800 p-4 rounded-xl h-full flex flex-col">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h5>
                                {item.lines.map((line, i) => (
                                    <p key={i} className="font-normal text-gray-700 dark:text-gray-400">
                                        {line}
                                    </p>
                                ))}
                            </Card>
                        )}

                    </div>
                ))}
            </div>


        </>

    );
};

export default Projects