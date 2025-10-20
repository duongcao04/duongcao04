import { get, push, set, update, remove, child } from "firebase/database";
import { NextRequest } from "next/server";
import { postsCollection } from "@/lib/firebase";

export async function GET() {
	try {
		const snapshot = await get(postsCollection);
		const data = snapshot.exists() ? snapshot.val() : {};
		return Response.json(data, { status: 200 });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const newRef = push(postsCollection);
		const postData = {
			...body,
			id: newRef.key,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};
		await set(newRef, postData);
		return Response.json({ message: "Post created successfully", post: postData });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to create post" }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const body = await req.json();
		const { id, ...updates } = body;

		if (!id) {
			return Response.json({ error: "Post ID is required" }, { status: 400 });
		}

		const postRef = child(postsCollection, id);
		await update(postRef, { ...updates, updatedAt: Date.now() });

		return Response.json({ message: "Post updated successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to update post" }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");

		if (!id) {
			return Response.json({ error: "Post ID is required" }, { status: 400 });
		}

		const postRef = child(postsCollection, id);
		await remove(postRef);

		return Response.json({ message: "Post deleted successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to delete post" }, { status: 500 });
	}
}