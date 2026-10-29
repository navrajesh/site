import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const pdfPath = path.join(process.cwd(), "docs", "resume", "resume.pdf");

  try {
    const file = await readFile(pdfPath);
    const bytes = new Uint8Array(file.byteLength);
    bytes.set(file);

    return new Response(bytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Rajesh-N-Krishnan-Resume.pdf"',
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("Resume not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
