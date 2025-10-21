import { projectsCollection } from "@/lib/firebase";
import { equalTo, get, orderByChild, query } from "firebase/database";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		if (!slug) {
			return Response.json({ error: "Thiếu tham số slug" }, { status: 400 });
		}

		const q = query(projectsCollection, orderByChild("slug"), equalTo(slug));

		const snapshot = await get(q);

		if (!snapshot.exists()) {
			return Response.json({ error: "Không tìm thấy project" }, { status: 404 });
		}

		const data = snapshot.val();
		const project = Object.values(data)[0];

		return Response.json(project, { status: 200 });
	} catch (error) {
		console.error("Lỗi khi lấy project:", error);
		return Response.json({ error: "Không thể tải dữ liệu project" }, { status: 500 });
	}
}
