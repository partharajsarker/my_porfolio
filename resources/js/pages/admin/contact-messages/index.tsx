import { AdminNav } from '@/components/admin-nav';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { FaEnvelope, FaEnvelopeOpen, FaEye, FaTrash } from 'react-icons/fa';

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    is_read: boolean;
    read_at?: string;
    created_at: string;
}

interface AdminContactMessagesProps {
    messages: ContactMessage[];
}

export default function AdminContactMessages({ messages }: AdminContactMessagesProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(route('admin.contact-messages.destroy', id));
        }
    };

    const unreadCount = messages.filter((msg) => !msg.is_read).length;

    return (
        <AppLayout>
            <Head title="Contact Messages" />

            <AdminNav />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
                        <p className="mt-2 text-gray-600">
                            {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Contact Info</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Subject</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Message Preview
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Received</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {messages.map((message) => (
                                    <tr key={message.id} className={`hover:bg-gray-50 ${!message.is_read ? 'bg-blue-50' : ''}`}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {message.is_read ? (
                                                    <FaEnvelopeOpen className="h-4 w-4 text-gray-400" />
                                                ) : (
                                                    <FaEnvelope className="h-4 w-4 text-blue-600" />
                                                )}
                                                <span
                                                    className={`ml-2 rounded-full px-2 py-1 text-xs font-medium ${
                                                        message.is_read ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'
                                                    }`}
                                                >
                                                    {message.is_read ? 'Read' : 'Unread'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{message.name}</div>
                                                <div className="text-sm text-gray-500">{message.email}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="max-w-xs truncate text-sm text-gray-900">{message.subject}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="line-clamp-2 max-w-xs text-sm text-gray-500">{message.message}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                            {new Date(message.created_at).toLocaleDateString()}
                                            <br />
                                            <span className="text-xs">{new Date(message.created_at).toLocaleTimeString()}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={route('admin.contact-messages.show', message.id)}
                                                    className="text-blue-600 hover:text-blue-900"
                                                >
                                                    <FaEye className="h-4 w-4" />
                                                </Link>
                                                <button onClick={() => handleDelete(message.id)} className="text-red-600 hover:text-red-900">
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

                {messages.length === 0 && (
                    <div className="py-12 text-center">
                        <div className="mb-4 text-gray-500">No contact messages yet</div>
                        <p className="text-gray-400">Messages from your contact form will appear here</p>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
