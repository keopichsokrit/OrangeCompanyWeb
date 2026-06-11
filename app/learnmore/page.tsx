import Link from "next/link";
import { Button } from "@/app/component/ui/button";
import { 
  ArrowRight, 
  ShoppingBag, 
  Leaf, 
  Flame, 
  Sparkles, 
  HelpCircle,
  FileText,
  Mail,
  History,
  Sun,
  Sprout,
  CheckCircle,
  TrendingUp,
  Globe
} from "lucide-react";

import Footer from "../component/layout/footer";

export default function LearnMorePage() {
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
              <Link href="/shop" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Products
              </Link>
              <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section: The Philosophy */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-transparent py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
                <Leaf className="h-3.5 w-3.5 text-orange-600" /> Deeply Rooted Standards
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none">
                Crafting The Purest <span className="text-orange-600">Citrus Ecosystem</span>
              </h1>
              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                We believe that premium health requires uncompromising configurations. From ancestral micro-groves to zero-oxidation extraction pipelines, explore how we are shifting the structural paradigm of natural wellness.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button className="bg-orange-600 border-orange-600 text-white hover:bg-orange-700 font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-600/20 flex items-center gap-2 transition-all transform active:scale-95">
                    Explore Marketplace <ShoppingBag className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Media Graphic */}
            <div className="lg:col-span-5 w-full aspect-square max-w-md mx-auto bg-gradient-to-tr from-orange-100 to-orange-50 rounded-3xl border-2 border-dashed border-orange-200 flex flex-col items-center justify-center p-8 text-center shadow-inner">
              <div className="p-4 bg-white rounded-2xl shadow-md border border-orange-100 mb-4">
                <Sun className="h-12 w-12 text-orange-600 animate-spin-slow" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">300+ Days of Sunlight</h3>
              <p className="text-xs text-gray-600 mt-2 max-w-xs leading-relaxed">
                Our geographical coordinates ensure each single-origin citrus grove maximizes solar sugar configurations naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: History of the Company */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                <History className="h-3.5 w-3.5 text-orange-600" /> Corporate Legacy
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                Our Journey From <span className="text-orange-600">Grove To Global</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Founded in 2018, Orange Co. started as a modular regional agriculture initiative aimed at resolving high sugar structural decay in commercial juices. By configuring decentralized supply chains, we bypassed typical industrial pasteurization bottlenecks.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Today, we maintain fully trackable biological assets across thousands of organic acres, delivering cold-insulated wellness arrays right to your production build within hours of extraction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-black text-3xl text-orange-600">2018</h3>
                <p className="font-bold text-gray-900 text-sm mt-1">Foundation</p>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">Established original test groves focused strictly on sub-tropical micro-climates.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-black text-3xl text-orange-600">2021</h3>
                <p className="font-bold text-gray-900 text-sm mt-1">Zero-Oxidation Cold Press</p>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">Patented our private logistics containment unit to drop degradation to absolute zero.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-black text-3xl text-orange-600">2024</h3>
                <p className="font-bold text-gray-900 text-sm mt-1">Marketplace Launch</p>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">Merged our farming assets into a live integrated e-commerce infrastructure subscription platform.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-black text-3xl text-orange-600">Active</h3>
                <p className="font-bold text-gray-900 text-sm mt-1">Global Scale</p>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">Optimizing custom nutrient delivery metrics across multiple coastal hubs daily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Pillars (The Farm & The Oranges) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Technical Archetype</h2>
            <p className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Biological Integrity Sustained Through Science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Farm Overview */}
            <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="h-12 w-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Sprout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-gray-900">The Agricultural Base</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Our volcanic-soil farm variants operate via sustainable permaculture architecture. We rely exclusively on localized rainwater collectors and bio-available mineral nutrients. We completely avoid synthetic chemical shielding to allow soil microbiology profiles to maximize chemical plant expression naturally.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2 text-orange-700"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Zero Synthetic Insecticide Protocols</li>
                <li className="flex items-center gap-2 text-orange-700"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Volcanic Basalt Mineral Optimization</li>
                <li className="flex items-center gap-2 text-orange-700"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Regenerative Agroforestry Cover Patterns</li>
              </ul>
            </div>

            {/* The Oranges Overview */}
            <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="h-12 w-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-gray-900">The Citrus Cultivars</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                We select specific non-GMO heritage cultivars built for high enzymatic resilience and optimal structural acid balance. Every unit is monitored for optimal Brix levels (natural sugar density metric) before being hand-pulled from parent nodes by skilled harvesting specialists.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2 text-orange-700"><CheckCircle className="h-4 w-4 flex-shrink-0" /> High-Density Bioflavonoid Profiles</li>
                <li className="flex items-center gap-2 text-orange-700"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Balanced Brix-to-Acid Ratios</li>
                <li className="flex items-center gap-2 text-orange-700"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Selected For Elevated Vitamin C Density</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Cold Pressed Configuration Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">The Extraction Matrix</h2>
            <p className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              How We Protect Raw Liquid State
            </p>
          </div>

          <div className="relative border-l-2 border-orange-200 ml-4 md:ml-32 space-y-12">
            {/* Step 1 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[13px] top-0 bg-orange-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                1
              </div>
              <h4 className="font-bold text-gray-900 text-base">Cryo-Sanitization Wash</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                Oranges undergo an immediate pure chilled-water ozone bath right off the logistics truck to strip micro-contaminants without utilizing thermal shock patterns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[13px] top-0 bg-orange-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                2
              </div>
              <h4 className="font-bold text-gray-900 text-base">Hydraulic Non-Thermal Pressing</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                Thousands of pounds of targeted pressure extract raw fluid vectors under specialized nitrogen chambers, ensuring oxygen never interacts with vital enzymes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[13px] top-0 bg-orange-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                3
              </div>
              <h4 className="font-bold text-gray-900 text-base">Eco-Insulated Freight Dispatch</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                The resulting blend passes immediately into zero-plastic custom insulated freight structures, moving to local distribution points under strict temperature lockouts.
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