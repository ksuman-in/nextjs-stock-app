import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scroll-hide-defalut">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            {/* Some description regarding stock sign */}
            <p className="text-lg italic font-medium">
              Signalist turned my watchlist into a winning list. The alerts are
              spot-on, and I feel more confident making moves in the market
            </p>
          </blockquote>
          <div className="flex justify-between items-center">
            <div>
              <cite className="auth-testimonial-author">Jane Doe</cite>
              <p className="max-md:text-xs text-gray-500">
                Professional Trader
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="Star"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            height={1150}
            width={1440}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default Layout;
