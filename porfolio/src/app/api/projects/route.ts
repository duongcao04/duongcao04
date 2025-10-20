import { get, push, set, update, remove, child } from "firebase/database";
import { NextRequest } from "next/server";
import { projectsCollection } from "@/lib/firebase";

export async function GET() {
	try {
		const snapshot = await get(projectsCollection);
		const data = snapshot.exists() ? snapshot.val() : {};
		return Response.json(data, { status: 200 });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to fetch projects" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const newRef = push(projectsCollection);
		const projectData = {
			...body,
			id: newRef.key,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};
		await set(newRef, projectData);
		return Response.json({ message: "Project created successfully", project: projectData });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to create project" }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const body = await req.json();
		const { id, ...updates } = body;

		if (!id) {
			return Response.json({ error: "Project ID is required" }, { status: 400 });
		}

		const projectRef = child(projectsCollection, id);
		await update(projectRef, { ...updates, updatedAt: Date.now() });

		return Response.json({ message: "Project updated successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to update project" }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");

		if (!id) {
			return Response.json({ error: "Project ID is required" }, { status: 400 });
		}

		const projectRef = child(projectsCollection, id);
		await remove(projectRef);

		return Response.json({ message: "Project deleted successfully" });
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Failed to delete project" }, { status: 500 });
	}
}