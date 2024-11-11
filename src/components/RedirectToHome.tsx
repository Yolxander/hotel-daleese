"use client";
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function RedirectToHome({ children: _children }: { children: ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        router.push('/'); // Redirect to the homepage
    }, [router]);

    return null;
}
