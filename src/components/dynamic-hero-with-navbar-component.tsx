'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Check, X, Upload } from 'lucide-react'
import { Lora, Cormorant_Garamond } from 'next/font/google'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const lora = Lora({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const tailwindToHex = (tailwindColor: string) => {
  const colorMap = {
    'text-black': '#000000',
    'text-white': '#FFFFFF',
    'text-gray-100': '#F7FAFC',
    'text-gray-200': '#EDF2F7',
    'text-gray-300': '#E2E8F0',
    'text-gray-400': '#CBD5E0',
    'text-gray-500': '#A0AEC0',
    'text-gray-600': '#718096',
    'text-gray-700': '#4A5568',
    'text-gray-800': '#2D3748',
    'text-gray-900': '#1A202C',
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return colorMap[tailwindColor] || '#000000';
};

const convertHexToTailwind = (hex: string) => {
  const rgb = parseInt(hex.slice(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = rgb & 0xff

  if (r === g && g === b) {
    if (r === 0) return 'text-black'
    if (r === 255) return 'text-white'
    return `text-gray-${Math.round(r / 255 * 900)}`
  }

  return 'text-gray-900'
}

export function DynamicHeroWithNavbarComponent() {
  const [editMode, setEditMode] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingText, setEditingText] = useState('')
  const [editingColor, setEditingColor] = useState('')
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bed%20suite%203-pVgueIl1Vk5hCjvzxu854gnfgM41B9.jpg")
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [content, setContent] = useState([
    { text: 'Boutique Hotel | Uvita, Costa Rica', color: 'text-gray-600' },
    { text: 'About', color: 'text-gray-600' },
    { text: 'Suites', color: 'text-gray-600' },
    { text: 'Tours & Attractions', color: 'text-gray-600' },
    { text: 'Gallery', color: 'text-gray-600' },
    { text: 'Contact', color: 'text-gray-600' },
    { text: 'Blog', color: 'text-gray-600' },
    { text: 'Boutique Hotel in the Heart of Uvita', color: 'text-white' },
    { text: 'Eccentric • Privacy • Comfort', color: 'text-white' },
    { text: 'Welcome to Hotel Daleese. Located on the Southern Pacific Coast of Costa Rica, our family-owned boutique hotel is situated in Uvita, Puntarenas. We look forward to your visit!', color: 'text-gray-800' },
  ])

  const handleEdit = (index: number) => {
    setEditingIndex(index)
    setEditingText(content[index].text)
    setEditingColor(tailwindToHex(content[index].color))
    setIsTooltipOpen(true)
  }

  const handleCancel = () => {
    setEditingIndex(null)
    setIsTooltipOpen(false)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageSave = () => {
    if (previewImage) {
      setBackgroundImage(previewImage)
      setPreviewImage(null)
    }
  }

  const handleImageCancel = () => {
    setPreviewImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={previewImage || backgroundImage}
        alt="Boutique hotel room with wooden slatted headboard and wicker lamps"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Hotel Daleese Logo"
                width={200}
                height={60}
                className="mb-2"
              />
              {editMode ? (
                <TooltipProvider>
                  <Tooltip open={editingIndex === 0 && isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                    <TooltipTrigger asChild>
                      <span className={`text-xs ${content[0].color} cursor-pointer`} onClick={() => handleEdit(0)}>
                        {content[0].text}
                      </span>
                    </TooltipTrigger>
                    {editingIndex === 0 && (
                      <TooltipContent side="bottom">
                        <div className="flex flex-col space-y-2">
                          <textarea
                            value={editingText}
                            onChange={(e) => {
                              setEditingText(e.target.value);
                              const newContent = [...content];
                              newContent[editingIndex] = { ...newContent[editingIndex], text: e.target.value };
                              setContent(newContent);
                            }}
                            className="w-full h-32 text-lg p-2 resize-none border rounded-md"
                          />
                          <div className="flex items-center space-x-2">
                            <label htmlFor="colorPicker" className="text-sm">Color:</label>
                            <input
                              id="colorPicker"
                              type="color"
                              value={editingColor}
                              onChange={(e) => {
                                const newColor = e.target.value;
                                setEditingColor(newColor);
                                const tailwindColor = convertHexToTailwind(newColor);
                                const newContent = [...content];
                                newContent[editingIndex] = { ...newContent[editingIndex], color: tailwindColor };
                                setContent(newContent);
                              }}
                              className="w-8 h-8"
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button size="sm" onClick={handleCancel}><X size={16} /></Button>
                          </div>
                        </div>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className={`text-xs ${content[0].color}`}>{content[0].text}</span>
              )}
            </div>
            <div>
              <Link
                href="/book"
                className="rounded border border-blue-500 px-4 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Book a Room
              </Link>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            {content.slice(1, 7).map((item, index) => (
              editMode ? (
                <TooltipProvider key={index}>
                  <Tooltip open={editingIndex === index + 1 && isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                    <TooltipTrigger asChild>
                      <span className={`text-sm ${item.color} cursor-pointer`} onClick={() => handleEdit(index + 1)}>
                        {item.text}
                      </span>
                    </TooltipTrigger>
                    {editingIndex === index + 1 && (
                      <TooltipContent side="bottom">
                        <div className="flex flex-col space-y-2">
                          <textarea
                            value={editingText}
                            onChange={(e) => {
                              setEditingText(e.target.value);
                              const newContent = [...content];
                              newContent[editingIndex] = { ...newContent[editingIndex], text: e.target.value };
                              setContent(newContent);
                            }}
                            className="w-full h-32 text-lg p-2 resize-none border rounded-md"
                          />
                          <div className="flex items-center space-x-2">
                            <label htmlFor="colorPicker" className="text-sm">Color:</label>
                            <input
                              id="colorPicker"
                              type="color"
                              value={editingColor}
                              onChange={(e) => {
                                const newColor = e.target.value;
                                setEditingColor(newColor);
                                const tailwindColor = convertHexToTailwind(newColor);
                                const newContent = [...content];
                                newContent[editingIndex] = { ...newContent[editingIndex], color: tailwindColor };
                                setContent(newContent);
                              }}
                              className="w-8 h-8"
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button size="sm" onClick={handleCancel}><X size={16} /></Button>
                          </div>
                        </div>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link key={index} href={`/${item.text.toLowerCase().replace(/ & /g, '-')}`} className={`text-sm ${item.color} hover:text-gray-900`}>
                  {item.text}
                </Link>
              )
            ))}
          </div>
        </div>
        <div className="mt-4 border-b border-gray-200"></div>
      </nav>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {editMode ? (
          <TooltipProvider>
            <Tooltip open={editingIndex === 7 && isTooltipOpen} onOpenChange={setIsTooltipOpen}>
              <TooltipTrigger asChild>
                <h1 className={`${lora.className} mb-4 text-4xl font-light md:text-5xl lg:text-6xl text-center cursor-pointer ${content[7].color}`} onClick={() => handleEdit(7)}>
                  {content[7].text}
                </h1>
              </TooltipTrigger>
              {editingIndex === 7 && (
                <TooltipContent side="bottom">
                  <div className="flex flex-col space-y-2">
                    <textarea
                      value={editingText}
                      onChange={(e) => {
                        setEditingText(e.target.value);
                        const newContent = [...content];
                        newContent[editingIndex] = { ...newContent[editingIndex], text: e.target.value };
                        setContent(newContent);
                      }}
                      className="w-full h-32 text-lg p-2 resize-none border rounded-md"
                    />
                    <div className="flex items-center space-x-2">
                      <label htmlFor="colorPicker" className="text-sm">Color:</label>
                      <input
                        id="colorPicker"
                        type="color"
                        value={editingColor}
                        onChange={(e) => {
                          const newColor = e.target.value;
                          setEditingColor(newColor);
                          const tailwindColor = convertHexToTailwind(newColor);
                          const newContent = [...content];
                          newContent[editingIndex] = { ...newContent[editingIndex], color: tailwindColor };
                          setContent(newContent);
                        }}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" onClick={handleCancel}><X size={16} /></Button>
                    </div>
                  </div>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ) : (
          <h1 className={`${lora.className} mb-4 text-4xl font-light md:text-5xl lg:text-6xl text-center ${content[7].color}`}>
            {content[7].text}
          </h1>
        )}
        <div className="mb-8 h-px w-1/4 bg-white" />
        {editMode ? (
          <TooltipProvider>
            <Tooltip open={editingIndex === 8 && isTooltipOpen} onOpenChange={setIsTooltipOpen}>
              <TooltipTrigger asChild>
                <p className={`${lora.className} mb-8 text-xl font-light italic md:text-2xl text-center cursor-pointer ${content[8].color}`} onClick={() => handleEdit(8)}>
                  {content[8].text}
                </p>
              </TooltipTrigger>
              {editingIndex === 8 && (
                <TooltipContent side="bottom">
                  <div className="flex flex-col space-y-2">
                    <textarea
                      value={editingText}
                      onChange={(e) => {

                        setEditingText(e.target.value);
                        const newContent = [...content];
                        newContent[editingIndex] = { ...newContent[editingIndex], text: e.target.value };
                        setContent(newContent);
                      }}
                      className="w-full h-32 text-lg p-2 resize-none border rounded-md"
                    />
                    <div className="flex items-center space-x-2">
                      <label htmlFor="colorPicker" className="text-sm">Color:</label>
                      <input
                        id="colorPicker"
                        type="color"
                        value={editingColor}
                        onChange={(e) => {
                          const newColor = e.target.value;
                          setEditingColor(newColor);
                          const tailwindColor = convertHexToTailwind(newColor);
                          const newContent = [...content];
                          newContent[editingIndex] = { ...newContent[editingIndex], color: tailwindColor };
                          setContent(newContent);
                        }}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" onClick={handleCancel}><X size={16} /></Button>
                    </div>
                  </div>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ) : (
          <p className={`${lora.className} mb-8 text-xl font-light italic md:text-2xl text-center ${content[8].color}`}>
            {content[8].text}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 text-center">
        {editMode ? (
          <TooltipProvider>
            <Tooltip open={editingIndex === 9 && isTooltipOpen} onOpenChange={setIsTooltipOpen}>
              <TooltipTrigger asChild>
                <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-lg cursor-pointer ${content[9].color}`} onClick={() => handleEdit(9)}>
                  {content[9].text}
                </p>
              </TooltipTrigger>
              {editingIndex === 9 && (
                <TooltipContent side="top">
                  <div className="flex flex-col space-y-2">
                    <textarea
                      value={editingText}
                      onChange={(e) => {
                        setEditingText(e.target.value);
                        const newContent = [...content];
                        newContent[editingIndex] = { ...newContent[editingIndex], text: e.target.value };
                        setContent(newContent);
                      }}
                      className="w-full h-32 text-lg p-2 resize-none border rounded-md"
                    />
                    <div className="flex items-center space-x-2">
                      <label htmlFor="colorPicker" className="text-sm">Color:</label>
                      <input
                        id="colorPicker"
                        type="color"
                        value={editingColor}
                        onChange={(e) => {
                          const newColor = e.target.value;
                          setEditingColor(newColor);
                          const tailwindColor = convertHexToTailwind(newColor);
                          const newContent = [...content];
                          newContent[editingIndex] = { ...newContent[editingIndex], color: tailwindColor };
                          setContent(newContent);
                        }}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" onClick={handleCancel}><X size={16} /></Button>
                    </div>
                  </div>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ) : (
          <p className={`${cormorantGaramond.className} mx-auto max-w-4xl text-lg ${content[9].color}`}>
            {content[9].text}
          </p>
        )}
      </div>
      <Button
        className="fixed top-4 right-4 z-50"
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? 'Exit Edit Mode' : 'Edit Content'}
      </Button>
      {editMode && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <Button onClick={() => fileInputRef.current?.click()}>
            <Upload className="mr-2 h-4 w-4" /> Upload Image
          </Button>
          {previewImage && (
            <>
              <Button onClick={handleImageSave}>
                <Check className="mr-2 h-4 w-4" /> Save Image
              </Button>
              <Button onClick={handleImageCancel}>
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  )
}