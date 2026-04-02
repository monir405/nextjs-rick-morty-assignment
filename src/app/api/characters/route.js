import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("rickmorty");
  const characters = await db.collection("characters").find({}).toArray();
  return Response.json(characters);
}