import { ShoppingCart, Menu, Search, User } from 'lucide-react';

/**
 * Shopify Section Schema: header.liquid
 */
export const section_schema = {
  name: "Header",
  settings: [
    { type: "image_picker", id: "logo", label: "Logo" },
    { type: "link_list", id: "menu", label: "Main Menu" }
  ]
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Menu Button - Mobile */}
          <div className="flex md:hidden">
            <button className="p-2 -ml-2 text-gray-900" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>

          {/* Site Identity */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-black tracking-tight text-blue-900 uppercase">
              Arctic<span className="text-blue-500">Plunge</span>
            </a>
          </div>

          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {['Shop All', 'Recovery Science', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-5">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors hidden sm:block">
              <Search size={20} strokeWidth={2} />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User size={20} strokeWidth={2} />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative group">
              <ShoppingCart size={20} strokeWidth={2} />
              <span className="absolute top-1 right-1 bg-blue-600 text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
