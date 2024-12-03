'use client';

import { useState, useEffect, useRef } from 'react';
import { Cormorant_Garamond } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import Script from 'next/script';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] });

export function BookingFormComponent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneCountry: 'Canada',
        phoneNumber: '',
        arrivalDate: '',
        departureDate: '',
        adults: '',
        kids: '',
        hasPet: '',
        oneMoreThing: '',
        honeypot: '', // Honeypot field for spam prevention
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [turnstileToken, setTurnstileToken] = useState('');
    const turnstileRef = useRef<HTMLDivElement>(null);

    // Set start time when component mounts
    useEffect(() => {
        setStartTime(Date.now());
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.honeypot) {
            console.log('Bot detected via honeypot.');
            return;
        }

        // Time-based check: minimum 3 seconds
        const submissionTime = Date.now() - (startTime || 0);
        if (submissionTime < 3000) {
            console.log('Bot detected via quick submission.');
            return;
        }

        if (!turnstileToken) {
            console.log('Turnstile token not available.');
            return;
        }

        setSubmitStatus('idle');

        try {
            await emailjs.send(
                'service_v98lvdp',
                'template_dth6utm',
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phoneCountry: formData.phoneCountry,
                    phoneNumber: formData.phoneNumber,
                    arrivalDate: formData.arrivalDate,
                    departureDate: formData.departureDate,
                    adults: formData.adults,
                    kids: formData.kids,
                    hasPet: formData.hasPet,
                    oneMoreThing: formData.oneMoreThing,
                    turnstileToken, // Pass Turnstile token for verification
                },
                'NxLLnhlEW3KDj2zPO'
            );
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneCountry: 'Canada',
                phoneNumber: '',
                arrivalDate: '',
                departureDate: '',
                adults: '',
                kids: '',
                hasPet: '',
                oneMoreThing: '',
                honeypot: '',
            });
            setIsSubmitted(true);
            setTurnstileToken('');
        } catch (error) {
            console.error('Email sending error:', error);
            setSubmitStatus('error');
        }
    };

    // Form fields configuration
    const formFields = [
        {
            name: 'Name',
            type: 'group',
            fields: [
                { name: 'firstName', placeholder: 'First Name', type: 'text' },
                { name: 'lastName', placeholder: 'Last Name', type: 'text' },
            ],
        },
        { name: 'email', type: 'email', placeholder: 'Email' },
        {
            name: 'Phone',
            type: 'group',
            fields: [
                { name: 'phoneCountry', type: 'select', options: ['Canada', 'USA'] },
                { name: 'phoneNumber', type: 'tel', placeholder: 'Phone Number' },
            ],
        },
        {
            name: 'Dates',
            type: 'group',
            fields: [
                { name: 'arrivalDate', type: 'date', placeholder: 'Date of Arrival' },
                { name: 'departureDate', type: 'date', placeholder: 'Date of Departure' },
            ],
        },
        {
            name: 'adults',
            type: 'select',
            label: 'Number of Adults',
            placeholder: 'Number of Adults',
            options: ['', '1', '2', '3', '4'],
        },
        {
            name: 'kids',
            type: 'select',
            label: 'Number of Kids',
            placeholder: 'Number of Kids',
            options: ['', '0', '1', '2', '3', '4'],
        },
        {
            name: 'hasPet',
            type: 'radio',
            label: 'Do you have a pet?',
            options: ['Yes', 'No'],
        },
    ];

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                async
                onLoad={() => {
                    if (turnstileRef.current) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        window.turnstile.render(turnstileRef.current, {
                            sitekey: '0x4AAAAAAA1X9H8HQi0FXSZH',
                            action: 'booking_form',
                            cData: JSON.stringify({
                                formPurpose: 'Booking Form Submission',
                                timestamp: Date.now(),
                            }),
                            callback: (token: string) => {
                                setTurnstileToken(token);
                            },
                        });
                    }
                }}
            />
            <section
                className={`relative min-h-screen flex items-center justify-center py-16 md:pt-[250px] pt-[180px] bg-transparent ${cormorantGaramond.className}`}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'url("https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720646ee2450.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712111&Signature=ggKZ0Hnz9TZrYfnJubUlMX%2FSEmtVY%2F5fbKWE%2FwVNkL%2FOmaAYQ%2BLFXcz8aiCOkL60ll%2FAIhV41SuC5lBwHIZkE2Mgwg8At%2BSlMOYjye3pNyU6z3fre6B%2F8AcSfkJ4vWw0FgWbHHdexvHrPlLWRN%2FqvJn5KX8p4CngiKgX9bbBHZa4Nge8MRpV3EEh45XoMRjDJ30oaGNEVrV0sezEgraoohSQ8nr%2F0UqvUQzRoXu6MZRnvcak%2BOJ3Q%2BBhOGv1Jq0a8OhIQ%2Fnx2iy68vkenZ%2BYIvfSwwz3Tce7Aj1nDxV238zVbmCB5jxOmcL5wo20Sr%2FNS2oCCFo4nOSG%2FStaleR2Qw%3D%3D")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                ></div>
                <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                        <motion.div
                            className="relative z-10 flex flex-col items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="mt-6 text-2xl text-center text-white">
                                Thank you! Your booking request has been submitted.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="relative z-10 rounded-lg shadow-xl p-8 w-full max-w-2xl mx-4 bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h2
                                className="text-4xl mb-6 text-center text-gray-800"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Book a room
                            </motion.h2>
                            <motion.p
                                className="mb-8 text-[20px] text-center text-gray-600"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                If your dates are at all flexible, please let us know. We book up quickly, especially
                                during high season (December to April), but would love to find a way to host you.
                            </motion.p>
                            <motion.form
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                {formFields.map((field, index) => (
                                    <motion.div
                                        key={field.name}
                                        className="mb-6"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                    >
                                        <label className="block mb-2 text-gray-700">
                                            {field.label || field.name}
                                        </label>
                                        {field.type === 'group' ? (
                                            <div className="flex gap-4">
                                                {field.fields?.map((subField) =>
                                                    subField.type === 'select' ? (
                                                        <select
                                                            key={subField.name}
                                                            name={subField.name}
                                                            value={formData[subField.name as keyof typeof formData]}
                                                            onChange={handleChange}
                                                            className="w-1/3 p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                                            required
                                                        >
                                                            {subField.options?.map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <input
                                                            key={subField.name}
                                                            type={subField.type}
                                                            name={subField.name}
                                                            placeholder={subField.placeholder}
                                                            value={formData[subField.name as keyof typeof formData]}
                                                            onChange={handleChange}
                                                            className="w-1/2 p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                                            required
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ) : field.type === 'select' ? (
                                            <select
                                                name={field.name}
                                                value={formData[field.name as keyof typeof formData]}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                                required
                                            >
                                                <option value="">{field.placeholder}</option>
                                                {field.options?.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : field.type === 'radio' ? (
                                            <div className="flex gap-4">
                                                {field.options?.map((option) => (
                                                    <label key={option} className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={field.name}
                                                            value={option}
                                                            checked={
                                                                formData[field.name as keyof typeof formData] === option
                                                            }
                                                            onChange={handleChange}
                                                            className="mr-2 focus:ring-2 focus:ring-black"
                                                            required
                                                        />
                                                        {option}
                                                    </label>
                                                ))}
                                            </div>
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                value={formData[field.name as keyof typeof formData]}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                                required
                                            />
                                        )}
                                    </motion.div>
                                ))}
                                <div className="mb-6">
                                    <div ref={turnstileRef}></div>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Submit
                                </motion.button>
                            </motion.form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
}
