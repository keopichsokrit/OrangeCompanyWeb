import Link from 'next/link';
import { Button } from '../component/ui/button';
import { InteractiveButton } from '../component/ui/interactive-button';

interface CatalogData {
  title?: string;
  subtitle?: string;
  catalogs?: Array<{
    id: string;
    name: string;
    icon: string;
    description: string;
    items: number;
  }>;
  featured?: Array<{
    id: string;
    name: string;
    description: string;
    specs: string[];
  }>;
}

async function fetchCatalogData(): Promise<CatalogData> {
  try {
    // TODO: Replace with your actual backend API endpoint
    // const response = await fetch('http://localhost:3000/api/catalog');
    // const data = await response.json();
    // return data;

    return {
      title: 'Product Catalog',
      subtitle: 'Browse our complete collection of premium orange juice products',
      catalogs: [
        { id: '1', name: 'Original Collection', icon: '🍊', description: 'Classic orange juice varieties', items: 8 },
        { id: '2', name: 'Premium Line', icon: '👑', description: 'High-end cold-pressed options', items: 6 },
        { id: '3', name: 'Organic Range', icon: '🌱', description: 'Certified organic products', items: 5 },
        { id: '4', name: 'Seasonal Specials', icon: '🎉', description: 'Limited edition blends', items: 4 },
      ],
      featured: [
        {
          id: '1',
          name: 'Pure Cold-Pressed 1L',
          description: 'Our most popular product - fresh, pure, and nutrient-rich',
          specs: ['100% organic', 'Cold-pressed', 'No additives', '48-hour freshness guarantee'],
        },
        {
          id: '2',
          name: 'Daily Immune Blend 500ml',
          description: 'Enhanced with extra vitamin C for immune support',
          specs: ['2x Vitamin C', 'Antioxidant-rich', 'Perfect for breakfast', 'Smooth texture'],
        },
        {
          id: '3',
          name: 'Family Value Pack 2L',
          description: 'Great for families - more juice, better value',
          specs: ['Multi-serving', 'Better value', 'Easy storage', 'Family approved'],
        },
      ],
    };
  } catch (err) {
    console.error('Failed to fetch catalog data:', err);
    throw new Error('Failed to load catalog data');
  }
}

export default async function CatalogPage() {
  const data = await fetchCatalogData();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <span className="text-3xl">🍊</span>
              <span className="text-2xl font-bold text-orange-600">Orange Juice Co.</span>
            </Link>
            <div className="hidden sm:flex gap-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Home
              </Link>
              <a href="#collections" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Collections
              </a>
              <a href="#featured" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Featured
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-orange-100 mb-8">{data.subtitle}</p>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Product Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.catalogs && data.catalogs.map((catalog) => (
              <div
                key={catalog.id}
                className="bg-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{catalog.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{catalog.name}</h3>
                <p className="text-gray-600 mb-4">{catalog.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-orange-600">{catalog.items} products</span>
                  <InteractiveButton
                    size="sm"
                    variant="secondary"
                    actionType="console"
                    actionMessage={`Browsing ${catalog.name}`}
                  >
                    View
                  </InteractiveButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Customer Favorites & Best Sellers</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.featured && data.featured.map((product, index) => (
              <div
                key={product.id}
                className={`rounded-xl overflow-hidden border-2 transition-all hover:shadow-xl ${
                  index === 1 ? 'lg:scale-105 border-orange-500 shadow-lg' : 'border-orange-200'
                }`}
              >
                {index === 1 && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-bold">
                    ⭐ Best Seller
                  </div>
                )}
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-48 flex items-center justify-center text-6xl">
                  🍊
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="mb-6 space-y-2">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-orange-600 font-bold">✓</span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <InteractiveButton
                    size="md"
                    actionType="console"
                    actionMessage={`Selected ${product.name}`}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold"
                  >
                    Learn More
                  </InteractiveButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our Catalog?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">📋</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Selection</h3>
                <p className="text-gray-600">Choose from over 30 different products across multiple categories</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🏆</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">All products meet our strict quality standards and are lab-tested</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🚚</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your order delivered fresh within 48 hours of purchase</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">💯</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction</h3>
                <p className="text-gray-600">Guaranteed satisfaction or your money back - no questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect Orange Juice</h2>
          <p className="text-lg text-orange-100 mb-8">Browse our complete catalog and start your order today</p>
          <Link href="/shop">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
              Go to Shop
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
