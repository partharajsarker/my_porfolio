<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #111827; }
        .container { max-width: 640px; margin: 0 auto; padding: 24px; }
        .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; }
        .muted { color: #6b7280; }
        .badge { display: inline-block; padding: 2px 8px; background: #eff6ff; color: #1d4ed8; border-radius: 9999px; font-size: 12px; }
    </style>
    </head>
<body>
    <div class="container">
        <h2>New Contact Message</h2>
        <div class="card">
            <p><strong>Name:</strong> {{ $messageModel->name }}</p>
            <p><strong>Email:</strong> {{ $messageModel->email }}</p>
            <p>
                <strong>Subject:</strong>
                <span class="badge">{{ $messageModel->subject }}</span>
            </p>
            <hr>
            <p class="muted">Message:</p>
            <p>{{ $messageModel->message }}</p>
            <hr>
            <p class="muted">Received at: {{ $messageModel->created_at->format('Y-m-d H:i:s') }}</p>
        </div>
    </div>
</body>
</html>


