import {PrimaryButton, SecondaryButton} from "./Button";

type CardProps = {
    title: string;
    description: string;
}

export function MovieCard({title, description}: CardProps) {
    return (
        <div className="block max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h5 className="mb-4 text-2xl font-semibold tracking-tight leading-8 text-gray-900">
            {title}
          </h5>
            <p className="mb-6 text-gray-600">
            {description}
            </p>
            <div className="space-x-2">
                <PrimaryButton text="Learn More" />
                <SecondaryButton text="Report" />
            </div>
        </div>
    )
}