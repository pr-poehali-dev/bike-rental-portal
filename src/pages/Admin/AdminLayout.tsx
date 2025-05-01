
import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
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

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Функция для определения активной ссылки
  const isActiveLink = (path: string): string => {
    const currentPath = window.location.pathname;
    return currentPath === path || currentPath.startsWith(`${path}/`) 
      ? "bg-orange-100 text-orange-600" 
      : "hover:bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Сайдбар */}
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

        <div className="flex-1 py-6 flex flex-col">
          <NavLink
            to="/admin"
            end
            className={`flex items-center gap-3 px-4 py-3 text-gray-700 ${isActiveLink("/admin")}`}
          >
            <Icon name="LayoutDashboard" size={20} className="shrink-0" />
            {!collapsed && <span>Панель управления</span>}
          </NavLink>
          
          <NavLink
            to="/admin/motorcycles"
            className={`flex items-center gap-3 px-4 py-3 text-gray-700 ${isActiveLink("/admin/motorcycles")}`}
          >
            <Icon name="Motorcycle" size={20} className="shrink-0" />
            {!collapsed && <span>Мотоциклы</span>}
          </NavLink>
          
          <NavLink
            to="/admin/orders"
            className={`flex items-center gap-3 px-4 py-3 text-gray-700 ${isActiveLink("/admin/orders")}`}
          >
            <Icon name="ShoppingCart" size={20} className="shrink-0" />
            {!collapsed && <span>Заказы</span>}
          </NavLink>
          
          <NavLink
            to="/admin/users"
            className={`flex items-center gap-3 px-4 py-3 text-gray-700 ${isActiveLink("/admin/users")}`}
          >
            <Icon name="Users" size={20} className="shrink-0" />
            {!collapsed && <span>Пользователи</span>}
          </NavLink>
          
          <Separator className="my-4" />
          
          <NavLink
            to="/admin/settings"
            className={`flex items-center gap-3 px-4 py-3 text-gray-700 ${isActiveLink("/admin/settings")}`}
          >
            <Icon name="Settings" size={20} className="shrink-0" />
            {!collapsed && <span>Настройки</span>}
          </NavLink>
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
      
      {/* Основной контент */}
      <div className="flex-1 flex flex-col">
        {/* Верхняя панель */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Административная панель</h1>
            <p className="text-sm text-gray-500">Управление сайтом проката мотоциклов</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Icon name="Bell" size={18} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Icon name="ExternalLink" size={16} className="mr-2" />
              На сайт
            </Button>
          </div>
        </header>
        
        {/* Контент страницы */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
        
        {/* Футер */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} МотоРент. Административная панель.
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
