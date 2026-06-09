import Link from 'next/link';
import { Button } from '../component/ui/button';
import { InteractiveButton } from '../component/ui/interactive-button';

interface ShopData {
  title?: string;
  subtitle?: string;
  categories?: Array<{
    id: string;
    name: string;
    icon: string;
    products: number;
  }>;
  products?: Array<{
    id: string;
    name: string;
    price: string;
    description: string;
    category: string;
  }>;
}

async function fetchShopData(): Promise<ShopData> {
  try {
    // TODO: Replace with your actual backend API endpoint
    // const response = await fetch('http://localhost:3000/api/shop');
    // const data = await response.json();
    // return data;

    return {
      title: 'Shop Our Collection',
      subtitle: 'Browse our premium orange juice selection',
      categories: [
        { id: '1', name: 'Cold Pressed', icon: '❄️', products: 5 },
        { id: '2', name: 'Organic', icon: '🌱', products: 4 },
        { id: '3', name: 'Blended', icon: '🥤', products: 6 },
      ],
      products: [
        { id: '1', name: 'Pure Orange Juice 1L', price: '$8.99', description: 'Fresh squeezed orange juice', category: 'Cold Pressed' },
        { id: '2', name: 'Premium Cold Pressed 500ml', price: '$6.99', description: 'Maximum nutrients preserved', category: 'Cold Pressed' },
        { id: '3', name: 'Organic Orange Juice 1L', price: '$9.99', description: 'Certified organic oranges', category: 'Organic' },
        { id: '4', name: 'Family Pack 2L', price: '$14.99', description: 'Perfect for the whole family', category: 'Blended' },
        { id: '5', name: 'Tropical Blend 750ml', price: '$7.99', description: 'Mixed with tropical fruits', category: 'Blended' },
      ],
    };
  } catch (err) {
    console.error('Failed to fetch shop data:', err);
    throw new Error('Failed to load shop data');
  }
}

export default async function ShopPage() {
  const data = await fetchShopData();

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
                Main Page
              </Link>
              <a href="#categories" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Categories
              </a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Products
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-orange-100 mb-8">{data.subtitle}</p>
          <Link href="/">
            <Button className="bg-black hover:bg-gray-800 text-white font-bold">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.categories && data.categories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.products} products available</p>
                <InteractiveButton
                  size="sm"
                  variant="secondary"
                  actionType="console"
                  actionMessage={`Browsing ${category.name} category`}
                >
                  Browse
                </InteractiveButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">All Products</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Choose from our premium selection</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data.products && data.products.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-32 rounded-lg flex items-center justify-center text-5xl mb-6">
                  🍊
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-xs font-semibold text-orange-600 mb-4">Category: {product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-orange-600">{product.price}</span>
                  <InteractiveButton
                    size="sm"
                    actionType="console"
                    actionMessage={`Added ${product.name} to cart - Price: ${product.price}`}
                    className="bg-black hover:bg-gray-800 text-white font-bold"
                  >
                    Add
                  </InteractiveButton>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Ready to place an order?</p>
            <InteractiveButton
              size="lg"
              actionType="console"
              actionMessage="Proceeding to checkout"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold"
            >
              Proceed to Checkout
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-lg text-orange-100 mb-8">Contact our team for personalized recommendations</p>
          <InteractiveButton
            size="lg"
            actionType="console"
            actionMessage="Customer support contacted"
            className="bg-black hover:bg-gray-800 text-white font-bold"
          >
            Contact Support
          </InteractiveButton>
        </div>
      </section>
    </div>
  );
}
