import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Globe, 
  ShieldCheck, 
  Users,
  Sparkles
} from "lucide-react";

import Link from "next/link";

// Import your global modular elements from the layout folder directory
import Footer from "@/app/component/layout/footer";

export const dynamic = "force-static"; // Ensures this page renders as a static asset

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased">
      
      {/* Global Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-orange-600 transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-2xl font-extrabold tracking-tight text-orange-600">Orange Co.</span>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Home
              </Link>
              <a href="/shop" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Products
              </a>
              <a href="#contact" className="text-sm font-semibold text-orange-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Structural Content Box */}
      <main className="flex-grow">
        
        {/* Hero Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-transparent py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
              <MessageSquare className="h-3.5 w-3.5 text-orange-600" /> Global Relations Hub
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none max-w-4xl mx-auto">
              Connect With Our <span className="text-orange-600">Production Network</span>
            </h1>
            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you are managing an enterprise subscription build, tracking cold-insulated freight drops, or seeking partnership configurations, our operational nodes are ready.
            </p>
          </div>
        </section>

        {/* Core Contact Grid Methods */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Communication Node */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 transition-all hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Digital Operations</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    For pipeline support, order modifications, or api platform data synchronization requests.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">General Enquiries</p>
                  <p className="text-sm font-bold text-orange-700">hello@orangeco.system</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider pt-2">Corporate Contracts</p>
                  <p className="text-sm font-bold text-gray-900">ops@orangeco.system</p>
                </div>
              </div>

              {/* Voice Infrastructure */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 transition-all hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Voice Channels</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Direct structural routing to our logistics desks and grove management operations.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">North America Hub</p>
                  <p className="text-sm font-bold text-orange-700">+1 (800) 555-0192</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider pt-2">International Direct</p>
                  <p className="text-sm font-bold text-gray-900">+1 (415) 555-0147</p>
                </div>
              </div>

              {/* Physical Logistics Headquarters */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 transition-all hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Main Headquarters</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Our central logistics administration command unit handles cold-chain deployment tracking.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Location Framework</p>
                  <p className="text-sm font-bold text-gray-900 leading-snug">
                    742 Citrus Pipeline Way,<br />
                    Suite 400, Agro Valley, CA 94025
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Operational SLA and Time-windows */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-orange-50 rounded-3xl p-8 sm:p-12 border border-orange-100 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-orange-100 text-orange-600 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Processing Hours</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Logistics support operations run continuously from Monday through Friday, 06:00 to 18:00 PST. 
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-orange-100 text-orange-600 flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">SLA Response Metrics</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    All digital structural issues or pipeline tracking data adjustments receive targeted reviews within 4 business hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-orange-100 text-orange-600 flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Wholesale Configurations</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Looking to implement large volume distributions? Contact our wholesale relations desk directly inside the Digital Operations mail array.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Distribution Nodes Overview */}
        <section className="py-16 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1 text-orange-600 font-bold uppercase tracking-widest text-xs mb-2">
                <Globe className="h-3.5 w-3.5" /> Distribution Framework
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                Active Regional Logistics Facilities
              </h3>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                Our cold-insulated container assets deploy out of three crucial coastal configurations to preserve raw composition integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="p-4 border-l-2 border-orange-500 pl-4">
                <p className="font-bold text-gray-900 text-sm">West Coast Node</p>
                <p className="text-gray-500 text-xs mt-0.5">Los Angeles / Oakland Facilities</p>
              </div>
              <div className="p-4 border-l-2 border-orange-500 pl-4">
                <p className="font-bold text-gray-900 text-sm">East Coast Node</p>
                <p className="text-gray-500 text-xs mt-0.5">Newark / Savannah Routing</p>
              </div>
              <div className="p-4 border-l-2 border-orange-500 pl-4">
                <p className="font-bold text-gray-900 text-sm">Southern Array</p>
                <p className="text-gray-500 text-xs mt-0.5">Houston / Miami Ports</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Corporate Footer */}
      <Footer />

    </div>
  );
}