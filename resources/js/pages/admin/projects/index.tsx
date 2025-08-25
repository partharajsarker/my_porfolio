yimport { AdminNav } from '@/components/admin-nav';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { FaEdit, FaExternalLinkAlt, FaGithub, FaPlus, FaTrash } from 'react-icons/fa';

interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    tech_stack: string[];
    github_url?: string;
    demo_url?: string;
    is_featured: boolean;
    sort_order: number;
    created_at: string;
}

interface AdminProjectsProps {
    projects: Project[];
}

export default function AdminProjects({ projects }: AdminProjectsProps) {
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(route('admin.projects.destroy', id));
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Projects" />

            <AdminNav />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-900">Manage Projects</h1>
                    <Link
                        href={route('admin.projects.create')}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                        <FaPlus className="h-4 w-4" />
                        Add New Project
                    </Link>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Project</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Tech Stack</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Created</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {project.image && (
                                                    <div className="mr-4 h-12 w-12 flex-shrink-0">
                                                        <img className="h-12 w-12 rounded-lg object-cover" src={project.image} alt={project.title} />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{project.title}</div>
                                                    <div className="line-clamp-2 max-w-xs text-sm text-gray-500">{project.description}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech_stack.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech_stack.length > 3 && (
                                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                                        +{project.tech_stack.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                {project.is_featured && (
                                                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                        Featured
                                                    </span>
                                                )}
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                                    Active
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                            {new Date(project.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                            <div className="flex items-center justify-end gap-2">
                                                {project.github_url && (
                                                    <a
                                                        href={project.github_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-600"
                                                    >
                                                        <FaGithub className="h-4 w-4" />
                                                    </a>
                                                )}
                                                {project.demo_url && (
                                                    <a
                                                        href={project.demo_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-600"
                                                    >
                                                        <FaExternalLinkAlt className="h-4 w-4" />
                                                    </a>
                                                )}
                                                <Link href={route('admin.projects.edit', project.id)} className="text-blue-600 hover:text-blue-900">
                                                    <FaEdit className="h-4 w-4" />
                                                </Link>
                                                <button onClick={() => handleDelete(project.id)} className="text-red-600 hover:text-red-900">
                                                    <FaTrash className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {projects.length === 0 && (
                    <div className="py-12 text-center">
                        <div className="mb-4 text-gray-500">No projects found</div>
                        <Link
                            href={route('admin.projects.create')}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                        >
                            Create your first project
                        </Link>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
