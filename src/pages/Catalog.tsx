
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// Временные данные для демонстрации
const MOCK_BIKES = [
  {
    id: 1,
    name: "Yamaha MT-09",
    category: "Нейкед",
    type: "Спортивный",
    price: 3500,
    power: 115,
    volume: 890,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    name: "BMW R 1250 GS",
    category: "Турист",
    type: "Туристический",
    price: 5000,
    power: 136,
    volume: 1254,
    image: "https://images.unsplash.com/photo-1616711906333-23e9280bc595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Harley-Davidson Iron 883",
    category: "Круизер",
    type: "Круизер",
    price: 4200,
    power: 53,
    volume: 883,
    image: "https://images.unsplash.com/photo-1576015497888-52b26493f8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1535&q=80"
  },
  {
    id: 4,
    name: "Honda CBR 650R",
    category: "Спортбайк",
    type: "Спортивный",
    price: 4800,
    power: 95,
    volume: 649,
    image: "https://images.unsplash.com/photo-1635073937063-e9b1b471ee14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  },
  {
    id: 5,
    name: "Ducati Multistrada V4",
    category: "Турист",
    type: "Туристический",
    price: 6500,
    power: 170,
    volume: 1158,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    name: "Kawasaki Z900",
    category: "Нейкед",
    type: "Спортивный",
    price: 3800,
    power: 125,
    volume: 948,
    image: "https://images.unsplash.com/photo-1624004524127-bda70f6deef6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [powerRange, setPowerRange] = useState<number[]>([0, 200]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Уникальные типы мотоциклов
  const bikeTypes = [...new Set(MOCK_BIKES.map(bike => bike.type))];
  
  // Фильтрация мотоциклов
  const filteredBikes = MOCK_BIKES.filter(bike => {
    const matchesPrice = bike.price >= priceRange[0] && bike.price <= priceRange[1];
    const matchesPower = bike.power >= powerRange[0] && bike.power <= powerRange[1];
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(bike.type);
    const matchesSearch = searchQuery === "" || 
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesPrice && matchesPower && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Заголовок */}
      <div className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Каталог мотоциклов</h1>
          <p className="text-gray-300 mt-2">Выберите мотоцикл для вашего идеального приключения</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Фильтры */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6">Фильтры</h2>
              
              {/* Поиск */}
              <div className="mb-6">
                <Label htmlFor="search" className="block mb-2">Поиск</Label>
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder="Поиск по названию или типу"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Icon 
                    name="Search" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                    size={18} 
                  />
                </div>
              </div>
              
              {/* Фильтр по цене */}
              <div className="mb-6">
                <Label htmlFor="price-range" className="block mb-2">Цена в день (₽)</Label>
                <div className="px-2">
                  <Slider
                    id="price-range"
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
              </div>
              
              {/* Фильтр по мощности */}
              <div className="mb-6">
                <Label htmlFor="power-range" className="block mb-2">Мощность (л.с.)</Label>
                <div className="px-2">
                  <Slider
                    id="power-range"
                    defaultValue={[0, 200]}
                    max={200}
                    step={5}
                    value={powerRange}
                    onValueChange={setPowerRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{powerRange[0]} л.с.</span>
                    <span>{powerRange[1]} л.с.</span>
                  </div>
                </div>
              </div>
              
              {/* Фильтр по типу */}
              <div>
                <Label className="block mb-2">Тип мотоцикла</Label>
                <div className="space-y-2">
                  {bikeTypes.map((type) => (
                    <div key={type} className="flex items-center">
                      <Checkbox 
                        id={`type-${type}`} 
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTypes([...selectedTypes, type]);
                          } else {
                            setSelectedTypes(selectedTypes.filter(t => t !== type));
                          }
                        }}
                      />
                      <Label htmlFor={`type-${type}`} className="ml-2 cursor-pointer">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Мотоциклы */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Найдено: {filteredBikes.length} мотоциклов</p>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm">Сортировать:</Label>
                <select
                  id="sort"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                >
                  <option value="price-asc">По цене (возрастание)</option>
                  <option value="price-desc">По цене (убывание)</option>
                  <option value="power-asc">По мощности (возрастание)</option>
                  <option value="power-desc">По мощности (убывание)</option>
                </select>
              </div>
            </div>
            
            {filteredBikes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBikes.map((bike) => (
                  <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={bike.image} 
                        alt={bike.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{bike.name}</h3>
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">{bike.category}</span>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Zap" size={16} />
                          {bike.power} л.с.
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Gauge" size={16} />
                          {bike.volume} см³
                        </span>
                      </div>
                      <p className="text-gray-500 mb-4">от {bike.price} ₽/день</p>
                      <div className="flex justify-between">
                        <Link to={`/catalog/${bike.id}`}>
                          <Button variant="outline" className="text-sm border-zinc-200 hover:border-orange-500 hover:text-orange-500">
                            Подробнее
                          </Button>
                        </Link>
                        <Button className="text-sm bg-orange-500 hover:bg-orange-600">В корзину</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <Icon name="SearchX" className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-gray-600 mb-4">Попробуйте изменить параметры фильтрации</p>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  onClick={() => {
                    setPriceRange([0, 10000]);
                    setPowerRange([0, 200]);
                    setSelectedTypes([]);
                    setSearchQuery("");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Футер */}
      <footer className="bg-zinc-800 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bike" size={24} className="text-orange-500" />
                <span className="text-xl font-bold text-white">МотоРент</span>
              </div>
              <p className="mb-4">Прокат премиальных мотоциклов для незабываемых приключений.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Навигация</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Главная</Link></li>
                <li><Link to="/catalog" className="hover:text-orange-500 transition-colors">Каталог</Link></li>
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">О нас</Link></li>
                <li><Link to="/contacts" className="hover:text-orange-500 transition-colors">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Мотоциклетная, 123</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@motorent.ru</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Режим работы</h3>
              <ul className="space-y-2">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб: 10:00 - 18:00</li>
                <li>Вс: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} МотоРент. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
