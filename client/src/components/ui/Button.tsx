"use client";

type ButtonProps = {
    text: string;
}

export function PrimaryButton({ text }: ButtonProps){
    return (
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            {text}
        </button>
    )
}

export function SecondaryButton({ text }: ButtonProps){
    return (
        <button className="px-4 py-2 bg-transparent text-white rounded border-2 border-green-600 hover:bg-green-600">
            {text}
        </button>
    )
}

export function DangerButton({ text }: ButtonProps){
    return (
        <button className="px-4 py-2 bg-transparent text-white rounded border-2 border-red-600 hover:bg-red-700">
            {text}
        </button>
    )
}