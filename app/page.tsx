import Link from 'next/link';
import { Button } from './component/ui/button';
import { InteractiveButton } from './component/ui/interactive-button';

interface OrangeJuiceData {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  products?: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
  }>;
}

// Fetch data from backend - TODO: Implement your backend API call here
async function fetchOrangeJuiceData(): Promise<OrangeJuiceData> {
  try {
    // TODO: Replace with your actual backend API endpoint
    // const response = await fetch('http://localhost:3000/api/orange-juice');
    // const data = await response.json();
    // return data;

    // Default data for demonstration
    return {
      title: 'Orange Juice Co.',
      subtitle: 'Pure. Fresh. Natural.',
      description: 'Crafted from the finest oranges, delivered fresh to your doorstep',
      features: [
        { id: '1', title: 'Organic Sourcing', description: 'Certified organic oranges from sustainable farms' },
        { id: '2', title: 'Zero Preservatives', description: 'No artificial additives or added sugars' },
        { id: '3', title: 'Cold Pressed', description: 'Preserves maximum nutrition and natural flavor' },
        { id: '4', title: 'Daily Fresh', description: 'Produced fresh daily for optimal taste' },
        { id: '5', title: 'Rich in Vitamin C', description: 'Essential nutrients for your healthy lifestyle' },
        { id: '6', title: 'Eco-Friendly', description: 'Sustainable packaging and carbon-neutral shipping' },
      ],
      products: [
        { id: '1', name: 'Pure Orange Juice 1L', price: '$8.99', image: '🍊' },
        { id: '2', name: 'Premium Cold Pressed 500ml', price: '$6.99', image: '🍊' },
        { id: '3', name: 'Family Pack 2L', price: '$14.99', image: '🍊' },
      ],
    };
  } catch (err) {
    console.error('Failed to fetch data:', err);
    throw new Error('Failed to load Orange Juice data');
  }
}

export default async function WelcomePage() {
  const data = await fetchOrangeJuiceData();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍊</span>
              <span className="text-2xl font-bold text-orange-600">Orange Juice Co.</span>
            </div>
            <div className="hidden sm:flex gap-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Features
              </a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Products
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✓ 100% Organic & Natural
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-2xl text-orange-600 font-semibold mb-6">
                {data.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {data.description || 'Discover the perfect blend of taste and nutrition. Our premium orange juice is crafted with care to bring you the best nature has to offer.'}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/home">
                    <Button
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white font-bold"
                    >
                    Home
                    </Button>
                </Link>
                <Link href="/learnmore">
                <InteractiveButton
                  size="lg"
                  variant="secondary"
                  actionType="console"
                  actionMessage="Learn more clicked"
                  className="text-white font-bold"
                >
                  Learn More
                </InteractiveButton>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-orange-200">
                <div>
                  <p className="text-2xl font-bold text-orange-600">5000+</p>
                  <p className="text-gray-600 text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">15+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">100%</p>
                  <p className="text-gray-600 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl">
                <div className="text-7xl mb-6 animate-bounce">🍊</div>
                <p className="text-2xl font-bold mb-4">Fresh Orange Juice</p>
                <p className="text-orange-100">Delivered to your door daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">Excellence in every glass</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features && data.features.length > 0 ? (
              data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {['🌱', '✨', '❄️', '⏰', '💪', '🌍'][parseInt(feature.id) - 1]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))
            ) : (
              <>
                <div className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Organic Sourcing</h3>
                  <p className="text-gray-600">Certified organic oranges from sustainable farms</p>
                </div>
                <div className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Preservatives</h3>
                  <p className="text-gray-600">No artificial additives or added sugars</p>
                </div>
                <div className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">❄️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cold Pressed</h3>
                  <p className="text-gray-600">Preserves maximum nutrition and natural flavor</p>
                </div>
                <div className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⏰</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Fresh</h3>
                  <p className="text-gray-600">Produced fresh daily for optimal taste</p>
                </div>
                <div className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💪</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Rich in Vitamin C</h3>
                  <p className="text-gray-600">Essential nutrients for your healthy lifestyle</p>
                </div>
                <div className="group bg-white p-8 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
                  <p className="text-gray-600">Sustainable packaging and carbon-neutral shipping</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600">Choose what works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.products && data.products.length > 0 ? (
              data.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-48 flex items-center justify-center text-6xl">
                    🍊
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-3xl font-bold text-orange-600 mb-6">{product.price}</p>
                    <InteractiveButton
                      size="md"
                      actionType="console"
                      actionMessage={`Added ${product.name} to cart`}
                      className="w-full bg-black hover:bg-gray-800 text-white font-bold"
                    >
                      Add to Cart
                    </InteractiveButton>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-48 flex items-center justify-center text-6xl">
                    🍊
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pure Orange Juice 1L</h3>
                    <p className="text-3xl font-bold text-orange-600 mb-6">$8.99</p>
                    <Button size="md" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-48 flex items-center justify-center text-6xl">
                    🍊
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Cold Pressed 500ml</h3>
                    <p className="text-3xl font-bold text-orange-600 mb-6">$6.99</p>
                    <Button size="md" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-48 flex items-center justify-center text-6xl">
                    🍊
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Family Pack 2L</h3>
                    <p className="text-3xl font-bold text-orange-600 mb-6">$14.99</p>
                    <Button size="md" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg text-orange-100 mb-10">
            Subscribe to our newsletter for exclusive offers, recipes, and wellness tips delivered fresh to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
              Subscribe
            </Button>
          </div>

          <p className="text-orange-100 text-sm">No spam, just pure goodness. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍊</span>
                <span className="text-xl font-bold">Orange Juice Co.</span>
              </div>
              <p className="text-gray-400">Freshness in every glass</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">Shop</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Recipes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Terms</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              &copy; 2026 Orange Juice Co. All rights reserved. | Freshness Guaranteed | Quality Assured
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
