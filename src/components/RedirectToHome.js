// components/RedirectToHome.js

"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToHome() {
    const router = useRouter();

    useEffect(() => {
        router.push('/'); // Redirect to the homepage
    }, [router]);

    return null; // Prevents any content from being displayed on this page
}
