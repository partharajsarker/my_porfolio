<?php

namespace App\Mail;

use App\Models\ContactMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public ContactMessage $contactMessage;

    public function __construct(ContactMessage $contactMessage)
    {
        $this->contactMessage = $contactMessage;
    }

    public function build(): self
    {
        return $this
            ->subject('New Contact Message: ' . $this->contactMessage->subject)
            ->view('emails.contact-form')
            ->with([
                'messageModel' => $this->contactMessage,
            ]);
    }
}


