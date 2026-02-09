import headshot from '../assets/IMG_2924.jpeg'

const About = () => {

    return (
        <>
            <div className="grid gap-10 md:grid-cols-[220px_1fr]">
                <div className="flex flex-col items-start">
                    <img
                        src={headshot}
                        alt="Everett headshot"
                        className="h-40 w-40 rounded-full object-cover"
                    />
                    <div className="mt-4 w-full rounded-lg border border-black/10 p-4 text-sm">
                        <div className="font-semibold">Quick Facts</div>
                        <div className="mt-2">Based in Syracuse/ Baltimore</div>
                        <div>Loyola University Maryland</div>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">About</h1>
                    <p className="mt-3 text-base leading-relaxed">
                        I am currently located in Syracuse and looking for a software engineering position.
                        I studied at Loyola University Maryland and enjoy building websites across the stack,
                        as well as working on projects in object-oriented languages.
                    </p>

                    <h2 className="mt-8 text-lg font-semibold">What I Enjoy</h2>
                    <p className="mt-2 text-base leading-relaxed">
                        Outside of coding, I enjoy making, listening to, and discovering new music.
                        I also love playing and watching basketball, going to the gym, and I have been improving my skills in the kitchen
                        by cooking new recipes.
                    </p>

                    <h2 className="mt-8 text-lg font-semibold">Skills and Tools</h2>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        <span className="rounded-full border border-black/10 px-3 py-1">JavaScript</span>
                        <span className="rounded-full border border-black/10 px-3 py-1">React</span>
                        <span className="rounded-full border border-black/10 px-3 py-1">Node</span>
                        <span className="rounded-full border border-black/10 px-3 py-1">SQL</span>
                        <span className="rounded-full border border-black/10 px-3 py-1">APIs</span>
                        <span className="rounded-full border border-black/10 px-3 py-1">Python</span>
                    </div>

                    <h2 className="mt-8 text-lg font-semibold">Timeline</h2>
                    <div className="mt-3 grid gap-3 text-sm">
                        <div className="rounded-lg border border-black/10 p-3">
                            <div className="font-semibold">Education</div>
                            <div className="text-black/70">Loyola University Maryland</div>
                        </div>
                        <div className="rounded-lg border border-black/10 p-3">
                            <div className="font-semibold">Recent Focus</div>
                            <div className="text-black/70">Building web apps and improving UX</div>
                        </div>
                        <div className="rounded-lg border border-black/10 p-3">
                            <div className="font-semibold">Now</div>
                            <div className="text-black/70">Open to software engineering roles</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About
