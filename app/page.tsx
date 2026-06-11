import Link from "next/link";
import { Button } from "@/app/component/ui/button";
import { 
  ArrowRight, 
  ShoppingBag, 
  Leaf, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  HelpCircle,
  FileText,
  Mail
} from "lucide-react";
import Footer from "@/app/component/layout/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased">
      
      {/* Global Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left side: Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-orange-600 transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-2xl font-extrabold tracking-tight text-orange-600">Orange Co.</span>
            </div>
            
            {/* Right side wrapper: Contains links and auth buttons */}
            <div className="hidden sm:flex items-center gap-8">
              
              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm font-semibold text-orange-700 transition-colors">
                  Home
                </Link>
                <Link href="/shop" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                  Products
                </Link>
                <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                  Contact
                </Link>
              </div>

              {/* Divider line between nav links and auth actions */}
              <div className="h-4 w-px bg-orange-200"></div>

              {/* Auth Buttons - Rightest side */}
              <div className="flex items-center gap-4">
                <Link 
                  href="/login" 
                  className="text-sm font-bold text-orange-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-xl focus:outline-none "
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="text-sm font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all px-4 py-2 rounded-xl shadow-sm shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-95 transform focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                >
                  Sign Up
                </Link>
              </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Advertisement Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-transparent py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
                <Flame className="h-3.5 w-3.5 text-orange-600" /> Premium Citrus Experience
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none">
                Elevate Your Health With <span className="text-orange-600">Orange Co.</span>
              </h1>
              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                Discover our signature hand-picked citrus collections, raw cold-pressed configurations, and artisan apparel crafted for those who prioritize clean, premium quality.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button className="bg-orange-600 border-orange-600 text-white hover:bg-orange-700 font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-600/20 flex items-center gap-2 transition-all transform active:scale-95">
                    Shop Marketplace <ShoppingBag className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/learnmore">
                  <Button variant="secondary" className="bg-white !border-gray-300 !text-gray-700 hover:!bg-gray-50 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all border shadow-sm">
                    Learn Our Process <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Media Graphic Placeholder */}
            <div className="lg:col-span-5 w-full aspect-square max-w-md mx-auto bg-gradient-to-tr from-orange-100 to-orange-50 rounded-3xl border-2 border-dashed border-orange-200 flex flex-col items-center justify-center p-8 text-center shadow-inner">
              <div className="p-4 bg-white rounded-2xl shadow-md border border-orange-100 mb-4">
                <Leaf className="h-12 w-12 text-orange-600 animate-pulse" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">100% Organic Logistics</h3>
              <p className="text-xs text-gray-600 mt-2 max-w-xs leading-relaxed">
                Every batch follows a zero-compromise track record down from cold-pressed bottling variants straight to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars / Marketing Features Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Why Orange Co.</h2>
            <p className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Uncompromising standards from tree to doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 transition-all hover:shadow-md">
              <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Certified Pure</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Sourced exclusively from premium groves. No added sugars, no artificial additives, completely unfiltered raw profiles.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 transition-all hover:shadow-md">
              <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Monitored through tight batch configurations guaranteeing complete micro-nutrient density and premium flavor delivery.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 transition-all hover:shadow-md">
              <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Sustainable Shipping</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Cold-insulated eco-friendly shipping crates deployed straight within hours of production to protect pure structural compositions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Promotional Block */}
      <section className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-8 sm:p-12 shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Ready to taste the standard?</h2>
            <p className="text-orange-100 text-xs sm:text-sm mt-2 leading-relaxed">
              Explore your personalized configuration inside our live system platform now and grab 15% off your first subscription package.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link href="/shop">
              <Button className="bg-orange-600 text-white hover:bg-orange-700 font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/40 transition-all active:scale-95">
                Enter Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Global App Footer */}
      <Footer />
    </div>
  );
}