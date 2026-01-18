export type PortfolioProject = {
    id: number;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    imageUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export type PortfolioCategory = {
    id: number;
    name: string;
    slug: string;
}

export type PortfolioSkill = {
    id: number;
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    category: string;
}
