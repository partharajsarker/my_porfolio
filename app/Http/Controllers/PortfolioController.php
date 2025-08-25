<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $projects = Project::ordered()->get();
        
        return Inertia::render('portfolio/index', [
            'projects' => $projects,
        ]);
    }

    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Store in database
        $contactMessage = ContactMessage::create($validated);

        // Send email notification (optional: configure MAIL_ envs)
        try {
            $recipient = config('mail.from.address');
            if ($recipient) {
                Mail::to($recipient)->send(new ContactFormMail($contactMessage));
            }
        } catch (\Throwable $e) {
            // Silently ignore mail failures for now; UX still shows success
        }

        return back()->with('success', 'Thank you for your message! I\'ll get back to you soon.');
    }
}
