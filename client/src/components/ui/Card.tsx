import {PrimaryButton, DangerButton} from "./Button";
import { PortfolioProject } from "@/types/portfolio";
import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
}

export function MovieCard({title, description}: CardProps) {
    return (
        <div className="block max-w-sm p-6 m-5 bg-gray-900 rounded-lg border-b-4 border-green-400 shadow-sm hover:transition-transform hover:scale-105">
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
        </div>
    )
}

export function CardTile({title, description}: CardProps) {
    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-400 hover:shadow-lg hover:transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}

export function PortfolioCard({ project }: { project: PortfolioProject }) {
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border-b-4 border-green-400 hover:transition-transform hover:scale-105 hover:shadow-2xl">
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
                        <span
                            key={index}
                            className="bg-gray-800 text-green-400 text-xs px-2 py-1 rounded border border-green-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
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
                </div>
            </div>
        </div>
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
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-400 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-white font-semibold">{name}</h4>
                    <p className="text-gray-400 text-xs">{category}</p>
                </div>
                <span className={`${getLevelColor(level)} text-white text-xs px-3 py-1 rounded-full`}>
                    {level}
                </span>
            </div>
        </div>
    );
}

function SecondaryButton({ text }: { text: string }) {
    return (
        <button className="px-4 py-2 bg-transparent text-white rounded border-2 border-green-600 hover:bg-green-600">
            {text}
        </button>
    );
}
