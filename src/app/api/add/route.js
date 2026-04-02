import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("rickmorty");
  const body = await request.json();
  const result = await db.collection("characters").insertOne({
    name: body.name,
    species: body.species,
    image: body.image,
  });
  return Response.json({
    message: "Character added",
    id: result.insertedId,
  });
}