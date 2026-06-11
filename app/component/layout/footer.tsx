import Link from "next/link";
import { 
  Sparkles, 
  ShoppingBag, 
  HelpCircle, 
  FileText, 
  Mail 
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300 text-sm py-16 px-4 sm:px-6 lg:px-8 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-extrabold tracking-tight">Orange Juice Co.</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed max-w-xs">
              Sourcing elite certified organic options to supply sustainable wellness solutions globally.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white uppercase text-xs tracking-wider flex items-center gap-1.5">
              <ShoppingBag className="h-3.5 w-3.5" /> Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/shop" className="hover:text-orange-400 transition-colors">Shop Marketplace</Link></li>
              <li><Link href="/learnmore" className="hover:text-orange-400 transition-colors">About Our Juice</Link></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Recipes & Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white uppercase text-xs tracking-wider flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5" /> Support Framework
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Relations</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ Registry</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping Operations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white uppercase text-xs tracking-wider flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" /> Legal Protocols
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Charter</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cookie Configurations</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Orange Co. All rights reserved.
          </p>
          <p className="text-gray-400 tracking-wide flex items-center gap-1">
            <Mail className="h-3 w-3 text-orange-500" /> Freshness Guaranteed &bull; Quality Assured Production Pipeline
          </p>
        </div>
      </div>
    </footer>
  );
}