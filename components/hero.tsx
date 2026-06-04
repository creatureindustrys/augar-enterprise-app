import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              ISO Certified Manufacturer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Premium <span className="text-primary">Auger Filling</span> Machines
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Leading manufacturer of high-precision auger filling machines for powder, granule & paste products. Trusted by 500+ companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3"
              >
                View Products
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Request Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Countries Export</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 md:p-12">
              <div className="aspect-square bg-card rounded-2xl shadow-2xl flex items-center justify-center border border-border overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/automatic_single_head_p-1-600x600-yMSCbZP1TWiSkb3ebnjZNXwPLcAbcE.jpg"
                  alt="Automatic Single Head Auger Filling Machine - Industrial Grade Powder Filler"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary">99.9%</p>
                <p className="text-xs text-muted-foreground">Accuracy</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
