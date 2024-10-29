'use client'

import { useState } from 'react'
import { Lora } from 'next/font/google'

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
    hasPet: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section className={`bg-white text-black py-16 ${lora.className} pt-[250px]`}>
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl  mb-6 text-center">Book a room</h2>
        <p className="mb-8 text-center">
          If your dates are at all flexible, please let us know. We book up quickly, especially
          during high season (December to April), but would love to find a way to host you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2">Name</label>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-black"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-black"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-black"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Phone</label>
            <div className="flex gap-4">
              <select
                name="phoneCountry"
                value={formData.phoneCountry}
                onChange={handleChange}
                className="w-1/3 p-2 border border-black"
              >
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                {/* Add more country options as needed */}
              </select>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-2/3 p-2 border border-black"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="arrivalDate" className="block mb-2">Date of Arrival</label>
            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="w-full p-2 border border-black"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="departureDate" className="block mb-2">Date of Departure</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full p-2 border border-black"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="adults" className="block mb-2">Number of Adults</label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full p-2 border border-black"
              required
            >
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="kids" className="block mb-2">Number of Kids</label>
            <select
              id="kids"
              name="kids"
              value={formData.kids}
              onChange={handleChange}
              className="w-full p-2 border border-black"
              required
            >
              <option value="">Select an option</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2">Do you have a pet?</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasPet"
                  value="Yes"
                  checked={formData.hasPet === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasPet"
                  value="No"
                  checked={formData.hasPet === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}