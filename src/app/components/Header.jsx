import Link from "next/link";

export default function Header() {
    return(
        <header>
            <nav className="flex gap-6">
                <Link
                    href = "/"
                >
                    Home
                </Link>
                <Link
                    href = "/characters"
                >
                    Characters
                </Link>
            </nav>
        </header>
    )
}