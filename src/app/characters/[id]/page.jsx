import Character from "@/app/components/Character";

export async function generateStaticParams() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results.map((character) => ({
    id: character.id.toString(),
  }));
}

export default async function CharacterDetail(props) {
    const {id} = await props.params;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
     if (!res.ok){
        throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return(
        <main>
           <Character
            name={data.name}
            species={data.species}
            image={data.image}
           />
        </main>
    )
}
