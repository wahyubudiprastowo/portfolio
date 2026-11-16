import { NextResponse } from "next/server";

// Statis agar kompatibel dengan `output: export` (GitHub Pages build).
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
