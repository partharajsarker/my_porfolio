import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { FaFolder, FaEnvelope, FaPlus, FaEye } from 'react-icons/fa';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage your portfolio projects and contact messages</p>
                </div>

                <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Projects Management */}
                    <div className="bg-white rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <FaFolder className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
                        <p className="text-gray-600 mb-4">Manage your portfolio projects</p>
                        <div className="flex gap-2">
                            <Link
                                href={route('admin.projects.index')}
                                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                            >
                                <FaEye className="w-4 h-4 inline mr-2" />
                                View All
                            </Link>
                            <Link
                                href={route('admin.projects.create')}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium"
                            >
                                <FaPlus className="w-4 h-4 inline mr-2" />
                                Add New
                            </Link>
                        </div>
                    </div>

                    {/* Contact Messages */}
                    <div className="bg-white rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <FaEnvelope className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Messages</h3>
                        <p className="text-gray-600 mb-4">View and manage contact form submissions</p>
                        <Link
                            href={route('admin.contact-messages.index')}
                            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium"
                        >
                            <FaEye className="w-4 h-4 inline mr-2" />
                            View Messages
                        </Link>
                    </div>

                    {/* Portfolio Preview */}
                    <div className="bg-white rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <FaEye className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio</h3>
                        <p className="text-gray-600 mb-4">View your public portfolio</p>
                        <Link
                            href={route('home')}
                            className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center text-sm font-medium"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>

                <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
