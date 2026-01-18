"use client";

import {PrimaryButton, DangerButton} from "./Button";
import { PortfolioProject } from "@/types/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";

type CardProps = {
    title: string;
    description: string;
}

export function MovieCard({title, description}: CardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="block max-w-sm p-6 m-5 bg-gray-900 rounded-lg border-b-4 border-green-400 shadow-sm">
          <h5 className="mb-4 text-2xl font-semibold tracking-tight leading-8 text-white">
            {title}
          </h5>
            <p className="mb-6 text-gray-300">
            {description}
            </p>
            <div className="space-x-2">
                <PrimaryButton text="Learn More" />
                <DangerButton text="Report" />
            </div>
        </motion.div>
    )
}

export function CardTile({title, description}: CardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(74, 222, 128, 0.2)" }}
            className="p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-400">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    )
}

export function PortfolioCard({ project }: { project: PortfolioProject }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border-b-4 border-green-400">
            {project.imageUrl && (
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                </div>
            )}
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                        {project.category}
                    </span>
                    {project.featured && (
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                            Featured
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 text-green-400 text-xs px-2 py-1 rounded border border-green-600"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Action Buttons */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-2">
                    {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank">
                            <PrimaryButton text="Live Demo" />
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                            <SecondaryButton text="View Code" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}

export function SkillCard({ name, level, category }: { name: string; level: string; category: string }) {
    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Expert':
                return 'bg-green-600';
            case 'Advanced':
                return 'bg-blue-600';
            case 'Intermediate':
                return 'bg-yellow-600';
            default:
                return 'bg-gray-600';
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(74, 222, 128, 0.15)" }}
            className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-white font-semibold">{name}</h4>
                    <p className="text-gray-400 text-xs">{category}</p>
                </div>
                <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={`${getLevelColor(level)} text-white text-xs px-3 py-1 rounded-full`}>
                    {level}
                </motion.span>
            </div>
        </motion.div>
    );
}

function SecondaryButton({ text }: { text: string }) {
    return (
        <button className="px-4 py-2 bg-transparent text-white rounded border-2 border-green-600 hover:bg-green-600">
            {text}
        </button>
    );
}
