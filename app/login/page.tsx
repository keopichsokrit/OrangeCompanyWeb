import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import Footer from "../component/layout/footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased">
      
      {/* Global Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left side: Logo */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-orange-600 transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-2xl font-extrabold tracking-tight text-orange-600">Orange Co.</span>
            </Link>
            
            {/* Right side wrapper: Navigation Links */}
            <div className="hidden sm:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Products
              </Link>
              {/* <Link href="/learnmore" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Our Story
              </Link> */}
            </div>

          </div>
        </div>
      </nav>

      {/* Main Split Layout Framework */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-4rem)]">
        
        {/* LEFT COLUMN: Visual Brand Engine */}
        <section className="hidden lg:flex lg:col-span-6 xl:col-span-7 bg-gradient-to-br from-orange-50 via-orange-100/40 to-transparent p-12 flex-col justify-between relative overflow-hidden border-r border-gray-100">
          
          {/* Subtle Ambient Background Element */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl my-auto space-y-8">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              <Sparkles className="h-3.5 w-3.5 text-orange-600" /> 100% Organic & Fresh
            </div>
            
            <h2 className="text-4xl xl:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              From Sunny Groves <br />
              <span className="text-orange-600">Direct To Your Door</span>
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed">
              Log into your account to manage your seasonal citrus subscriptions, track your cold-pressed juice deliveries, and unlock exclusive rewards.
            </p>

            {/* Feature Checkmarks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span>Hand-picked at peak ripeness (Optimal Brix sugar levels)</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span>Cold-insulated shipping to guarantee crisp freshness</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span>Zero artificial additives, preservatives, or added sugars</span>
              </div>
            </div>

            {/* Text Replacement Showcase Frame */}
            <div className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200/60 relative group">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-orange-600">
                  Our Quality Guarantee
                </div>
                <p className="text-2xl font-extrabold tracking-tight text-gray-900 font-serif italic">
                  "Every bottle of cold-pressed juice contains exactly three pounds of estate-grown, sun-ripened oranges. Nothing else."
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>ORANGE CO. SELECTIONS</span>
                  <span className="text-orange-600 font-bold">★ COLD-PRESSED CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Subtext Inside Left Panel */}
          <div className="relative z-10 text-xs text-gray-500 font-medium tracking-wide">
            © Orange Co. Fresh Product Framework.
          </div>
        </section>

        {/* RIGHT COLUMN: Fully Functional Login Terminal (Server Rendered) */}
        <section className="col-span-1 lg:col-span-6 xl:col-span-5 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white">
          <div className="w-full max-w-md space-y-8">
            
            {/* Header Branding Container */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 lg:hidden">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-600" /> Secure Checkout Core
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-sm mt-2">
                Log in to access your fresh subscriptions and orders.
              </p>
            </div>

            {/* Form Interactive Card Wrapper */}
            <div className="bg-white rounded-3xl border-0 sm:border border-gray-100 sm:shadow-xl sm:shadow-orange-600/[0.02] sm:p-8">
              <form className="space-y-5" method="POST" action="/api/login">
                
                {/* Email Input Node */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-600 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Password Input Node */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                      Password
                    </label>
                    <Link href="/forget-password" className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-600 transition-colors">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="••••••••••••"
                      required
                      className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Primary Interactive Login Button Action */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white hover:bg-orange-700 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/10 hover:shadow-orange-600/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none cursor-pointer"
                >
                  Sign In to Shop <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Visual Divider Segment */}
              <div className="relative my-6 flex items-center justify-center">
                <div className="absolute w-full h-px bg-gray-200"></div>
                <span className="relative z-10 bg-white px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Or Quick Sign In With
                </span>
              </div>

              {/* Social Authentication Row */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* Google Integration Button */}
                <a href="/api/auth/google" className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50/40 text-gray-700 transition-all active:scale-95 focus:outline-none cursor-pointer group">
                  <svg className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.24 1 3.2 3.76 1.12 7.8l3.76 2.92C5.8 7.4 8.64 5.04 12 5.04z"/>
                    <path fill="#4285F4" d="M23.48 12.28c0-.84-.08-1.64-.2-2.44H12v4.64h6.44c-.28 1.44-1.1 2.68-2.32 3.48l3.6 2.8c2.1-1.92 3.76-4.76 3.76-8.48z"/>
                    <path fill="#FBBC05" d="M4.88 14.88c-.24-.72-.38-1.48-.38-2.28s.14-1.56.38-2.28L1.12 7.8C.4 9.24 0 10.88 0 12.6s.4 3.36 1.12 4.8l3.76-2.92z"/>
                    <path fill="#34A853" d="M12 23c3.24 0 5.96-1.08 7.96-2.92l-3.6-2.8c-1.2.8-2.76 1.28-4.36 1.28-3.36 0-6.2-2.36-7.12-5.68L1.12 15.8C3.2 19.84 7.24 23 12 23z"/>
                  </svg>
                </a>

                {/* Facebook Integration Button */}
                <a href="/api/auth/facebook" className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50/40 text-gray-700 transition-all active:scale-95 focus:outline-none cursor-pointer group">
                  <svg className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Telegram Integration Button */}
               <a href="/api/auth/telegram" className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50/40 text-[#26A5E4] transition-all active:scale-95 focus:outline-none cursor-pointer group">
                    <svg 
                        className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                    >
                        <path d="M21.75 2.25c-.15 0-.31.04-.45.12L1.82 11.53c-.38.17-.46.66-.14.94l4.85 3.79a.49.49 0 0 0 .54.04l11.19-7.2c.09-.06.2.06.12.14L9.12 16.3a.49.49 0 0 0-.14.41l.52 4.6c.05.46.66.58.89.18l2.67-4.66a.51.51 0 0 1 .63-.19l5.81 2.2c.38.14.8-.09.87-.5l3.01-15.6a.5.5 0 0 0-.63-.59z"/>
                    </svg>
               </a>
                </div>
            </div>

            {/* Registration Redirect Banner */}
            <p className="text-center text-xs text-gray-600 select-none">
              New to our groves?{" "}
              <Link href="/signup" className="font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4 transition-colors">
                Create an account
              </Link>
            </p>

          </div>
        </section>

      </main>

      {/* Corporate Global App Footer */}
      <Footer />
    </div>
  );
}