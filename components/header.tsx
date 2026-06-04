'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About Us', href: '#about' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm gap-2">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+919236556464" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                <span>+91 92365 56464</span>
              </a>
              <a href="mailto:info@augerfillingmachine.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-3.5 w-3.5" />
                <span>info@augerfillingmachine.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>C-24, Transport Nagar, Lucknow, UP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl text-foreground leading-tight">Auger Filling Machine</h1>
              <p className="text-xs text-muted-foreground">Manufacturer & Exporter</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="hidden lg:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="inline-flex mt-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
