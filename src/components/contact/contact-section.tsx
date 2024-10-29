'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
      <section className={`h-[110vh] pt-[300px] pb-[100px] relative py-16 px-4 md:px-8 ${lora.className}`} style={{backgroundImage: "url('/placeholder.svg?height=800&width=1200')"}}>

        <div className="relative z-9 max-w-7xl mx-auto flex flex-col md:flex-row gap-[100px]">
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
            <div className="w-full h-px bg-white mb-6"></div>
            <p className="mb-6">
              We always look forward to speaking with our guests. If you have any
              questions, do not hesitate to reach out. We do our best to reply as quickly as
              possible, answering all inquires. Your hosts Rosa and Dave will be there to
              greet you during the check in and check out process.
            </p>
            <p className="mb-6">
              If you need directions, contact us directly. Please be sure to read our policies
              prior to booking.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Address & Location</h3>
              <p>East of BCR, 500 Meters, Provincia de</p>
              <p>Puntarenas, Uvita, 60504, Costa Rica</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Phone & Whatsapp</h3>
              <p>+1 (905) 598-0504</p>
            </div>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send a Message
            </Button>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white/80 py-10 px-6 rounded-lg shadow-lg z-9">
              <div className="mb-4 flex gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
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
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </section>
  )
}