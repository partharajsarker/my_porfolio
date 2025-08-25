import { AdminNav } from '@/components/admin-nav';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';

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
}

interface EditProjectProps {
    project: Project;
}

export default function EditProject({ project }: EditProjectProps) {
    const [newTech, setNewTech] = useState('');

    const { data, setData, put, processing, errors } = useForm({
        title: project.title,
        description: project.description,
        image: project.image || '',
        tech_stack: project.tech_stack,
        github_url: project.github_url || '',
        demo_url: project.demo_url || '',
        is_featured: project.is_featured,
        sort_order: project.sort_order,
    });

    const addTech = () => {
        if (newTech.trim() && !data.tech_stack.includes(newTech.trim())) {
            setData('tech_stack', [...data.tech_stack, newTech.trim()]);
            setNewTech('');
        }
    };

    const removeTech = (tech: string) => {
        setData(
            'tech_stack',
            data.tech_stack.filter((t) => t !== tech),
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('admin.projects.update', project.id));
    };

    return (
        <AppLayout>
            <Head title={`Edit ${project.title}`} />

            <AdminNav />

            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href={route('admin.projects.index')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                        <FaArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>
                </div>

                <div className="rounded-lg bg-white p-6 shadow">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">Edit Project</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                                Project Title *
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                        </div>

                        <div>
                            <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
                                Description *
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                        </div>

                        <div>
                            <label htmlFor="image" className="mb-2 block text-sm font-medium text-gray-700">
                                Image URL
                            </label>
                            <input
                                type="url"
                                id="image"
                                value={data.image}
                                onChange={(e) => setData('image', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com/image.jpg"
                            />
                            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Tech Stack *</label>
                            <div className="mb-3 flex gap-2">
                                <input
                                    type="text"
                                    value={newTech}
                                    onChange={(e) => setNewTech(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    placeholder="Add technology (e.g., React, Laravel)"
                                />
                                <button
                                    type="button"
                                    onClick={addTech}
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                                >
                                    <FaPlus className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {data.tech_stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                                    >
                                        {tech}
                                        <button type="button" onClick={() => removeTech(tech)} className="text-blue-600 hover:text-blue-800">
                                            <FaTimes className="h-3 w-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            {errors.tech_stack && <p className="mt-1 text-sm text-red-600">{errors.tech_stack}</p>}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="github_url" className="mb-2 block text-sm font-medium text-gray-700">
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    id="github_url"
                                    value={data.github_url}
                                    onChange={(e) => setData('github_url', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://github.com/username/repo"
                                />
                                {errors.github_url && <p className="mt-1 text-sm text-red-600">{errors.github_url}</p>}
                            </div>

                            <div>
                                <label htmlFor="demo_url" className="mb-2 block text-sm font-medium text-gray-700">
                                    Demo URL
                                </label>
                                <input
                                    type="url"
                                    id="demo_url"
                                    value={data.demo_url}
                                    onChange={(e) => setData('demo_url', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://demo.example.com"
                                />
                                {errors.demo_url && <p className="mt-1 text-sm text-red-600">{errors.demo_url}</p>}
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="sort_order" className="mb-2 block text-sm font-medium text-gray-700">
                                    Sort Order
                                </label>
                                <input
                                    type="number"
                                    id="sort_order"
                                    value={data.sort_order}
                                    onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                                {errors.sort_order && <p className="mt-1 text-sm text-red-600">{errors.sort_order}</p>}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    checked={data.is_featured}
                                    onChange={(e) => setData('is_featured', e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
                                    Featured Project
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 border-t pt-6">
                            <Link
                                href={route('admin.projects.index')}
                                className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing ? 'Updating...' : 'Update Project'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
