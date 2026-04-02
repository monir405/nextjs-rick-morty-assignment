import Character from "@/app/components/Character";

export default async function CharacterDetail({params}) {
    const {id} =  params;
    const res = await fetch(`http://localhost:3000/api/characters/${id}`);
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