import { Users, Target, Award, Globe } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Leading <span className="text-primary">Auger Filling Machine</span> Manufacturer Since 2008
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              With over 15 years of experience, we have established ourselves as a trusted manufacturer and exporter of high-quality auger filling machines. Our commitment to precision engineering and customer satisfaction has made us the preferred choice for businesses across the globe.
            </p>
            <p className="text-muted-foreground mb-8">
              Based in Lucknow, Uttar Pradesh - we specialize in designing and manufacturing filling machines that cater to diverse industries including pharmaceuticals, food processing, chemicals, and cosmetics. Our machines are known for their reliability, accuracy, and durability.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">50+ skilled engineers and technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Precision Focus</h4>
                  <p className="text-sm text-muted-foreground">99.9% accuracy in every machine</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">ISO Certified</h4>
                  <p className="text-sm text-muted-foreground">ISO 9001:2015 certified company</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">Exporting to 25+ countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-8">
              <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-muted rounded-xl">
                    <p className="text-4xl font-bold text-primary mb-2">15+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-xl">
                    <p className="text-4xl font-bold text-primary mb-2">500+</p>
                    <p className="text-sm text-muted-foreground">Machines Delivered</p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-xl">
                    <p className="text-4xl font-bold text-primary mb-2">25+</p>
                    <p className="text-sm text-muted-foreground">Countries Served</p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-xl">
                    <p className="text-4xl font-bold text-primary mb-2">98%</p>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-foreground mb-3">Our Mission</h4>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {`"To provide innovative, reliable, and cost-effective filling solutions that help businesses achieve maximum productivity and efficiency."`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
