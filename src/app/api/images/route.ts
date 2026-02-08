/**
 * API Route to generate signed URLs for images
 * This allows you to refresh expired URLs without hardcoding them
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSignedUrl, getSignedUrls } from '@/lib/firebase-storage';

// Uses request.nextUrl.searchParams — must be dynamic, not statically rendered
export const dynamic = 'force-dynamic';

/**
 * GET /api/images?path=default/uploads/image.jpg
 * Returns a signed URL for a single image
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get('path');
    const paths = searchParams.get('paths'); // Comma-separated list

    if (paths) {
      // Multiple paths
      const pathArray = paths.split(',').map((p) => p.trim());
      const urls = await getSignedUrls(pathArray);
      return NextResponse.json({ urls });
    }

    if (path) {
      // Single path
      const url = await getSignedUrl(path);
      return NextResponse.json({ url, path });
    }

    return NextResponse.json(
      { error: 'Missing path or paths parameter' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in images API:', error);
    return NextResponse.json(
      { error: 'Failed to generate signed URL' },
      { status: 500 }
    );
  }
}

