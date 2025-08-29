# 🚀 Partha Raj Sarker Portfolio

A modern, full-stack portfolio website built with Laravel 12, React 19, and Tailwind CSS. Features a beautiful public portfolio and an intuitive admin dashboard for content management.

## ✨ Features

- **Public Portfolio**: Showcase projects, skills, and contact information
- **Admin Dashboard**: Manage projects and contact messages
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dark/Light Theme**: Automatic theme switching with user preference
- **Contact Form**: Functional contact form with email notifications
- **Project Management**: Full CRUD operations for portfolio projects
- **Modern Tech Stack**: Built with the latest technologies

## 🛠️ Technology Stack

### Backend
- **Laravel 12** - PHP framework
- **SQLite** - Database (easily switchable to MySQL/PostgreSQL)
- **Inertia.js** - Server-side rendering bridge

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Build tool with SSR support

### Development Tools
- **ESLint + Prettier** - Code quality and formatting
- **Pest** - PHP testing framework
- **PHPUnit** - Unit testing

## 🚀 Quick Start

### Prerequisites
- PHP 8.2+
- Node.js 18+
- Composer
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   php artisan key:generate
   ```

4. **Database setup**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

5. **Start development servers**
   ```bash
   # Terminal 1: Laravel server
   php artisan serve
   
   # Terminal 2: Vite dev server
   npm run dev
   ```

6. **Visit the application**
   - Portfolio: http://localhost:8000
   - Admin Dashboard: http://localhost:8000/dashboard (after login)

## 🌐 Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Laravel configuration
   - Set environment variables in Vercel dashboard
   - Deploy!

### Vercel Environment Variables
Set these in your Vercel project settings:
- `APP_ENV`: production
- `APP_DEBUG`: false
- `APP_URL`: Your Vercel domain
- `DB_CONNECTION`: sqlite
- `DB_DATABASE`: /tmp/database.sqlite

## 📁 Project Structure

```
├── app/                    # Laravel application logic
│   ├── Http/Controllers/  # Controllers
│   ├── Models/            # Eloquent models
│   └── Mail/              # Email templates
├── resources/js/          # React frontend
│   ├── components/        # Reusable components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Inertia.js pages
│   └── types/             # TypeScript definitions
├── database/              # Database files
│   ├── migrations/        # Database schema
│   └── seeders/           # Sample data
├── routes/                # Application routes
└── public/                # Public assets
```

## 🎨 Customization

### Adding New Projects
1. Access the admin dashboard at `/dashboard`
2. Navigate to Projects → Add New Project
3. Fill in project details, tech stack, and upload images
4. Set featured status and sort order

### Modifying the Portfolio
- Edit `resources/js/pages/portfolio/index.tsx` for layout changes
- Update `resources/css/app.css` for styling modifications
- Modify Laravel controllers for backend logic changes

### Theme Customization
- Colors are defined in `resources/css/app.css`
- Dark/light mode variables are in the `:root` and `.dark` selectors
- Component styling uses Tailwind CSS classes

## 🧪 Testing

```bash
# Run PHP tests
php artisan test

# Run frontend tests (if configured)
npm test
```

## 📝 License

This project is open-sourced software licensed under the [MIT license](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Email**: partharajsarker@gmail.com
- **LinkedIn**: linkedin.com/in/partharajsarker
- **Portfolio**: [Your deployed URL]

---

Built with ❤️ using Laravel, React, and Tailwind CSS
