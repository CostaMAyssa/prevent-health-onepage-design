
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Terapias", href: "#services" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Pilares", href: "#pillars" },
    { label: "Atendimento", href: "#process" },
    { label: "Sobre", href: "#about" },
    { label: "Localização", href: "#location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-cor-fundo/95 backdrop-blur-md shadow-lg translate-y-0' 
        : 'bg-transparent translate-y-0'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/favicon.png" 
                alt="Logo Dra. Daniela Fiorim" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-cor-principal">PREVENT HEALTH</h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-cor-texto' : 'text-white'
              }`}>Terapias Integrativas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-cor-texto hover:text-cor-principal' 
                    : 'text-white hover:text-cor-principal'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-cor-texto' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-cor-texto hover:text-cor-principal' 
                      : 'text-white hover:text-cor-principal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
