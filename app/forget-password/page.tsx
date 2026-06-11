import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowRight, ShieldCheck, KeyRound, HelpCircle, CheckCircle2 } from "lucide-react";
import Footer from "../component/layout/footer";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased">
      
      {/* Global Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-orange-600 transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-2xl font-extrabold tracking-tight text-orange-600">Orange Co.</span>
            </Link>
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

      {/* Main Framework Layout Grid */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-4rem)]">
        
        {/* LEFT COLUMN: Interactive Reset Credentials Form */}
        <section className="col-span-1 lg:col-span-6 xl:col-span-5 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white">
          <div className="w-full max-w-md space-y-6">
            
            {/* Context Heading Branding */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
                <KeyRound className="h-3.5 w-3.5 text-orange-600" /> Secure Verification
              </div>
              <h1 className="text-3xl font-black tracking-tight text-gray-900">
                Reset Your Password
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Enter the 6-digit code sent to your email and choose your new credentials below.
              </p>
            </div>

            {/* Interactive Recovery Form Card */}
            <div className="bg-white rounded-3xl border-0 sm:border sm:border-gray-100 p-2 sm:p-6 sm:shadow-xl sm:shadow-orange-600/[0.01]">
              <form className="space-y-5" method="POST" action="/api/reset-password">
                
                {/* 6-Digit OTP Pin Segment */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block text-center lg:text-left">
                    Verification Code
                  </label>
                  <div className="grid grid-cols-6 gap-2 max-w-xs mx-auto lg:mx-0">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        pattern="\d*"
                        inputMode="numeric"
                        name={`otp-${index}`}
                        required
                        className="w-full aspect-square text-center bg-gray-50 text-gray-900 placeholder-gray-300 text-lg font-bold rounded-xl border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                        placeholder="•"
                      />
                    ))}
                  </div>
                </div>

                {/* New Password Text Box */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    New Password
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

                {/* Re-Type New Password Text Box */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    Re-Type New Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-600 transition-colors">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      autoComplete="new-password"
                      placeholder="••••••••••••"
                      required
                      className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Core Update Action Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white hover:bg-orange-600 font-bold text-sm px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] focus:ring-2 focus:ring-orange-500 focus:outline-none cursor-pointer pt-2"
                >
                  Change Password <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Return Navigation Backlink */}
            <p className="text-center text-xs text-gray-600 select-none">
              Remembered your password?{" "}
              <Link href="/login" className="font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4 transition-colors">
                Back to Sign In
              </Link>
            </p>

          </div>
        </section>

        {/* RIGHT COLUMN: Supporting Informational Showcase Panel */}
        <section className="hidden lg:flex lg:col-span-6 xl:col-span-7 bg-gradient-to-tr from-orange-50 via-orange-100/30 to-transparent p-12 flex-col justify-between relative overflow-hidden border-l border-gray-100">
          
          {/* Ambient Decorative Bubble */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl my-auto space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-orange-600 uppercase block">Secure & Direct</span>
              <h2 className="text-4xl xl:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Protecting Your <br />
                <span className="text-orange-600">Fresh Deliveries.</span>
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your security is important to us. Resetting your password ensures your account data, saved delivery coordinates, and recurring seasonal boxes remain safely protected under your control.
              </p>
            </div>

            {/* Explanatory Step Help Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <Mail className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">1. Verification Code</h4>
                <p className="text-xs text-gray-600 leading-normal">Enter the unique 6-digit pin generated for your profile to authorize credential changes.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">2. Secure Selection</h4>
                <p className="text-xs text-gray-600 leading-normal">Make sure your new password is at least 8 characters long and contains mixed criteria fields.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xs border border-orange-200/40 space-y-2 shadow-xs sm:col-span-2">
                <div className="flex items-start gap-3.5">
                  <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Didn't receive a pin block code?</h4>
                    <p className="text-xs text-gray-600 leading-normal mt-0.5">
                      Check your spam or junk folder first. If it still hasn't shown up, you can contact our grove management desk at <span className="text-orange-600 font-bold">support@orangeco.example.com</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Left Panel Meta Subtext */}
          <div className="relative z-10 text-xs text-gray-400 font-medium tracking-wide">
            © Orange Co. Secure Account Infrastructure.
          </div>
        </section>

      </main>

      {/* Corporate Global App Footer */}
      <Footer />
    </div>
  );
}