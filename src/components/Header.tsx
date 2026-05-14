import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <button className="p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold tracking-tighter text-blue-900">
              ARCTIC<span className="text-gray-400">PLUNGE</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['冷疗产品', '康复科学', '关于我们', '运动社区'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-900">
              <Search size={20} />
            </button>
            <button className="hidden sm:block p-2 text-gray-600 hover:text-blue-900">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-900 relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
