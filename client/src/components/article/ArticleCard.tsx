"use client";

import { PrimaryButton, DangerButton } from "../ui/Button";
import { useRouter } from "next/navigation";

type CardProps = {
    title: string;
    description: string;
    documentId: string;
}

export function ArticleCard({title, description, documentId}: CardProps){
    const router = useRouter();

    const handleLearnMore = () => {
        router.push(`/article/${documentId}`);
    };

    const handleReport = () => {
        console.log(`Report article ${documentId}`);
        // TODO: Implement report functionality
    };

    return (
        <div className="block max-w-sm p-6 m-5 bg-gray-900 rounded-lg border-b-4 border-green-400 shadow-sm hover:transition-transform hover:scale-105">
          <h5 className="mb-4 text-2xl font-semibold tracking-tight leading-8 text-white">
            {title}
          </h5>
            <p className="mb-6 text-gray-300">
            {description}
            </p>
            <div className="space-x-2">
                <PrimaryButton text="Learn More" action={handleLearnMore} />
                <DangerButton text="Report" action={handleReport} />
            </div>
        </div>
    )
}