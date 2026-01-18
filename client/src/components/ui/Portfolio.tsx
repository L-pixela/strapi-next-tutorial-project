import { PortfolioProject, PortfolioSkill } from "@/types/portfolio";
import { PortfolioCard, SkillCard } from "./Card";

type PortfolioGridProps = {
    projects: PortfolioProject[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
            ))}
        </div>
    );
}

type SkillsGridProps = {
    skills: PortfolioSkill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
                <SkillCard
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                    category={skill.category}
                />
            ))}
        </div>
    );
}

export function FeaturedProjects({ projects }: PortfolioGridProps) {
    const featuredProjects = projects.filter(p => p.featured);
    
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-400 pl-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
