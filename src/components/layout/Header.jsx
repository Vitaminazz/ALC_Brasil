import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Produtos ALC", href: "/produtos" },
  { label: "Clientes & Fornecedores", href: "/parceiros" },
  { label: "Saints Soldas", href: "/saints-soldas" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isProductDetailPage =
    /^\/produtos\/[^/]+$/.test(location.pathname) ||
    location.pathname === "/cilindros-hidraulicos" ||
    location.pathname === "/projetos-customizados";
    
  useEffect(() => {
    const handleScroll = () => {
      if (isProductDetailPage) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };
    if (isProductDetailPage) setIsScrolled(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProductDetailPage]);
  const isDarkMode = isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkMode
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-0"
          >
            <img
              src="/ALC_LOGO.svg"
              alt="Logo ALC"
              className="w-10 h-10 object-cover"
            />
            <div
              className={`font-black text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#159633]" : "text-white"
              }`}
            >
              <span className="text-[#159633]">ALC</span>
              <span className={isScrolled ? "text-gray-800" : "text-white"}>
                {" "}
                BRASIL
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-[#159633]/10 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#159633]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/551699321766?text=Olá! Gostaria de mais informações sobre os produtos ALC Brasil."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#159633] hover:bg-[#15941E] text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-gray-800" : "text-white"}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full pt-8">
                <div className="font-black text-2xl mb-8">
                  <span className="text-[#159633]">ALC</span>
                  <span className="text-gray-800"> BRASIL</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-[#159633] hover:bg-[#159633]/10 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <a
                    href="https://wa.me/551699321766?text=Olá! Gostaria de mais informações sobre os produtos ALC Brasil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#159633] hover:bg-[#15941E] text-white font-semibold py-3 rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Fale pelo WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
