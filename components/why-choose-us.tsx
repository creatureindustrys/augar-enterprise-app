import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Wrench, 
  HeadphonesIcon, 
  Truck,
  Cog,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Premium Quality',
    description: 'Built with high-grade SS304/316 stainless steel and precision components for lasting performance.',
  },
  {
    icon: Shield,
    title: '2 Year Warranty',
    description: 'Comprehensive warranty coverage with free replacement of defective parts.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Strict adherence to delivery schedules with real-time tracking updates.',
  },
  {
    icon: Wrench,
    title: 'Customization',
    description: 'Machines tailored to your specific requirements, product types, and production needs.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support via phone, email, and remote assistance.',
  },
  {
    icon: Truck,
    title: 'Pan India Service',
    description: 'Service network across India with quick response time for maintenance and repairs.',
  },
  {
    icon: Cog,
    title: 'Easy Operation',
    description: 'User-friendly controls with touchscreen HMI and automated features for minimal training.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Advanced engineering ensures lower power consumption and reduced operational costs.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Trusted <span className="text-primary">Manufacturing Partner</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We go beyond just selling machines - we build lasting partnerships with our clients through quality, service, and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Upgrade Your Production Line?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Contact us today for a free consultation and get a customized quote for your filling machine requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
