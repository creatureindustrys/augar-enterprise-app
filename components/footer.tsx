import { Phone, Mail, MapPin, Globe, MessageCircle, ExternalLink, PlayCircle } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About Us', href: '#about' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Contact', href: '#contact' },
]

const products = [
  'Automatic Auger Filler',
  'Semi-Automatic Filler',
  'Servo Auger Machine',
  'Inline Filling System',
  'Dual Head Filler',
  'Bottle Filler',
]

const industries = [
  'Pharmaceutical',
  'Food & Beverage',
  'Chemical',
  'Cosmetics',
  'Pesticides',
  'Dairy Products',
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-background">Auger Filling Machine</h3>
                <p className="text-xs text-background/60">Manufacturer & Exporter</p>
              </div>
            </div>
            <p className="text-background/70 mb-6 text-sm">
              Leading manufacturer of high-quality auger filling machines for powder, granule, and paste products. Trusted by 500+ companies across 25+ countries.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Website">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="External Link">
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                <PlayCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Industries */}
          <div>
            <h4 className="font-bold text-background mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a 
                    href="#products" 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-background mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919236556464" className="text-background/70 hover:text-primary transition-colors">
                    +91 92365 56464
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="mailto:info@augerfillingmachine.com" className="text-background/70 hover:text-primary transition-colors break-all">
                    info@augerfillingmachine.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-background/70 text-sm">
                  C-24, Transport Nagar,<br />
                  Lucknow, Uttar Pradesh 226012,<br />
                  India
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              © {currentYear} Auger Filling Machine Manufacturer. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
