"use client";

import { useState } from "react";
import { PortfolioProject, PortfolioSkill } from "@/types/portfolio";
import { PortfolioGrid, SkillsGrid, FeaturedProjects } from "@/components/ui/Portfolio";

// Mock data - Replace with API calls later
const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with cart management, payment integration, and admin dashboard.",
        category: "Web Development",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        featured: true,
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example/project1"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Real-time collaborative task manager with drag-and-drop functionality and team workspaces.",
        category: "Web Development",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        featured: true,
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example/project2"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Interactive weather dashboard with real-time data visualization and 7-day forecasts.",
        category: "Data Visualization",
        technologies: ["Vue.js", "D3.js", "OpenWeather API"],
        featured: false,
        githubUrl: "https://github.com/example/project3"
    },
    {
        id: 4,
        title: "Mobile Fitness Tracker",
        description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
        category: "Mobile Development",
        technologies: ["React Native", "Firebase", "Redux"],
        featured: false,
        demoUrl: "https://demo.example.com"
    },
    {
        id: 5,
        title: "Blog CMS",
        description: "Headless CMS built with Strapi for managing blog content with rich text editor.",
        category: "Backend Development",
        technologies: ["Strapi", "PostgreSQL", "Next.js"],
        featured: false,
        githubUrl: "https://github.com/example/project5"
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Modern portfolio website with smooth animations and responsive design.",
        category: "Web Development",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        featured: false,
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example/project6"
    }
];

const skills: PortfolioSkill[] = [
    { id: 1, name: "React", level: "Expert", category: "Frontend" },
    { id: 2, name: "Next.js", level: "Advanced", category: "Frontend" },
    { id: 3, name: "TypeScript", level: "Advanced", category: "Language" },
    { id: 4, name: "Node.js", level: "Advanced", category: "Backend" },
    { id: 5, name: "PostgreSQL", level: "Intermediate", category: "Database" },
    { id: 6, name: "MongoDB", level: "Intermediate", category: "Database" },
    { id: 7, name: "Tailwind CSS", level: "Expert", category: "Frontend" },
    { id: 8, name: "Git", level: "Advanced", category: "Tools" },
    { id: 9, name: "Docker", level: "Intermediate", category: "DevOps" }
];

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    
    const categories = ["All", "Web Development", "Mobile Development", "Backend Development", "Data Visualization"];
    
    const filteredProjects = selectedCategory === "All" 
        ? portfolioProjects 
        : portfolioProjects.filter(p => p.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="mb-16 text-center">
                <h1 className="text-5xl font-bold text-white mb-4">
                    My <span className="text-green-400">Portfolio</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Showcasing my work in web development, mobile apps, and more. 
                    Each project represents a unique challenge and learning experience.
                </p>
            </section>

            {/* Featured Projects */}
            <FeaturedProjects projects={portfolioProjects} />

            {/* Category Filter */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-400 pl-4">
                    All Projects
                </h2>
                <div className="flex flex-wrap gap-3 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                selectedCategory === category
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="mb-16">
                <PortfolioGrid projects={filteredProjects} />
            </section>

            {/* Skills Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-400 pl-4">
                    Skills & Technologies
                </h2>
                <SkillsGrid skills={skills} />
            </section>

            {/* About Section */}
            <section className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-400">
                <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    I'm a passionate full-stack developer with expertise in modern web technologies. 
                    I love building scalable applications that solve real-world problems and create 
                    delightful user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    With a strong foundation in both frontend and backend development, I specialize 
                    in creating end-to-end solutions using React, Next.js, Node.js, and various database 
                    technologies. I'm constantly learning and staying up-to-date with the latest trends 
                    in web development.
                </p>
            </section>
        </div>
    );
}
