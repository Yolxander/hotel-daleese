'use client'

import { useState, useRef, useEffect } from 'react'
import { Lora } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ReCAPTCHA from "react-google-recaptcha"

const lora = Lora({ subsets: ['latin'] })

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
        oneMoreThing: ''
    })
    const [captchaValue, setCaptchaValue] = useState<string | null>(null)
    const [showOneMoreThing, setShowOneMoreThing] = useState(false)
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!captchaValue) {
            alert("Please complete the captcha")
            return
        }
        // Handle form submission here
        console.log(formData)
        console.log("Captcha value:", captchaValue)
        // Reset captcha after submission
        recaptchaRef.current?.reset()
        setCaptchaValue(null)
        setIsSubmitted(true)
    }

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value)
    }

    useEffect(() => {
        const allFieldsFilled = Object.entries(formData).every(([key, value]) =>
            key === 'oneMoreThing' ? true : value !== ''
        )
        setShowOneMoreThing(allFieldsFilled)
    }, [formData])

    useEffect(() => {
        if (showOneMoreThing && formData.oneMoreThing !== '') {
            setShowCaptcha(true)
        } else {
            setShowCaptcha(false)
        }
    }, [showOneMoreThing, formData.oneMoreThing])

    const formFields = [
        { name: 'Name', type: 'group', fields: [
                { name: 'firstName', placeholder: 'First Name', type: 'text' },
                { name: 'lastName', placeholder: 'Last Name', type: 'text' }
            ]},
        { name: 'Email', type: 'email', placeholder: 'Email' },
        { name: 'Phone', type: 'group', fields: [
                { name: 'phoneCountry', type: 'select', options: ['Canada', 'USA'] },
                { name: 'phoneNumber', type: 'tel', placeholder: 'Phone Number' }
            ]},
        { name: 'Dates', type: 'group', fields: [
                { name: 'arrivalDate', type: 'date', placeholder: 'Date of Arrival' },
                { name: 'departureDate', type: 'date', placeholder: 'Date of Departure' }
            ]},
        { name: 'Adults', type: 'select', placeholder: 'Number of Adults', options: ['', '1', '2', '3', '4'] },
        { name: 'Kids', type: 'select', placeholder: 'Number of Kids', options: ['', '0', '1', '2', '3', '4'] },
        { name: 'has Pet', type: 'radio', options: ['Yes', 'No'], label: 'Do you have a pet?' }
    ]

    return (
        <section className={`relative min-h-screen flex items-center justify-center py-16 md:pt-[250px] pt-[180px] ${lora.className}`}>
            <Image
                src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Home/67246f6435b10.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761977061&Signature=ZFciv0Oif%2BjkE8llZpzJuBJ8xGn8yK2AgnmiPb9BxiW%2FV%2Beb220M2JW94JXDOBA50SiHW6hg8ATkrsEVqn988I%2B4nEZ8kJxQ%2FBIcVKVOCiD%2BugUo%2BQRGl3%2BCkKd9tD3MOmIh64b%2BvC3RfFmFTTuX8dsVOBn0KevX13Ay7elRWPOHrvAnVIuvZNHPgWEFu2GlEil6MO9BEceky9z0V8ynDa3KRYkVX8Fd8%2FpMhsVwm1D9MkP5Z4VGXkOkT140rdQoJKpnAmWb21ZaNh7U8C%2BQSoIf1ffyGiQC%2Bv9Ijl4nYoT9EzvXxeZYCMpZo%2BShD7em9R5otDqUwppuyT9FTlwgkg%3D%3D"
                alt="Luxurious hotel room"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe
                            src="https://lottie.host/embed/3b31a4f7-84e3-4e93-9e4e-0102d5a1d5b3/Z7lGDqVpQT.json"
                            style={{ width: '300px', height: '300px' }}
                        ></iframe>
                        <p className="mt-6 text-2xl text-center text-white">Thank you! Your booking request has been submitted.</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-xl p-8 w-full max-w-2xl mx-4"
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
                            {formFields.map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    className="mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                >
                                    <label className="block mb-2 text-gray-700">{field.name}</label>
                                    {field.type === 'group' ? (
                                        <div className="flex gap-4">
                                            {field.fields?.map((subField) => (
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
                                                            <option key={option} value={option}>{option}</option>
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
                                            ))}
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
                                                <option key={option} value={option}>{option}</option>
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
                                                        checked={formData[field.name as keyof typeof formData] === option}
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
                            <AnimatePresence>
                                {showOneMoreThing && (
                                    <motion.div
                                        className="mb-6"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <label className="block mb-2 text-gray-700">One more thing</label>
                                        <input
                                            type="text"
                                            name="oneMoreThing"
                                            placeholder="Tell us one more thing..."
                                            value={formData.oneMoreThing}
                                            onChange={handleChange}
                                            className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                            required
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {showCaptcha && (
                                    <motion.div
                                        className="mb-6"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                            onChange={handleCaptchaChange}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <motion.button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={!showCaptcha || !captchaValue}
                            >
                                Submit
                            </motion.button>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
