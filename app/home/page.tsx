import { Button } from '../component/ui/button';
import { InteractiveButton } from '../component/ui/interactive-button';
import Link from 'next/link';

interface HomeData {
  featuredProducts?: Array<{
    id: string;
    name: string;
    price: string;
    description: string;
  }>;
  testimonials?: Array<{
    id: string;
    name: string;
    rating: number;
    comment: string;
  }>;
  categories?: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
}

// Fetch data from backend - TODO: Implement your backend API call here
async function fetchHomeData(): Promise<HomeData> {
  try {
    // TODO: Replace with your actual backend API endpoint
    // const response = await fetch('http://localhost:3000/api/home');
    // const data = await response.json();
    // return data;

    // Default data for demonstration
    return {
      featuredProducts: [
        { id: '1', name: 'Fresh Morning Blend', price: '$9.99', description: 'Start your day energized' },
        { id: '2', name: 'Immunity Boost', price: '$10.99', description: 'Extra vitamin C boost' },
        { id: '3', name: 'Tropical Paradise', price: '$8.99', description: 'Blended with tropical flavors' },
      ],
      testimonials: [
        { id: '1', name: 'Sarah Johnson', rating: 5, comment: 'The best orange juice I have ever tasted!' },
        { id: '2', name: 'Mike Chen', rating: 5, comment: 'Fresh, natural, and delicious. Highly recommend!' },
        { id: '3', name: 'Emily Davis', rating: 5, comment: 'Worth every penny. Tastes like home!' },
      ],
      categories: [
        { id: '1', name: 'Cold Pressed', icon: '❄️' },
        { id: '2', name: 'Blended', icon: '🥤' },
        { id: '3', name: 'Organic', icon: '🌱' },
      ],
    };
  } catch (err) {
    console.error('Failed to fetch home data:', err);
    throw new Error('Failed to load home data');
  }
}

export default async function HomePage() {
  const data = await fetchHomeData();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Welcome Home!</h1>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Experience the freshness of premium orange juice delivered right to your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
            <InteractiveButton
              size="lg"
              actionType="console"
              actionMessage="Shop now clicked"
              className="bg-black hover:bg-gray-800 text-white font-bold"
            >
              Shop Now
            </InteractiveButton>
            </Link>
            <Link href="/catalog">
            <InteractiveButton
              size="lg"
              variant="secondary"
              actionType="console"
              actionMessage="View catalog clicked"
            >
              View Catalog
            </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.categories && data.categories.length > 0 ? (
              data.categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white p-8 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer text-center"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">Browse our {category.name.toLowerCase()} collection</p>
                </div>
              ))
            ) : (
              <>
                <div className="bg-white p-8 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer text-center">
                  <div className="text-5xl mb-4">❄️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Cold Pressed</h3>
                  <p className="text-gray-600">Browse our cold pressed collection</p>
                </div>
                <div className="bg-white p-8 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer text-center">
                  <div className="text-5xl mb-4">🥤</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blended</h3>
                  <p className="text-gray-600">Browse our blended collection</p>
                </div>
                <div className="bg-white p-8 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer text-center">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Organic</h3>
                  <p className="text-gray-600">Browse our organic collection</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Customer Favorites This Week</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.featuredProducts && data.featuredProducts.length > 0 ? (
              data.featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-orange-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-40 flex items-center justify-center text-5xl">
                    🍊
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                      <InteractiveButton
                        size="sm"
                        actionType="console"
                        actionMessage={`Added ${product.name}`}
                        className="bg-black hover:bg-gray-800 text-white font-bold"
                      >
                        Add
                      </InteractiveButton>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="bg-orange-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-40 flex items-center justify-center text-5xl">
                    🍊
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Morning Blend</h3>
                    <p className="text-gray-600 text-sm mb-4">Start your day energized</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">$9.99</span>
                      <Button size="sm" className="bg-black hover:bg-gray-800 text-white font-bold">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-40 flex items-center justify-center text-5xl">
                    🍊
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Immunity Boost</h3>
                    <p className="text-gray-600 text-sm mb-4">Extra vitamin C boost</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">$10.99</span>
                      <Button size="sm" className="bg-black hover:bg-gray-800 text-white font-bold">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-40 flex items-center justify-center text-5xl">
                    🍊
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tropical Paradise</h3>
                    <p className="text-gray-600 text-sm mb-4">Blended with tropical flavors</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">$8.99</span>
                      <Button size="sm" className="bg-black hover:bg-gray-800 text-white font-bold">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-center">
            <InteractiveButton
              size="lg"
              variant="secondary"
              actionType="console"
              actionMessage="View all products"
            >
              View All Products
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Join thousands of satisfied customers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials && data.testimonials.length > 0 ? (
              data.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-bold text-gray-900">— {testimonial.name}</p>
                </div>
              ))
            ) : (
              <>
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"The best orange juice I have ever tasted!"</p>
                  <p className="font-bold text-gray-900">— Sarah Johnson</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Fresh, natural, and delicious. Highly recommend!"</p>
                  <p className="font-bold text-gray-900">— Mike Chen</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Worth every penny. Tastes like home!"</p>
                  <p className="font-bold text-gray-900">— Emily Davis</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-500">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-4xl font-bold mb-6">Get 20% Off Your First Order</h2>
          <p className="text-lg text-orange-100 mb-8">Use code WELCOME20 at checkout</p>
          <InteractiveButton
            size="lg"
            actionType="console"
            actionMessage="Shop with discount"
            className="bg-black hover:bg-gray-800 text-white font-bold"
          >
            Shop Now
          </InteractiveButton>
        </div>
      </section>
    </div>
  );
}
