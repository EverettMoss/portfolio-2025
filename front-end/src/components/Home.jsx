import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="min-h-[70vh] flex items-center">
                <div className="w-full">
                    <div className="mb-10">
                        <h1 className="font-bold text-2xl md:text-4xl">Welcome, I'm Everett</h1>
                        <p className="mt-3 text-base md:text-lg max-w-2xl">
                            I build clean, usable web experiences and ship projects that focus on clarity and impact.
                            This is where I share what I'm working on and what I've learned along the way.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                to="/projects"
                                className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
                            >
                                View Projects
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center rounded-md border border-black px-4 py-2 text-sm font-semibold text-black"
                            >
                                About Me
                            </Link>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-lg font-semibold">Featured Projects</h2>
                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                            <div className="rounded-lg border border-black/10 p-4">
                                <h3 className="font-semibold">Portfolio 2025</h3>
                                <p className="mt-2 text-sm text-black/70">React, Vite, Tailwind</p>
                                <p className="mt-2 text-sm">
                                    A fast, focused portfolio with clear navigation and responsive layout.
                                </p>
                            </div>
                            <div className="rounded-lg border border-black/10 p-4">
                                <h3 className="font-semibold">SoundCloud Stats</h3>
                                <p className="mt-2 text-sm text-black/70">React, Node, Express</p>
                                <p className="mt-2 text-sm">
                                    Sort any user's SoundCloud tracks by play count, comments, reposts, and likes.
                                </p>
                            </div>
                            <div className="rounded-lg border border-black/10 p-4">
                                <h3 className="font-semibold">NBA Prediction Model</h3>
                                <p className="mt-2 text-sm text-black/70">Python, Pandas, Modeling</p>
                                <p className="mt-2 text-sm">
                                    A predictive model that forecasts game outcomes and season trends.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-lg font-semibold">Quick Stats</h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <span className="rounded-full border border-black/10 px-3 py-1 text-sm">3+ years building web apps</span>
                            <span className="rounded-full border border-black/10 px-3 py-1 text-sm">12+ shipped projects</span>
                            <span className="rounded-full border border-black/10 px-3 py-1 text-sm">React, Node, PostgreSQL</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">What I'm Into Now</h2>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Designing clean, fast front-ends with Tailwind and motion.</li>
                            <li>Exploring data visualization patterns for better storytelling.</li>
                            <li>Refining developer workflows to ship faster with fewer bugs.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home
