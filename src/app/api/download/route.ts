import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file) {
    return NextResponse.json({ error: "File not specified" }, { status: 400 });
  }

  // Whitelist allowed files for security
  const allowedFiles = ["resume.pdf", "resume.docx"];
  if (!allowedFiles.includes(file)) {
    return NextResponse.json({ error: "File not allowed" }, { status: 403 });
  }

  try {
    const filePath = join(process.cwd(), "public", file);
    const fileBuffer = readFileSync(filePath);

    const headers = new Headers();
    headers.set(
      "Content-Type",
      file.endsWith(".pdf")
        ? "application/pdf"
        : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    );
    headers.set("Content-Disposition", `attachment; filename="${file}"`);
    headers.set("Cache-Control", "no-store");

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
