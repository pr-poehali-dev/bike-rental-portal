
import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useMobile } from "@/hooks/use-mobile";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "order" | "user" | "system";
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "Новый заказ",
    message: "Поступил новый заказ на Yamaha MT-09 от Елены Петровой",
    time: "5 минут назад",
    read: false,
    type: "order"
  },
  {
    id: 2,
    title: "Новый пользователь",
    message: "Зарегистрировался новый пользователь: Алексей Иванов",
    time: "30 минут назад",
    read: false,
    type: "user"
  },
  {
    id: 3,
    title: "Системное уведомление",
    message: "Обновление системы до версии 2.1.5 успешно завершено",
    time: "2 часа назад",
    read: false,
    type: "system"
  },
  {
    id: 4,
    title: "Отмена заказа",
    message: "Заказ ORD-005 был отменен пользователем",
    time: "4 часа назад",
    read: true,
    type: "order"
  },
  {
    id: 5,
    title: "Окончание аренды",
    message: "Через 2 часа заканчивается аренда мотоцикла BMW R 1250 GS",
    time: "5 часов назад",
    read: true,
    type: "order"
  }
];

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "order":
      return <Icon name="ShoppingCart" size={16} />;
    case "user":
      return <Icon name="UserPlus" size={16} />;
    case "system":
      return <Icon name="Bell" size={16} />;
  }
};

