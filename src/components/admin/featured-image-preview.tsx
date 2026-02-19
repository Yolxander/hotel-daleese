'use client';

import { useState, useEffect } from 'react';

type FeaturedImagePreviewProps = {
  currentUrl?: string | null;
  selectedFile?: File | null;
};

export function FeaturedImagePreview({
  currentUrl,
  selectedFile,
}: FeaturedImagePreviewProps) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setObjectUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setObjectUrl(null);
      };
    }
    setObjectUrl(null);
  }, [selectedFile]);

  const previewUrl = selectedFile ? objectUrl : currentUrl || null;

  if (!previewUrl) return null;

  return (
    <div className="mt-3">
      <p className="mb-1.5 text-xs text-gray-500">
        {selectedFile ? 'New image preview:' : 'Current image:'}
      </p>
      <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        <img
          src={previewUrl}
          alt="Featured image preview"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
