
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Преимущества */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
            <p className="text-gray-600">Все наши мотоциклы регулярно проходят техническое обслуживание и проверку перед каждой арендой.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Wallet" className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Выгодные условия</h3>
            <p className="text-gray-600">Гибкая система скидок, бонусы для постоянных клиентов и специальные предложения.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-gray-600">Наша служба поддержки готова помочь вам в любое время дня и ночи.</p>
          </div>
        </div>
      </section>

      {/* Популярные мотоциклы */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Популярные мотоциклы</h2>
            <Link to="/catalog">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Смотреть все
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Yamaha MT-09",
                category: "Нейкед",
                price: 3500,
                image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                id: 2,
                name: "BMW R 1250 GS",
                category: "Турист",
                price: 5000,
                image: "https://images.unsplash.com/photo-1616711906333-23e9280bc595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                id: 3,
                name: "Harley-Davidson Iron 883",
                category: "Круизер",
                price: 4200,
                image: "https://images.unsplash.com/photo-1576015497888-52b26493f8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1535&q=80"
              }
            ].map((bike) => (
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
        </div>
      </section>

      {/* Call-to-action */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к приключениям?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Забронируйте мотоцикл прямо сейчас и отправляйтесь навстречу новым впечатлениям!
          </p>
          <Link to="/catalog">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Выбрать мотоцикл
            </Button>
          </Link>
        </div>
      </section>

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

export default Index;
