import Link from "next/link";
import { Sparkles, Mail, Lock, User, ArrowRight, ShieldCheck, CheckCircle, Flame, Citrus, Truck, ShoppingBag } from "lucide-react";
import Footer from "../component/layout/footer";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased">
      
      {/* Global Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all">
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
              <Link href="/learnmore" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Our Story
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Reversed Split Layout Framework */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-4rem)]">
        
        {/* LEFT COLUMN: The Interactive Signup Form */}
        <section className="col-span-1 lg:col-span-6 xl:col-span-5 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white order-2 lg:order-1">
          <div className="w-full max-w-md space-y-6">
            
            {/* Header Branding Container */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-600" /> Create Account
              </div>
              <h1 className="text-3xl font-black tracking-tight text-gray-900">
                Join Orange Co.
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Create an account to manage your fruit orders and delivery details.
              </p>
            </div>

            {/* Form Wrapper */}
            <div className="bg-white rounded-3xl border-0 sm:border sm:border-gray-100 sm:p-2">
              <form className="space-y-4" method="POST" action="/api/signup">
                
                {/* First Name / Last Name Split Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      First Name
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-600 transition-colors">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Johnny"
                        required
                        className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Appleseed"
                      required
                      className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Email Input Node */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
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
                      className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Password Input Node */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-600 transition-colors">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      placeholder="••••••••••••"
                      required
                      className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Terms and Privacy Checkbox */}
                <div className="flex items-start gap-2.5 pt-1 select-none">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    required 
                    className="mt-0.5 h-4 w-4 accent-orange-600 rounded border-gray-300 focus:ring-orange-500/20"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 leading-normal">
                    I agree to the <Link href="/terms" className="text-orange-600 font-semibold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-orange-600 font-semibold hover:underline">Privacy Policy</Link>.
                  </label>
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white hover:bg-orange-600 font-bold text-sm px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] focus:ring-2 focus:ring-orange-500 focus:outline-none cursor-pointer mt-2"
                >
                  Create Account <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Divider Segment */}
              <div className="relative my-5 flex items-center justify-center">
                <div className="absolute w-full h-px bg-gray-100"></div>
                <span className="relative z-10 bg-white px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Or Quick Sign Up With
                </span>
              </div>

              {/* Social Registration Grid */}
              <div className="grid grid-cols-3 gap-3">
                {/* Google Button */}
                <a href="/api/auth/google" className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50/40 text-gray-700 transition-all active:scale-95 focus:outline-none cursor-pointer group">
                  <svg className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.24 1 3.2 3.76 1.12 7.8l3.76 2.92C5.8 7.4 8.64 5.04 12 5.04z"/>
                    <path fill="#4285F4" d="M23.48 12.28c0-.84-.08-1.64-.2-2.44H12v4.64h6.44c-.28 1.44-1.1 2.68-2.32 3.48l3.6 2.8c2.1-1.92 3.76-4.76 3.76-8.48z"/>
                    <path fill="#FBBC05" d="M4.88 14.88c-.24-.72-.38-1.48-.38-2.28s.14-1.56.38-2.28L1.12 7.8C.4 9.24 0 10.88 0 12.6s.4 3.36 1.12 4.8l3.76-2.92z"/>
                    <path fill="#34A853" d="M12 23c3.24 0 5.96-1.08 7.96-2.92l-3.6-2.8c-1.2.8-2.76 1.28-4.36 1.28-3.36 0-6.2-2.36-7.12-5.68L1.12 15.8C3.2 19.84 7.24 23 12 23z"/>
                  </svg>
                </a>

                {/* Facebook Button */}
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

            {/* Login Link Banner */}
            <p className="text-center text-xs text-gray-600 select-none">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4 transition-colors">
                Sign in here
              </Link>
            </p>

          </div>
        </section>

        {/* RIGHT COLUMN: Redesigned Fruit Perks Showcase */}
        <section className="hidden lg:flex lg:col-span-6 xl:col-span-7 bg-gradient-to-tl from-orange-50 via-orange-100/30 to-transparent p-12 flex-col justify-between relative overflow-hidden border-l border-gray-100 order-1 lg:order-2">
          
          {/* Ambient Design Element */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl my-auto space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-orange-600 uppercase block">Fresh From The Grove</span>
              <h2 className="text-4xl xl:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Fresh Oranges & Juices, <br />
                <span className="text-orange-600">Delivered Simply.</span>
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                By setting up an account, you can quickly checkout, save your delivery addresses, and track your seasonal citrus box right to your doorstep.
              </p>
            </div>

            {/* Feature Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <Citrus className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">100% Sun-Ripened</h4>
                <p className="text-xs text-gray-600 leading-normal">Our fruit is picked directly from the trees only when it is perfectly ripe and sweet.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <Truck className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Cold-Insulated Shipping</h4>
                <p className="text-xs text-gray-600 leading-normal">All juices are shipped chilled to ensure they stay ice-cold and fresh upon arrival.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Easy Order Tracking</h4>
                <p className="text-xs text-gray-600 leading-normal">View your order history, manage current shipments, and save multiple shipping addresses.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Zero Additives</h4>
                <p className="text-xs text-gray-600 leading-normal">Pure, cold-pressed fruit juices with no added sugar, water, or artificial flavorings.</p>
              </div>
            </div>
            
          </div>

          {/* Left Panel Meta Subtext */}
          <div className="relative z-10 text-xs text-gray-400 font-medium tracking-wide">
            © Orange Co. Fresh Produce Handled Right.
          </div>
        </section>

      </main>

      {/* Corporate Global App Footer */}
      <Footer />
    </div>
  );
}