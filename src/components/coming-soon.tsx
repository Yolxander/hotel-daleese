'use client'

import { useState } from "react";
import emailjs from 'emailjs-com';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
    </svg>
);

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
        <path d="M15.5 12.5H13V18H10V12.5H8V10H10V8.5C10 7.5 10.5 6 12.5 6H15V8.5H13.5C13 8.5 13 8.75 13 9V10H15.5V12.5Z" fill="currentColor"/>
    </svg>
);

export function ComingSoon() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_v98lvdp', // replace with your Email.js service ID
            'template_wjdk3cr',
            { email },
            'NxLLnhlEW3KDj2zPO' // replace with your Email.js public key
        )
            .then(() => {
                setMessage("Thank you! We'll be in touch soon.");
                setEmail("");
            })
            .catch(() => {
                setMessage("Something went wrong. Please try again.");
            });
    };

    return (
        <div className={`min-h-screen relative flex flex-col items-center justify-center ${lora.className}`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/About/671d219ef18e7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761498399&Signature=hm0lHR2DylZ7ztLnpHqdk%2FbOa3mHKZrsyNkwvCePdh0hJmKXr7vPBaL8ISWkFzBC234njh9Zo8YB0k%2BF4Ik9oRAPhaCqKUGJ%2Bm%2BUvZPgHDPTIa2N1yx5qyi9ZFqDy9b5aXL%2F6ni%2BlIHP%2B50wwh1s6Wiucj4eWr8tI2VzH6gATluj9bdrlPv%2FrzRrd3EzMSDPQne1B8rhAA3cf7FkIaFmYDJ6Ojp%2BTTPm3qyv%2Fy%2FH47mOp3Co1oDEUm%2FSYAMpKApO0pkp9MMOnoTEbvi%2BvioWWGsWqRquGbBHJBVfJ%2BsrPzioLZXqrFNe2QyAmNutHa0YFVf3XTkuLWOQsBfDY0NFTQ%3D%3D")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.4)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-xl mx-auto px-4 text-center text-white">
                <h1 className="text-5xl sm:text-7xl font-medium mb-4">
                    Coming soon
                </h1>
                <p className="text-[22px] font-semibold mb-8 text-white">
                    Hotel Daleese is currently refining your online experience. Leave your email, and we&#39;ll be in touch soon.
                </p>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="w-full mb-4">
                    <div className="flex items-center bg-white rounded-full p-1 focus-within:ring-2 focus-within:ring-gray-300">
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="flex-grow border-0 bg-transparent text-gray-900 focus:ring-0 focus-visible:ring-0 focus:outline-none rounded-full"
                            required
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="rounded-full bg-black hover:bg-gray-800 focus:outline-none focus:ring-0"
                        >
                            <ArrowRight className="h-4 w-4" />
                            <span className="sr-only">Submit</span>
                        </Button>
                    </div>
                </form>

                {/* Message */}
                {message && <p className="text-sm text-green-500 mt-2">{message}</p>}

                {/* Social Links */}
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-300 flex flex-col items-center">
                    <div className="flex space-x-4 mb-4">
                        <a href="https://instagram.com/hoteldaleese" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <InstagramIcon />
                        </a>
                        <a href="https://facebook.com/hoteldaleese" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
