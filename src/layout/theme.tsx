import React from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';

/**
 * Shopify Layout Framework: theme.liquid
 */
interface LayoutProps {
  children: React.ReactNode;
}

export default function ThemeLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Skip to Content - Accessibility */}
      <a href="#MainContent" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white text-blue-600 font-bold">
        Skip to content
      </a>

      {/* Global Header Section */}
      <Header />

      {/* Main Content Template Wrapper */}
      <main id="MainContent" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children}
      </main>

      {/* Global Footer Section */}
      <Footer />
    </div>
  );
}
