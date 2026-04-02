import Link from "next/link";

export default async function Characters() {
    const res = await fetch("http://localhost:3000/api/characters")
    if (!res.ok){
        throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return (
        <main>
            <h1>
                Character List
            </h1>
            <ul>
                {data.map((character) => (
                    <li key = {character._id}>
                        <Link
                            href = {`/characters/${character._id}`}
                        >
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}