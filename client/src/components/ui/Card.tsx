import {PrimaryButton, DangerButton} from "./Button";

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