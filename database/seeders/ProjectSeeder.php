<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'E-Commerce Platform',
                'description' => 'A full-stack e-commerce platform built with Laravel and React. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
                'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
                'tech_stack' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Stripe'],
                'github_url' => 'https://github.com/username/ecommerce-platform',
                'demo_url' => 'https://demo-ecommerce.example.com',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Task Management App',
                'description' => 'A collaborative task management application with real-time updates, team collaboration, and project tracking features.',
                'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
                'tech_stack' => ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI'],
                'github_url' => 'https://github.com/username/task-manager',
                'demo_url' => 'https://task-manager-demo.example.com',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Portfolio Website',
                'description' => 'A modern, responsive portfolio website showcasing my work and skills. Built with modern web technologies and optimized for performance.',
                'image' => 'https://images.unsplash.com/photo-1467232004584-a241de8b6a5b?w=800&h=600&fit=crop',
                'tech_stack' => ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'PHP', 'Laravel'],
                'github_url' => 'https://github.com/username/portfolio',
                'demo_url' => 'https://portfolio.example.com',
                'is_featured' => false,
                'sort_order' => 3,
            ],
            [
                'title' => 'Weather Dashboard',
                'description' => 'A weather application that displays current weather conditions and forecasts for multiple locations. Features include interactive maps and weather alerts.',
                'image' => 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
                'tech_stack' => ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
                'github_url' => 'https://github.com/username/weather-dashboard',
                'demo_url' => 'https://weather-demo.example.com',
                'is_featured' => false,
                'sort_order' => 4,
            ],
            [
                'title' => 'Blog CMS',
                'description' => 'A content management system for blogs with features like rich text editing, image management, SEO optimization, and analytics dashboard.',
                'image' => 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
                'tech_stack' => ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Algolia'],
                'github_url' => 'https://github.com/username/blog-cms',
                'demo_url' => 'https://blog-cms-demo.example.com',
                'is_featured' => false,
                'sort_order' => 5,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
