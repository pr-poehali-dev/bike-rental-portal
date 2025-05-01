
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Bike" size={28} className="text-orange-500" />
          <span className="text-xl font-bold">МотоРент</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">Главная</Link>
          <Link to="/catalog" className="hover:text-orange-500 transition-colors">Каталог</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors">О нас</Link>
          <Link to="/blog" className="hover:text-orange-500 transition-colors">Блог</Link>
          <Link to="/contacts" className="hover:text-orange-500 transition-colors">Контакты</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Админ
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          <Icon name={isMenuOpen ? "X" : "Menu"} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto mt-4 pb-4 flex flex-col gap-4">
          <Link to="/" className="hover:text-orange-500 transition-colors py-2">Главная</Link>
          <Link to="/catalog" className="hover:text-orange-500 transition-colors py-2">Каталог</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors py-2">О нас</Link>
          <Link to="/blog" className="hover:text-orange-500 transition-colors py-2">Блог</Link>
          <Link to="/contacts" className="hover:text-orange-500 transition-colors py-2">Контакты</Link>
          
          <div className="flex items-center gap-4 mt-2">
            <Link to="/cart">
              <Button variant="ghost" className="flex gap-2">
                <Icon name="ShoppingCart" />
                Корзина
                <span className="bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Админ
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
