import Image from 'next/image'
import { Star, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Automatic Auger Filling Machine',
    description: 'High-speed automatic filling for powders and granules with PLC control system.',
    capacity: '30-120 fills/min',
    accuracy: '±0.5%',
    featured: true,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/automatic_single_head_p-1-600x600-yMSCbZP1TWiSkb3ebnjZNXwPLcAbcE.jpg',
  },
  {
    id: 2,
    name: 'Semi-Automatic Auger Filler',
    description: 'Cost-effective solution for medium-scale production with easy operation.',
    capacity: '15-40 fills/min',
    accuracy: '±1%',
    featured: true,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semi-Automatic-Auger-Filler-Machine-CkSGg2oNVgiRjXeApQ26gaJtjj2byO.jpg',
  },
  {
    id: 3,
    name: 'Servo Auger Filling Machine',
    description: 'Precision servo motor driven filler for pharmaceutical applications.',
    capacity: '20-80 fills/min',
    accuracy: '±0.3%',
    featured: true,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automatic-Coler-Servro-Auger-Filler-Machine.webp-qIjNoZz5cpeSySivi8m2KcJkuFmvVV.jpeg',
  },
  {
    id: 4,
    name: 'Inline Auger Filling System',
    description: 'Integrated inline filling solution for continuous production lines.',
    capacity: '40-150 fills/min',
    accuracy: '±0.5%',
    featured: false,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopping-LJabH0x532ZGJHZC36mxJxdJtMhhLT.webp',
  },
  {
    id: 5,
    name: 'Dual Head Auger Filler',
    description: 'Double productivity with synchronized dual filling heads.',
    capacity: '60-200 fills/min',
    accuracy: '±0.5%',
    featured: false,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Semi-Automatic-Auger-Filler-Machine-CkSGg2oNVgiRjXeApQ26gaJtjj2byO.jpg',
  },
  {
    id: 6,
    name: 'Bottle Auger Filling Machine',
    description: 'Specialized filler for bottles and jars of various sizes.',
    capacity: '25-100 fills/min',
    accuracy: '±0.8%',
    featured: false,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/automatic_single_head_p-1-600x600-yMSCbZP1TWiSkb3ebnjZNXwPLcAbcE.jpg',
  },
]

const topProducts = products.filter(p => p.featured)

export function Products() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Top-Selling <span className="text-primary">Auger Filling Machines</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of precision-engineered auger filling machines designed for maximum efficiency and accuracy.
          </p>
        </div>

        {/* Top Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3" fill="currentColor" />
                    Best Seller
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="bg-muted px-3 py-1.5 rounded-lg">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-semibold text-foreground ml-1">{product.capacity}</span>
                  </div>
                  <div className="bg-muted px-3 py-1.5 rounded-lg">
                    <span className="text-muted-foreground">Accuracy:</span>
                    <span className="font-semibold text-primary ml-1">{product.accuracy}</span>
                  </div>
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Products Grid */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">All Products</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{product.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground text-xs">{product.capacity}</span>
                      <a href="#contact" className="text-primary font-semibold hover:underline text-sm">
                        Enquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer customized auger filling machines tailored to your specific production requirements. Contact us for a free consultation.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Request Custom Quote <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
