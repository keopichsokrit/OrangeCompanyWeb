import Link from 'next/link';
import { Button } from '../component/ui/button';
import { InteractiveButton } from '../component/ui/interactive-button';

interface LearnMoreData {
  title?: string;
  subtitle?: string;
  sections?: Array<{
    id: string;
    title: string;
    icon: string;
    content: string;
  }>;
  benefits?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

async function fetchLearnMoreData(): Promise<LearnMoreData> {
  try {
    // TODO: Replace with your actual backend API endpoint
    // const response = await fetch('http://localhost:3000/api/learn-more');
    // const data = await response.json();
    // return data;

    return {
      title: 'Learn More About Orange Juice',
      subtitle: 'Health benefits and nutrition facts',
      sections: [
        {
          id: '1',
          title: 'Why Orange Juice?',
          icon: '🍊',
          content: 'Orange juice is packed with vitamin C, antioxidants, and natural sugars that provide energy and support your immune system. Our fresh-pressed juice retains all the beneficial nutrients found in fresh oranges.',
        },
        {
          id: '2',
          title: 'Our Process',
          icon: '⚙️',
          content: 'We use cold-press technology to extract juice while preserving maximum nutrition. Our oranges are selected daily for ripeness and quality, ensuring the freshest juice delivered to your door.',
        },
        {
          id: '3',
          title: 'Sustainability',
          icon: '🌍',
          content: 'We are committed to sustainable farming practices. Our oranges come from certified organic farms that use eco-friendly methods to protect the environment.',
        },
      ],
      benefits: [
        { id: '1', title: 'Rich in Vitamin C', description: 'Supports immune health and skin vitality' },
        { id: '2', title: 'Natural Energy', description: 'Provides quick energy boost from natural sugars' },
        { id: '3', title: 'Antioxidants', description: 'Contains flavonoids and polyphenols' },
        { id: '4', title: 'Heart Health', description: 'Supports cardiovascular wellness' },
        { id: '5', title: 'Bone Strength', description: 'Contains calcium for strong bones' },
        { id: '6', title: 'Hydration', description: 'Great source of electrolytes and water' },
      ],
    };
  } catch (err) {
    console.error('Failed to fetch learn more data:', err);
    throw new Error('Failed to load learn more data');
  }
}

export default async function LearnMorePage() {
  const data = await fetchLearnMoreData();

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
              <a href="#benefits" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Benefits
              </a>
              <a href="#process" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Our Process
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

      {/* Information Sections */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.sections && data.sections.map((section) => (
              <div
                key={section.id}
                className="p-8 rounded-xl border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Health Benefits</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Discover why orange juice is part of a healthy lifestyle</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits && data.benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {['💪', '⚡', '✨', '❤️', '🦴', '💧'][parseInt(benefit.id) - 1]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Science-Backed Benefits</h2>
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Shows:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
                <span>One glass of orange juice contains 100% of daily recommended Vitamin C intake</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
                <span>Reduces risk of heart disease and supports cardiovascular health</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
                <span>Improves immunity and reduces common cold duration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
                <span>Contains natural anti-inflammatory compounds</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Benefits?</h2>
          <p className="text-lg text-orange-100 mb-8">Start your healthy journey with our premium orange juice today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
                Shop Now
              </Button>
            </Link>
            <InteractiveButton
              size="lg"
              variant="secondary"
              actionType="console"
              actionMessage="Newsletter signup clicked"
            >
              Subscribe for Updates
            </InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}
