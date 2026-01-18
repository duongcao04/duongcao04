import { NextRequest, NextResponse } from "next/server";
import { query, orderByChild, equalTo, get } from "firebase/database";
import { projectsCollection } from "@/lib/firebase"; // adjust path to your setup

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const { slug } = await params;
		if (!slug) {
			return NextResponse.json({ error: "Thiếu tham số slug" }, { status: 400 });
		}

		const q = query(projectsCollection, orderByChild("slug"), equalTo(slug));
		const snapshot = await get(q);

		if (!snapshot.exists()) {
			return NextResponse.json({ error: "Không tìm thấy project" }, { status: 404 });
		}

		const data = snapshot.val();
		const project = Object.values(data)[0];

		return NextResponse.json(project, { status: 200 });
	} catch (error) {
		console.error("Lỗi khi lấy project:", error);
		return NextResponse.json({ error: "Không thể tải dữ liệu project" }, { status: 500 });
	}
}
