"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Paintbrush, Palette } from 'lucide-react'

const primaryColors = [
  { name: 'Default Blue', value: 'hsl(221.2 83.2% 53.3%)' },
  { name: 'Red', value: 'hsl(0 84.2% 60.2%)' },
  { name: 'Green', value: 'hsl(142.1 76.2% 36.3%)' },
  { name: 'Purple', value: 'hsl(262.1 83.3% 57.8%)' },
  { name: 'Orange', value: 'hsl(24.6 95% 53.1%)' },
]

const backgroundColors = [
  { name: 'Default White', value: 'hsl(0 0% 100%)' },
  { name: 'Black', value: 'hsl(0 0% 0%)' },
  { name: 'Purple', value: 'hsl(270 50% 40%)' },
]

export function ColorPicker() {
  const [isPrimaryOpen, setIsPrimaryOpen] = useState(false)
  const [isBackgroundOpen, setIsBackgroundOpen] = useState(false)
  const [currentPrimary, setCurrentPrimary] = useState(primaryColors[0].value)
  const [currentBackground, setCurrentBackground] = useState(backgroundColors[0].value)

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', currentPrimary)
  }, [currentPrimary])

  useEffect(() => {
    document.documentElement.style.setProperty('--background', currentBackground)
    // Adjust text color based on background brightness
    const brightness = getBrightness(currentBackground)
    document.documentElement.style.setProperty('--foreground', brightness > 128 ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)')
  }, [currentBackground])

  // Function to calculate brightness of a color
  function getBrightness(color: string) {
    const hex = color.replace('hsl(', '').replace(')', '').split(' ')
    const rgb = hslToRgb(parseFloat(hex[0]), parseFloat(hex[1]) / 100, parseFloat(hex[2]) / 100)
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
  }

  // Function to convert HSL to RGB
  function hslToRgb(h: number, s: number, l: number) {
    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  return (
    <div className="flex space-x-2">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setIsPrimaryOpen(!isPrimaryOpen)
            setIsBackgroundOpen(false)
          }}
          aria-label="Change primary color"
        >
          <Paintbrush className="h-4 w-4" />
        </Button>
        {isPrimaryOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {primaryColors.map((color) => (
                <button
                  key={color.name}
                  className="flex w-full items-center px-4 py-2 text-sm hover:bg-muted"
                  role="menuitem"
                  onClick={() => {
                    setCurrentPrimary(color.value)
                    setIsPrimaryOpen(false)
                  }}
                >
                  <div
                    className="mr-3 h-4 w-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.value }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setIsBackgroundOpen(!isBackgroundOpen)
            setIsPrimaryOpen(false)
          }}
          aria-label="Change background color"
        >
          <Palette className="h-4 w-4" />
        </Button>
        {isBackgroundOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {backgroundColors.map((color) => (
                <button
                  key={color.name}
                  className="flex w-full items-center px-4 py-2 text-sm hover:bg-muted"
                  role="menuitem"
                  onClick={() => {
                    setCurrentBackground(color.value)
                    setIsBackgroundOpen(false)
                  }}
                >
                  <div
                    className="mr-3 h-4 w-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.value }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

