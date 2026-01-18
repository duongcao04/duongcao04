import { get, push, set, update, remove, child } from "firebase/database";
import { NextRequest } from "next/server";
import { technologiesCollection } from "@/lib/firebase";

export async function GET() {
	try {
		const snapshot = await get(technologiesCollection);
		const data = snapshot.exists() ? snapshot.val() : {};
		return Response.json(data, { status: 200 });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to fetch technologies" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const newRef = push(technologiesCollection);
		const techData = {
			...body,
			id: newRef.key,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};
		await set(newRef, techData);
		return Response.json({ message: "Tech created successfully", tech: techData });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to create tech" }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const body = await req.json();
		const { id, ...updates } = body;

		if (!id) {
			return Response.json({ error: "Tech ID is required" }, { status: 400 });
		}

		const techRef = child(technologiesCollection, id);
		await update(techRef, { ...updates, updatedAt: Date.now() });

		return Response.json({ message: "Tech updated successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to update tech" }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");

		if (!id) {
			return Response.json({ error: "Tech ID is required" }, { status: 400 });
		}

		const techRef = child(technologiesCollection, id);
		await remove(techRef);

		return Response.json({ message: "Tech deleted successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to delete tech" }, { status: 500 });
	}
}