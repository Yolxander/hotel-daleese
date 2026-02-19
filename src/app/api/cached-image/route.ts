/**
 * Proxies Supabase (and other allowed) image URLs and returns them with long-lived
 * cache headers so the browser caches images and doesn't re-fetch every time.
 */
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_ORIGIN = "https://kvirwlcodrpwnwzvfcqr.supabase.co";
const CACHE_MAX_AGE = 31536000; // 1 year in seconds
const REVALIDATE_SECONDS = 60 * 60 * 24 * 7; // Revalidate server cache every 7 days

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  // Only allow our Supabase storage origin
  if (parsed.origin !== ALLOWED_ORIGIN) {
    return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream returned ${res.status}` },
        { status: res.status }
      );
    }

    const contentType =
      res.headers.get("Content-Type") || "image/jpeg";
    const body = await res.arrayBuffer();

    return new NextResponse(body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": `public, max-age=${CACHE_MAX_AGE}, immutable`,
      },
    });
  } catch (err) {
    console.error("cached-image fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 502 }
    );
  }
}