const getPageTitle = (path: string): string => {
  const parts = path.split('/');
  const page = parts[parts.length - 1];
  
  switch (page) {
    case "admin": return "Панель управления";
    case "motorcycles": return "Управление мотоциклами";
    case "orders": return "Управление заказами";
    case "users": return "Управление пользователями";
    case "settings": return "Настройки";
    default: return "Административная панель";
  }
};

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showHelpDialog, setShowHelpDialog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMobile();
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Автоматически сворачивать сайдбар на мобильных устройствах
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);
  
  // Отмечаем уведомление как прочитанное
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  // Отмечаем все уведомления как прочитанные
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };
  
  // Удаляем уведомление
  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Функция для определения активной ссылки
  const isActiveLink = (path: string): string => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`) 
      ? "bg-orange-100 text-orange-600" 
      : "hover:bg-gray-100";
  };

  const NavItem = ({ path, icon, label }: { path: string, icon: string, label: string }) => (
    <NavLink
      to={path}
      end={path === "/admin"}
      className={`flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md transition-colors ${isActiveLink(path)}`}
    >
      <Icon name={icon} size={20} className="shrink-0" />
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Мобильный сайдбар (показывается только на мобильных устройствах) */}
      {isMobile && (
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 left-4 z-50 md:hidden"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <MobileSidebar 
              navigate={navigate} 
              isActiveLink={isActiveLink}
            />
          </SheetContent>
        </Sheet>
      )}
      
      {/* Десктопный сайдбар (скрывается на мобильных устройствах) */}
      {!isMobile && (
        <div 
          className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className={`flex items-center gap-2 ${collapsed ? "hidden" : "flex"}`}>
              <Icon name="Bike" size={24} className="text-orange-500 shrink-0" />
              <span className="font-bold text-lg">МотоРент</span>
            </div>
            {collapsed && (
              <Icon name="Bike" size={24} className="text-orange-500 mx-auto" />
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className={collapsed ? "mx-auto" : ""}
            >
              <Icon name={collapsed ? "ChevronRight" : "ChevronLeft"} size={18} />
            </Button>
          </div>

          <div className="flex-1 py-6 flex flex-col px-2">
            <NavItem path="/admin" icon="LayoutDashboard" label="Панель управления" />
            <NavItem path="/admin/motorcycles" icon="Bike" label="Мотоциклы" />
            <NavItem path="/admin/orders" icon="ShoppingCart" label="Заказы" />
            <NavItem path="/admin/users" icon="Users" label="Пользователи" />
            
            <Separator className="my-4 mx-2" />
            
            <NavItem path="/admin/settings" icon="Settings" label="Настройки" />
            
            {!collapsed && (
              <div className="mt-6 px-4">
                <div className="rounded-lg bg-orange-50 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-100 rounded-full p-2">
                      <Icon name="HelpCircle" size={18} className="text-orange-500" />
                    </div>
                    <h3 className="font-medium">Нужна помощь?</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Возникли вопросы по работе с административной панелью?
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-100"
                    onClick={() => setShowHelpDialog(true)}
                  >
                    Открыть справку
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-auto border-t border-gray-200 p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full flex items-center justify-start gap-3 hover:bg-gray-100">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
                    <AvatarFallback>АД</AvatarFallback>
                  </Avatar>
                  {!collapsed && (
                    <div className="text-left">
                      <p className="text-sm font-medium">Админ Дмитрий</p>
                      <p className="text-xs text-gray-500">Администратор</p>
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/admin/profile")}>
                  <Icon name="User" className="mr-2" size={16} />
                  Профиль
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/admin/settings")}>
                  <Icon name="Settings" className="mr-2" size={16} />
                  Настройки
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-500" onClick={() => navigate("/")}>
                  <Icon name="LogOut" className="mr-2" size={16} />
                  Выйти
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
      
      {/* Основной контент */}
      <div className="flex-1 flex flex-col">
        {/* Верхняя панель */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <div className={isMobile ? "ml-12" : ""}>
            <h1 className="text-xl font-bold">{getPageTitle(location.pathname)}</h1>
            <p className="text-sm text-gray-500">Управление сайтом проката мотоциклов</p>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="Bell" size={18} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                  <DropdownMenuLabel className="font-semibold">Уведомления</DropdownMenuLabel>
                  {unreadCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                      Отметить все как прочитанные
                    </Button>
                  )}
                </div>
                <div className="py-2 max-h-[400px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="text-center py-6">
                      <Icon name="BellOff" className="mx-auto text-gray-300 mb-2" size={24} />
                      <p className="text-gray-500">Нет уведомлений</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer relative ${notification.read ? 'opacity-80' : ''}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex gap-3">
                          <div className={`mt-1 rounded-full p-2 ${
                            notification.type === 'order' ? 'bg-blue-100 text-blue-600' : 
                            notification.type === 'user' ? 'bg-green-100 text-green-600' : 
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              {!notification.read && (
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">{notification.message}</p>
                            <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                          </div>
                          <button 
                            className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                          >
                            <Icon name="X" size={14} className="text-gray-400 hover:text-gray-700" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="p-2 border-t text-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-sm"
                    onClick={() => {
                      setIsNotificationsOpen(false);
                      // Здесь можно добавить навигацию на страницу всех уведомлений
                    }}
                  >
                    Просмотреть все уведомления
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" className="gap-2" onClick={() => navigate("/")}>
              <Icon name="ExternalLink" size={16} />
              <span className="hidden sm:inline">На сайт</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Icon name="HelpCircle" size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setShowHelpDialog(true)}>
                  <Icon name="Book" className="mr-2" size={16} />
                  Документация
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="VideoIcon" className="mr-2" size={16} />
                  Видеоуроки
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Связаться с поддержкой
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Статус-бар с информацией */}
        <div className="bg-blue-50 border-b border-blue-100 py-2 px-6 flex justify-between items-center text-sm text-blue-700">
          <div className="flex items-center gap-2">
            <Icon name="Info" size={16} />
            <span>Версия системы: <Badge variant="outline" className="ml-1">2.1.5</Badge></span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="ShoppingCart" size={16} />
              <span>Активных заказов: <strong>3</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              <span>Пользователей онлайн: <strong>12</strong></span>
            </div>
          </div>
        </div>
        
        {/* Контент страницы */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
        
        {/* Футер */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div>&copy; {new Date().getFullYear()} МотоРент. Все права защищены.</div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-gray-700">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-700">Условия использования</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setShowHelpDialog(true);
              }} className="hover:text-gray-700">Помощь</a>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Диалог справки */}
      <Dialog open={showHelpDialog} onOpenChange={setShowHelpDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Справка по административной панели</DialogTitle>
            <DialogDescription>
              Основные сведения о функциях и возможностях административной панели
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Панель управления</h3>
              <p className="text-gray-700">
                На главной странице административной панели отображается сводная информация о состоянии сайта: 
                статистика продаж, активные заказы, новые пользователи и другие ключевые метрики.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Управление мотоциклами</h3>
              <p className="text-gray-700">
                Раздел для добавления, редактирования и удаления мотоциклов из каталога. 
                Здесь вы можете управлять информацией о каждом мотоцикле, его характеристиками, 
                ценами и статусом доступности.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Управление заказами</h3>
              <p className="text-gray-700">
                В этом разделе вы можете просматривать все заказы, менять их статус, 
                контактировать с клиентами и управлять бронированиями мотоциклов.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Управление пользователями</h3>
              <p className="text-gray-700">
                Здесь вы можете управлять учетными записями пользователей сайта, редактировать их данные,
                блокировать нежелательных пользователей и назначать роли и права доступа.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Настройки</h3>
              <p className="text-gray-700">
                Раздел для настройки параметров сайта, включая часы работы, контактную информацию,
                социальные сети и другие общие настройки.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={() => setShowHelpDialog(false)}>
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Компонент мобильного сайдбара
const MobileSidebar = ({ navigate, isActiveLink }: { navigate: (path: string) => void, isActiveLink: (path: string) => string }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Bike" size={24} className="text-orange-500" />
          <span className="font-bold text-lg">МотоРент</span>
        </div>
      </div>
      
      <div className="flex-1 py-6 px-2 space-y-1">
        <NavLink
          to="/admin"
          end
          className={`flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md ${isActiveLink("/admin")}`}
        >
          <Icon name="LayoutDashboard" size={20} />
          <span>Панель управления</span>
        </NavLink>
        
        <NavLink
          to="/admin/motorcycles"
          className={`flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md ${isActiveLink("/admin/motorcycles")}`}
        >
          <Icon name="Bike" size={20} />
          <span>Мотоциклы</span>
        </NavLink>
        
        <NavLink
          to="/admin/orders"
          className={`flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md ${isActiveLink("/admin/orders")}`}
        >
          <Icon name="ShoppingCart" size={20} />
          <span>Заказы</span>
        </NavLink>
        
        <NavLink
          to="/admin/users"
          className={`flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md ${isActiveLink("/admin/users")}`}
        >
          <Icon name="Users" size={20} />
          <span>Пользователи</span>
        </NavLink>
        
        <Separator className="my-4 mx-2" />
        
        <NavLink
          to="/admin/settings"
          className={`flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md ${isActiveLink("/admin/settings")}`}
        >
          <Icon name="Settings" size={20} />
          <span>Настройки</span>
        </NavLink>
      </div>
      
      <div className="mt-auto border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" />
            <AvatarFallback>АД</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Админ Дмитрий</p>
            <p className="text-sm text-gray-500">Администратор</p>
          </div>
        </div>
        
        <Button 
          onClick={() => navigate("/")}
          variant="outline" 
          className="w-full justify-start gap-2"
        >
          <Icon name="LogOut" size={16} />
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default AdminLayout;
