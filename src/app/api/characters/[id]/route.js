import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const client = await clientPromise;
  const db = client.db("rickmorty");
  const { id } = await params; 
  const character = await db.collection("characters").findOne({
    _id: new ObjectId(id),
  });
  return Response.json(character);
}