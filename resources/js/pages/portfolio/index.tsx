import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import {
    FaBootstrap,
    FaChevronDown,
    FaCss3Alt,
    FaEnvelope,
    FaExternalLinkAlt,
    FaGithub,
    FaHtml5,
    FaLaravel,
    FaLinkedin,
    FaPhp,
    FaReact,
    FaTwitter,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

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

const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'PHP', icon: FaPhp, color: 'text-purple-600' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
];

export default function Portfolio({ projects }: PortfolioProps) {
    const [activeSection, setActiveSection] = useState('hero');
    const { props } = usePage();
    const flash = (props as any).flash as { success?: string; error?: string };
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            const t = setTimeout(() => setShowSuccess(false), 4000);
            return () => clearTimeout(t);
        }
    }, [flash?.success]);

    return (
        <>
            <Head title="Portfolio - Web Developer" />

            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="text-xl font-bold text-gray-900">Portfolio</div>
                        <div className="hidden space-x-8 md:flex">
                            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize transition-colors hover:text-blue-600 ${
                                        activeSection === section ? 'text-blue-600' : 'text-gray-600'
                                    }`}
                                >
                                    {section === 'hero' ? 'Home' : section}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Global Flash */}
            {showSuccess && flash?.success && (
                <div className="fixed top-20 left-1/2 z-[60] -translate-x-1/2">
                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-green-800 shadow">{flash.success}</div>
                </div>
            )}

            {/* Hero Section */}
            <section id="hero" className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
                        Hi, I'm <span className="text-blue-600">Partha Raj Sarker</span>
                    </h1>
                    <h2 className="mb-8 text-2xl text-gray-700 md:text-3xl">Web Developer</h2>
                    <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
                        I build clean, modern, and responsive web apps with React and Laravel.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                        >
                            Get In Touch
                        </button>
                    </div>
                    <div className="mt-12">
                        <button onClick={() => scrollToSection('about')} className="text-gray-500 transition-colors hover:text-gray-700">
                            <FaChevronDown className="mx-auto h-6 w-6 animate-bounce" />
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">About Me</h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            I'm a passionate web developer with expertise in both frontend and backend technologies. I love creating intuitive,
                            scalable web applications that solve real-world problems.
                        </p>
                    </div>
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">What I Do</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                                    Develop responsive web applications with modern frameworks
                                </li>
                                <li className="flex items-start">
                                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                                    Build robust backend APIs and database systems
                                </li>
                                <li className="flex items-start">
                                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                                    Create intuitive user interfaces with attention to detail
                                </li>
                                <li className="flex items-start">
                                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                                    Optimize performance and ensure code quality
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8">
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Experience</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-gray-900">Web Developer</h4>
                                    <p className="text-gray-600">Company Name • 2022 - Present</p>
                                </div>
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                                    <p className="text-gray-600">Previous Company • 2020 - 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Skills & Technologies</h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            I work with a variety of technologies to create modern web applications
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="group text-center">
                                <div className="transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <skill.icon className={`mx-auto mb-4 h-16 w-16 ${skill.color}`} />
                                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Projects</h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">Here are some of the projects I've worked on recently</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="transform rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {project.image && (
                                    <div className="h-48 overflow-hidden rounded-t-2xl bg-gray-200">
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{project.title}</h3>
                                    <p className="mb-4 line-clamp-3 text-gray-600">{project.description}</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tech_stack.map((tech) => (
                                            <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github_url && (
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800"
                                            >
                                                <FaGithub className="h-4 w-4" />
                                                Code
                                            </a>
                                        )}
                                        {project.demo_url && (
                                            <a
                                                href={project.demo_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                                            >
                                                <FaExternalLinkAlt className="h-4 w-4" />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gray-50 py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Get In Touch</h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
                        </p>
                    </div>
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="h-5 w-5 text-blue-600" />
                                    <span className="text-gray-600">your.email@example.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaLinkedin className="h-5 w-5 text-blue-600" />
                                    <span className="text-gray-600">linkedin.com/in/yourprofile</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaTwitter className="h-5 w-5 text-blue-600" />
                                    <span className="text-gray-600">@yourusername</span>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 text-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="mb-4 text-2xl font-bold">Your Name</h3>
                        <p className="mb-6 text-gray-400">Full-Stack Web Developer</p>
                        <div className="mb-6 flex justify-center space-x-6">
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
                        <p className="text-sm text-gray-500">© 2024 Your Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
