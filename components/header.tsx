"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { ColorPicker } from './color-picker'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">MCA Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-2">
            <ColorPicker />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div>
          <motion.nav 
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-background border-b md:hidden`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        </div>
      </div>
    </header>
  )
}

export default Header

