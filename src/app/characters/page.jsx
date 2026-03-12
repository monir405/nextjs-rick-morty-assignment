import Link from "next/link";

export default async function Characters() {
    const res = await fetch ("https://rickandmortyapi.com/api/character")
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
                {data.results.map((character) => (
                    <li key = {character.id}>
                        <Link
                            href = {`/characters/${character.id}`}
                        >
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}