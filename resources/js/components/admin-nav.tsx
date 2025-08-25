import { Link, usePage } from '@inertiajs/react';
import { FaFolder, FaEnvelope, FaHome, FaCog } from 'react-icons/fa';
import { type SharedData } from '@/types';

export function AdminNav() {
    const { url } = usePage<SharedData>();
    
    const navItems = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: FaHome,
            active: url === '/dashboard',
        },
        {
            title: 'Projects',
            href: '/admin/projects',
            icon: FaFolder,
            active: url.startsWith('/admin/projects'),
        },
        {
            title: 'Messages',
            href: '/admin/contact-messages',
            icon: FaEnvelope,
            active: url.startsWith('/admin/contact-messages'),
        },
        {
            title: 'Settings',
            href: '/settings',
            icon: FaCog,
            active: url.startsWith('/settings'),
        },
    ];

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                item.active
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
