import { Head, Link } from '@inertiajs/react';
import { FaArrowLeft, FaEnvelope, FaEnvelopeOpen, FaTrash, FaReply } from 'react-icons/fa';
import AppLayout from '@/layouts/app-layout';
import { AdminNav } from '@/components/admin-nav';

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

interface ShowContactMessageProps {
    message: ContactMessage;
}

export default function ShowContactMessage({ message }: ShowContactMessageProps) {
    return (
        <AppLayout>
            <Head title={`Message from ${message.name}`} />
            
            <AdminNav />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <Link
                        href={route('admin.contact-messages.index')}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                        <FaArrowLeft className="w-4 h-4" />
                        Back to Messages
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {message.is_read ? (
                                    <FaEnvelopeOpen className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                                )}
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-900">
                                        {message.subject}
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        From: {message.name} ({message.email})
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    message.is_read 
                                        ? 'bg-gray-100 text-gray-800' 
                                        : 'bg-blue-100 text-blue-800'
                                }`}>
                                    {message.is_read ? 'Read' : 'Unread'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Message Details */}
                    <div className="px-6 py-4">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Name</h3>
                                <p className="text-gray-900">{message.name}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                                <p className="text-gray-900">
                                    <a 
                                        href={`mailto:${message.email}`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        {message.email}
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Subject</h3>
                                <p className="text-gray-900">{message.subject}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Received</h3>
                                <p className="text-gray-900">
                                    {new Date(message.created_at).toLocaleDateString()}
                                    <br />
                                    <span className="text-sm text-gray-500">
                                        {new Date(message.created_at).toLocaleTimeString()}
                                    </span>
                                </p>
                            </div>
                            {message.is_read && message.read_at && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Read At</h3>
                                    <p className="text-gray-900">
                                        {new Date(message.read_at).toLocaleDateString()}
                                        <br />
                                        <span className="text-sm text-gray-500">
                                            {new Date(message.read_at).toLocaleTimeString()}
                                        </span>
                                    </p>
                                </div>
                            )}
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Message</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-900 whitespace-pre-wrap">{message.message}</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <a
                                    href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <FaReply className="w-4 h-4" />
                                    Reply
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link
                                    href={route('admin.contact-messages.index')}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Back to List
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
