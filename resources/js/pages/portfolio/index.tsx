import { Head, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import { FaChevronDown, FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiJavascript, SiLaravel, SiReact, SiTailwindcss } from 'react-icons/si';

interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    tech_stack: string[];
    github_url?: string;
    demo_url?: string;
    is_featured: boolean;
}

interface PortfolioProps {
    projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {
    const { props } = usePage();
    const flash = (props as any).flash as { success?: string; error?: string };
    const [active, setActive] = useState<'hero' | 'about' | 'skills' | 'projects' | 'contact'>('hero');
    const [showFlash, setShowFlash] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShowFlash(true);
            const id = setTimeout(() => setShowFlash(false), 3500);
            return () => clearTimeout(id);
        }
    }, [flash?.success]);

    const skills = useMemo(
        () => [
            { name: 'React', icon: SiReact, color: 'text-sky-400' },
            { name: 'Laravel', icon: SiLaravel, color: 'text-rose-500' },
            { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-amber-400' },
        ],
        [],
    );

    const scrollTo = (id: typeof active) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(id);
        }
    };

    return (
        <>
            <Head title="Partha Raj Sarker" />

            {/* Top Nav */}
            <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="text-xl font-bold">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Partha Raj Sarker
                            </span>
                        </div>
                        <div className="hidden items-center gap-8 md:flex">
                            {(['hero', 'about', 'skills', 'projects', 'contact'] as const).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => scrollTo(s)}
                                    className={`relative text-sm capitalize transition-colors hover:text-blue-600 ${
                                        active === s ? 'text-blue-600' : 'text-gray-700'
                                    }`}
                                >
                                    {s === 'hero' ? 'Home' : s}
                                    {active === s && (
                                        <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-blue-600" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Flash */}
            {showFlash && flash?.success && (
                <div className="fixed top-20 left-1/2 z-[60] -translate-x-1/2">
                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-green-800 shadow">{flash.success}</div>
                </div>
            )}

            {/* Hero */}
            <section id="hero" className="relative flex min-h-screen items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-16">
                <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(40rem_20rem_at_120%_-10%,rgba(59,130,246,.15),transparent_60%),radial-gradient(32rem_16rem_at_-20%_10%,rgba(147,51,234,.12),transparent_60%)]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    Partha Raj Sarker
                                </span>
                            </h1>
                            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
                                Full‑stack developer crafting clean, performant web apps with React and Laravel.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <button
                                    onClick={() => scrollTo('projects')}
                                    className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                                >
                                    View My Work
                                </button>
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className="rounded-xl border border-indigo-300/60 px-7 py-3 font-semibold text-indigo-200 transition-colors hover:bg-indigo-300/10 hover:text-white"
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="relative h-96 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                                    <div className="h-full w-full rounded-2xl bg-gray-900 p-2">
                                        <img
                                            src="/images/partharajsarker.jpg"
                                            alt="Partha Raj Sarker"
                                            className="h-full w-full rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 h-8 w-8 animate-bounce rounded-full bg-yellow-400/80 blur-[1px]" />
                                <div className="absolute -bottom-4 -left-4 h-6 w-6 animate-pulse rounded-full bg-blue-400/80 blur-[1px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <button onClick={() => scrollTo('about')} className="text-gray-400 transition-colors hover:text-white">
                            <FaChevronDown className="mx-auto h-6 w-6 animate-bounce" />
                        </button>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">About Me</h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I’m not coding, you’ll find me
                            learning something new, tinkering with tooling, or helping others.
                        </p>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="space-y-4 text-gray-700">
                            <p>• Build responsive, accessible interfaces with modern React patterns.</p>
                            <p>• Design robust Laravel backends with clean validation and data models.</p>
                            <p>• Ship features quickly with strong attention to DX and performance.</p>
                            <p>• Collaborate with clarity, empathy, and ownership.</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8">
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Experience</h3>
                            <div className="space-y-5">
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-gray-900">Web Developer</h4>
                                    <p className="text-gray-600">2022 — Present</p>
                                </div>
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                                    <p className="text-gray-600">2020 — 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Skills & Technologies</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Tools I use to craft delightful, reliable applications.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {skills.map((s) => (
                            <div key={s.name} className="text-center">
                                <div className="rounded-2xl bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <s.icon className={`mx-auto mb-4 h-14 w-14 ${s.color}`} />
                                    <h3 className="text-base font-semibold text-gray-900">{s.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Projects</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">A selection of things I’ve built recently.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <article
                                key={p.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                {p.image && (
                                    <div className="h-48 w-full overflow-hidden bg-gray-100">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{p.title}</h3>
                                    <p className="mb-4 line-clamp-3 text-gray-600">{p.description}</p>
                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {p.tech_stack.map((t) => (
                                            <span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex gap-3">
                                        {p.github_url && (
                                            <a
                                                href={p.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800"
                                            >
                                                <FaGithub className="h-4 w-4" /> Code
                                            </a>
                                        )}
                                        {p.demo_url && (
                                            <a
                                                href={p.demo_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
                                            >
                                                <FaExternalLinkAlt className="h-4 w-4" /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-gray-50 py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Get In Touch</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Have a project in mind or just want to say hello? Let’s talk.</p>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">partharajsarker@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaLinkedin className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">linkedin.com/in/partharajsarker</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaTwitter className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">@partharajsarker</span>
                            </div>
                        </div>
                        <form method="POST" action="/contact" className="space-y-4">
                            <input
                                type="hidden"
                                name="_token"
                                value={(document.querySelector('meta[name=csrf-token]') as HTMLMetaElement)?.content || ''}
                            />
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 text-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="mb-4 text-2xl font-bold">
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Partha Raj Sarker
                            </span>
                        </h3>
                        <p className="mb-6 text-gray-400">Full‑Stack Web Developer</p>
                        <div className="mb-6 flex justify-center gap-6">
                            <a href="#" className="text-gray-400 transition-colors hover:text-white">
                                <FaGithub className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-white">
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-white">
                                <FaTwitter className="h-6 w-6" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-500">© 2024 Partha Raj Sarker. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
