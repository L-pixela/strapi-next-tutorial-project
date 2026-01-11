import Link from "next/link";

export default function NavBar(){
    return (
        <nav className="text-xl p-4 space-x-5 text-center">
            <Link href="/">Home</Link>
            <Link href="/movie">Movies</Link>
            <Link href="#">About</Link>
            <Link href="#">Support</Link>
        </nav>
    )
}