import { get, push, set, update, remove, child } from "firebase/database";
import { NextRequest } from "next/server";
import { tagsCollection } from "@/lib/firebase";

export async function GET() {
	try {
		const snapshot = await get(tagsCollection);
		const data = snapshot.exists() ? snapshot.val() : {};
		return Response.json(data, { status: 200 });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to fetch tags" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const newRef = push(tagsCollection);
		const tagData = {
			...body,
			id: newRef.key,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};
		await set(newRef, tagData);
		return Response.json({ message: "Tag created successfully", tag: tagData });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to create tag" }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const body = await req.json();
		const { id, ...updates } = body;

		if (!id) {
			return Response.json({ error: "Tag ID is required" }, { status: 400 });
		}

		const tagRef = child(tagsCollection, id);
		await update(tagRef, { ...updates, updatedAt: Date.now() });

		return Response.json({ message: "Tag updated successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to update tag" }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");

		if (!id) {
			return Response.json({ error: "Tag ID is required" }, { status: 400 });
		}

		const tagRef = child(tagsCollection, id);
		await remove(tagRef);

		return Response.json({ message: "Tag deleted successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to delete tag" }, { status: 500 });
	}
}