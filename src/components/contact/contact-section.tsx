'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Cormorant_Garamond } from 'next/font/google';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import emailjs from 'emailjs-com';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] });

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Anti-spam honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [startTime, setStartTime] = useState<number>(0); // Track form render time for spam prevention
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Record the time when the form renders
    setStartTime(Date.now());
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z]+(\.[a-zA-Z]+)?@gmail\.com$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    if (name === 'email') {
      if (validateEmail(value)) {
        setEmailError('');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: Check honeypot field
    if (formData.honeypot) {
      console.log('Bot detected due to honeypot field');
      return; // Exit if honeypot is filled
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      setEmailError('Please provide a valid Gmail address.');
      return;
    }

    // Anti-spam: Check time-based submission threshold
    const submitTime = Date.now();
    if (submitTime - startTime < 3000) { // Less than 3 seconds
      console.log('Bot detected due to fast submission');
      return; // Exit if submitted too quickly
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
          'service_v98lvdp', // Replace with your Email.js service ID
          'template_wjdk3cr', // Replace with your Email.js template ID
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'NxLLnhlEW3KDj2zPO' // Replace with your Email.js public key
      );
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '' // Reset honeypot
      });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
      <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className={`h-fit md:pt-[300px] pt-[200px] pb-[100px] relative py-16 px-4 md:px-8 ${cormorantGaramond.className}`}
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-9 max-w-7xl mx-auto flex flex-col md:flex-row gap-[100px]">
          <motion.div variants={itemVariants} className="md:w-1/2 text-white">
            <h2 className="text-4xl mb-2">Contact Us</h2>
            <div className="w-full h-px bg-white mb-6"></div>
            <p className="mb-6 text-[22px]">
              We always look forward to speaking with our guests. If you have any
              questions, do not hesitate to reach out. We do our best to reply as quickly as
              possible, answering all inquiries. Your hosts Rosa and Dave will be there to
              greet you during the check-in and check-out process.
            </p>
            <p className="mb-6 text-[22px]">
              If you need directions, contact us directly. Please be sure to read our policies
              prior to booking.
            </p>
            <div className="mb-6 text-[22px]">
              <h3 className="text-xl font-bold mb-2">Address & Location</h3>
              <p>East of BCR, 500 Meters, Provincia de</p>
              <p>Puntarenas, Uvita, 60504, Costa Rica</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Phone & Whatsapp</h3>
              <p>+1 (905) 598-0504</p>
            </div>
            <Link href={'https://wa.me/+1(905)598-0504'}>
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-[22px]">
                Send a Message
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white/80 py-10 px-6 rounded-lg shadow-lg z-9">
              {submitStatus === 'success' && (
                  <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
                    Message sent successfully!
                  </div>
              )}
              {submitStatus === 'error' && (
                  <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                    Failed to send message. Please try again.
                  </div>
              )}
              {/* Honeypot field */}
              <div style={{ display: 'none' }}>
                <label htmlFor="honeypot">Do not fill this out if you&#39;re human:</label>
                <Input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-[20px] font-medium text-gray-700 mb-1">First Name</label>
                  <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-[20px] font-medium text-gray-700 mb-1">Last Name</label>
                  <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[20px] font-medium text-gray-700 mb-1">Email</label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={emailError ? 'border-red-500' : ''}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-[20px] font-medium text-gray-700 mb-1">Subject</label>
                <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-[20px] font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.section>
  );
}
