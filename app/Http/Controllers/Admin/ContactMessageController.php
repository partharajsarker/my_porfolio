<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactMessageController extends Controller
{
    public function index(): Response
    {
        $messages = ContactMessage::latest()->get();
        
        return Inertia::render('admin/contact-messages/index', [
            'messages' => $messages,
        ]);
    }

    public function show(ContactMessage $message): Response
    {
        // Mark as read when viewed
        if (!$message->is_read) {
            $message->markAsRead();
        }
        
        return Inertia::render('admin/contact-messages/show', [
            'message' => $message,
        ]);
    }

    public function destroy(ContactMessage $message)
    {
        $message->delete();

        return redirect()->route('admin.contact-messages.index')->with('success', 'Message deleted successfully!');
    }
}
