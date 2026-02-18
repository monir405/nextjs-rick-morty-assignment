export default async function Character({name, species, image}) {
    return(
        <main>
            <h1>
                {name}
            </h1>
            <p>
                Species: {species}
            </p>
            <img
                src = {image}
                alt = {name}
            />
        </main>
    )
}