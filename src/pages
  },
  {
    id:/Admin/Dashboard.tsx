
import 3,
    title: "Нов { useState, useEffect } from "react";ый пользователь",
    message:
import { Card, CardContent, Car "ЗарегистрировdDescription, CardHeader, CardTitle } from "@ался новый пользователь:/components/ui/card";
import Icon Сергей Иван from "@/components/ui/Icon";ов",
    type: "info",
import { Button } from "@/components
    date: "2025-05-02/ui/button";
import {T14:45:00",
    rea Tabs, TabsContent,d: false
  },
  {
     TabsList, TabsTrigger } from "@id: 4,
    title: "/components/ui/tabs";
import StОтмена заказаatsCard from "@/components/ui/stats",
    message: "Заказ-card";
import { DataTable } from #ORD-004 был "@/components/ui/data-table"; отменен пользователем",
import { LineChart,
    type: "error",
    date: Line, XAxis, YAxis, Cartes "2025-05-02T10:ianGrid, Tooltip, ResponsiveContainer20:00",
    , BarChart, Bar,read: true
  },
   PieChart, Pie{
    id: 5,
    title: "Техническое, Cell, Legend } from "recharts";
import { useMobile обслуживание",
    message: } from "@/hooks/use "Мотоцикл-mobile";

// Мо BMW R 1250 GSковые данные для графиков
const sales нуждается в плData = [
  { name: "ановом техобслуживании",Янв", value: 65
    type: "warning },
  { name: "Ф",
    date: "2025-05ев", value: -01T16:1059 },
  {:00",
    read: true name: "Мар", value: 
  }
];

//80 },
  { Вспомогательные name: "Апр", value: 81 },
  { функции
const getNotificationIcon name: "Май", value: 56 = (type: Notification['type']) },
  { name: "Ию => {
  switch (н", value: 55type) {
    case 'info': },
  { name: "Ию return <Icon name="Info"л", value: 40 }
];

const bi size={16} className="text-blue-500" />;
    case 'warningkeTypesData = [': return <Icon name="AlertTri
  { name: "Спangle" size={16} className="text-ортивные", value: yellow-500" />;
    case 35 },
  {'error': return <Icon name="Alert name: "Туристические", value:Circle" size={16} className="text 25 },
  {-red-500" />;
    case name: "Круизеры", value: 20 },
   'success': return <Icon name="CheckCircle" size={16} className="text{ name: "Н-green-500" />;
  ейкеды", value:}
};

const format 15 },
  { name: "Эндуро", valueDate = (dateString: string) => {
  const date = new Date(date: 5 }
];String);
  const now = new Date();

const COLORS = ["#FF
  const diffMs = now.getTime7E1D", "#F() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * FA35C", "#FF60));
  const diffHours = MathB47A", "#F.floor(diffMs / (1000 FC79A", "#FFD9* 60 * 60));
  const diffDays = Math.floor(diffBB"];

const recentMs / (1000 * 60 Orders = [
  * 60 * 24));

  { id: "ORD-001", customerif (diffMins < 60) {
    return `${diffMins}: "Алексей См мин. назад`;ирнов", date: "01
  } else if (diffHours .05.2025< 24) {
    return `${diff", status: "completeHours} ч. назад`;d", amount: 12500
  } else if (diffDays === },
  { id: "OR 1) {
    return D-002", customer: "Ел'Вчера';ена Петрова", date: "30
  } else {
    return date.04.2025", status: "processing.toLocaleDateString('", amount: 8900ru-RU', { },
  { id: "OR 
      day: 'D-003", customer: "Д2-digit', 
      month: 'митрий Иванов", date2-digit'
    });
  : "29.04.2025", status}
};

const: "completed", amount: 15 AdminLayout = () => {
  000 },
  { id: "const [collapsed, setCollapsed]ORD-004", customer: "М = useState(false);
  const [notificationsария Козлова", date:, setNotifications] = useState<Notification "28.04.2025", status:[]>(mockNotifications);
  const [ "cancelled", amount: 7500 },
  { id: "notificationsOpen, setNotificationsORD-005", customer: "АнтOpen] = useState(false);
  constон Сидоров", date: "27.04.2025", status: " [searchQuery, setSearchQuery]completed", amount: 9 = useState("");
  const [700 }
];

const getisHelpDialogOpen, setIsStatusColor = (status: string) => {HelpDialogOpen] = useState(false
  switch (status) {);
  const [current
    case "completed": return "Section, setCurrentSection]bg-green-100  = useState("dashboard");
  text-green-600";
    case "
  const navigate = useNavigate();
  processing": return "bg-blue-100 const location = useLocation();
  const {text-blue-600";
    case "cancelled": return "bg-red-100  toast } = useToast();
  const isMobile = useMtext-red-600";
    default:obile();

  // Определ return "bg-gray-100 text-gray-600";
  }
};яем текущий раздел на основе пути
  useEffect(() =>

const getStatusText = (status: string {
    const path = location.pathname;) => {
  switch (status) {
    if (path === "/admin
    case "completed": return "Завершен";
    case "") setCurrentSection("dashboard");
    else if (processing": return "Обрабатываетсяpath.includes("/admin/motorc";
    case "cancelled": return "ycles")) setCurrentSection("motorcycles");Отменен";
    default: return status
    else if (path.includes("/admin/;
  }
};

const Dashboard =orders")) setCurrentSection(" () => {
  const isMobile =orders");
    else if (path.includes useMobile();
  const [is("/admin/users")) setCurrentSection("usersLoading, setIsLo");
    else ifading] = useState(true (path.includes("/admin/settings")) set);
  
  useEffect(() =>CurrentSection("settings");
  }, [location {
    // Им]);

  // Автитация загрузки данных
    оматически свернуть сconst timer = setTimeout(() =>айдбар на мобильных уст {
      setIsLoading(false);ройствах
  useEffect(() => {
    }, 1000);
    
    if (isMobile) {
    return () => clearTimeout(timer);
      setCollapsed(true);
    }
  }, []);
  
  //
  }, [isMobile]);

   Определяем колонки для табл// Функция для определицы
  const orderColumns = [
    ения активной ссылки{ header: "ID", accessorKey:
  const isActiveLink = (path: "id" },
    { header: "Клиент", accessor string): string => {
    constKey: "customer" },
    { header currentPath = window.location.pathname;: "Дата", accessorKey:
    return currentPath === path || "date" },
    {  currentPath.startsWith(`${path}/
      header: "Статус", 
      accessorKey`) 
      ? "bg-orange: "status",
      cell: (-100 text-orange-600row: any) => (
        <span className={`" 
      : "hoverrounded-full px-2 py:bg-gray-100";-1 text-xs ${getStatusColor(row.status)}`}>
          
  };

  // Колич{getStatusText(row.status)}ество непрочитанных уведомлений
  const unreadCount = notifications
        </span>
      )
    },.filter(n => !n.read).
    { 
      header: "length;

  // ОбработчикСумма", 
      accessor прочтения уведомKey: "amount",
      cell: (ления
  const handleMarkrow: any) => (
        <spanAsRead = (id: number) => {>{row.amount.
    setNotifications(toLocaleString()} ₽
      notifications.map((notification) => </span>
      )
    }
  
        notification.id === id ? { ...];
  
  returnnotification, read: true } : notification
       (
    <div)
    );
  };

  // className="space-y-6 Обработчик пр">
      <div className="flexочтения всех уведомлений items-center justify-between flex
  const handleMarkAllAsRead = ()-wrap gap-4">
        <h1 className => {
    setNotifications(
      ="text-2xlnotifications.map((notification) => ({ ... font-bold tracking-tight">notification, read: true }))
    );Панель управления</h
    toast({
      title1>
        : "Готово!<div className="flex items-",
      description: "Все уведcenter gap-2">
          <Buttonомления отмечены как пр variant="outline" className="gapочитанные",
    });
  };-2">
            <Icon name="Calendar

  // Функция для поиска" size={16} />
            {isMobile ? "" : "Май
  const handleSearch = (query: string) 2025"}
          </Button => {
    setSearchQuery(query);>
          <Button className="bg
    if (query.-orange-500 hover:bg-orange-600 gaplength > 2) {
      //-2">
            <Icon name="Downloa Здесь былаd" size={16} />
            { бы логика поиска поisMobile ? "" : "Скачать отчёт"}
           системе
      toast({
        title:</Button>
        </div>
       "Поиск",
        description:</div>
      
      { `Выполняется пои/* Метрики */}
      <div className="ск: "${query}"`,
      grid gap-6 md:});
    }
  };

  //grid-cols-2 lg:grid-cols-4">
         Получение заголовка тек<StatsCard 
          ущего раздела
  const getStitle="Выручка заectionTitle = () => {
    switch( месяц" 
          value="currentSection) {
      case "dashboard": return "Панель управления";
      ₽245,700" 
          description="case "motorcycles": return "Управление мотоциклами";
      по сравнению с прошлым месcase "orders": return "Управление заказами";
      яцем"
          trend={18case "users": return "Управление пользователями";
      case "settings":.2}
          icon=" return "Настройки";
      defaultBanknote"
          loading: return "Административная панель";
    }
  };={isLoading}
        />
        

  // Получение под
        <StatsCarзаголовка текущего раздd 
          title="Новела
  const getSectionDescriptionые заказы" 
          value=" = () => {
    switch(currentSection58" 
          description="по сравн) {
      case "dashboard": return "ению с прошлым месяцемОбзор ключевых показател"
          trend={12.5}
          icon="ShoppingCartей и статистики";
      case ""
          loading={isLoading}motorcycles": return "Управление ка
        />
        
        <StatsCarталогом мотоциклов дляd 
          title="Актив аренды";
      case "orders":ная аренда" 
          value="24 return "Просмотр и обработ" 
          description="свка заказов клиентов";
      case "users": return "Управлениеободных мотоциклов" пользователями и их прав
          trendLabel="76ами доступа";
      case "settings": return "Настройка параметров% свободных мотоциклов работы системы";
      default"
          icon="Bike": return "Управление сайтом
          loading={isLoading}
        /> проката мотоциклов";
        
        <StatsCard 
    }
  };

  return
          title="Новые клиенты"  (
    <div className="min
          value="32" 
          description-h-screen bg-gray-50="по сравнению с прошл flex">
      {/*ым месяцем"
          trend={ Сайдбар (8.9}
          icon="десктоп) */}UserPlus"
          loading
      {!isMobile &&={isLoading}
        />
       (
        <div 
          className={</div>
      
      {/* Вкладки с графиками */}`bg-white border-r border-gray
      <Tabs defaultValue="sales"-200 flex flex-col transition className="space-y-4-all duration-300 ${">
        <TabsList>
          
            collapsed ? "w-20<TabsTrigger value" : "w-64"
          ="sales">Продажи</TabsT}`}
        >
          <div classNamerigger>
          <TabsTrigger="p-4 border value="bikes">Мотоциклы</Tab-b border-gray-200 flex itemssTrigger>
        </TabsList>-center justify-between">
            
        
        <TabsContent value="<div className={`flex items-centersales" className="space-y gap-2 ${collapsed ? "-4">
          <Carhidden" : "flex"}`}>d>
            <CardHeader
              <Icon name=">
              <CardTitle>СтатBike" size={24}истика продаж className="text-orange-500 </CardTitle>
              <CardDescription>shrink-0" />
                Данные о продажах
              <span className="font за последние 7 мес-bold text-lg">МотоРентяцев.
              </CardDescription>
            </Car</span>
            </div>
            {dHeader>
            <CardContent className="h-96">
              {collapsed && (
              <Icon name="Bike" size={24isLoading ? (
                <div className="} className="text-orange-500 mxw-full h-full-auto" />
            )} bg-gray-100 animate-pulse rounded-md flex items-center justify-
            <Button
              variant="ghost"
              size="icon"
              onClickcenter">
                  <Icon name="={() => setCollapsed(!collapsed)}
              BarChart2" size={48} className="text-gray-300" />
                className={collapsed ? "mx</div>
              ) : (
                -auto" : ""}<ResponsiveContainer width="100%" height="
            >
              100%">
                  <LineChart<Icon name={collapsed ? "ChevronRight
                    data={salesData}
                    " : "ChevronLeft"} sizemargin={{ top: 20, right: ={18} />
            30, left: 20, bottom: </Button>
          </div>20 }}
                  >
                    

          <ScrollArea className="flex-<CartesianGrid strokeDasharray="3 1 py-2">
            <div className="py-2 flex3" stroke="#f0f0f0" flex-col">
               />
                    <XAxis <NavLink
                to="/admin"
                      dataKey="name" 
                end
                className={`
                      tick={{ fill: '#flex items-center gap-3888' }}
                      ax px-4 py-3isLine={{ stroke: '#e mb-1 text5e5e5' }}
                    />-gray-700 ${
                    <YAxis 
                      isActiveLink("/admin")}`}tick={{ fill: '#888' }}
                      
              >
                <Icon name="axisLine={{ stroke: '#e5eLayoutDashboard" size={20} className="5e5' }}
                    />shrink-0" />
                {
                    <Tooltip 
                      content!collapsed && <span>Панель управStyle={{ 
                        backgroundColor:ления</span>}
              </NavLink '#fff',
                        border>
              
              <div className={: '1px solid #e5e5e5`px-4 pt',
                        borderRadius: '8px-2 pb-1 ${collapse',
                        boxShadow: 'd ? "hidden" : "block0 2px 8px rgba(0,"}`}>
                <span className="text0,0,0.1)'-xs font-medium text-
                      }}
                    />
                    <Legend />
                    <Linegray-500 uppercase tracking-wider">
                 
                      type="monotone" 
                      dataKey="value  Контент
                </span>" 
                      name="Продажи
              </div>
              
              <NavLink
                to="/admin/motorcycles"
                className={` (тыс. flex items-center gap₽)"
                      stroke="#-3 px-4 py-3 mb-1 FF7E1D"text-gray-700 ${isActiveLink 
                      strokeWidth={3("/admin/motorcycles} 
                      ")}`}
              >
                <Icondot={{ r: 6, fill: '#FF name="Motorcycle" size={20} className7E1D', strokeWidth: 2="shrink-0" />
                {!collapsed && <span>М, stroke: '#fff' }}
                      отоциклыactiveDot={{ r: 8 </span>}
              </NavLink>}}
                    />
                  </Line
              
              <NavLink
                toChart>
                </ResponsiveContainer>
              )}
            ="/admin/orders"
                className={`flex items-center gap-3 px-</CardContent>
          </Card>4 py-3 mb-1 
        </TabsContent>
        
        text-gray-700 ${isActiveLink("/admin/orders")<TabsContent value="bikes" className="gri}`}
              >
                <divd gap-4 md:grid-cols-2 className="relative">
                  ">
          <Card><Icon name="ShoppingCart" size={20} className="shr
            <CardHeader>
              <Carink-0" />
                  dTitle>Популярные тип<Badge 
                    classNameы мотоциклов</CardTitle="absolute -top-2>
              <CardDescription>
                 -right-2 Распределение аренды по типамh-4 w-4  мотоциклов.
              p-0 flex</CardDescription>
            </CardHeader> items-center justify-center bg
            <CardContent className="h-80">
              {isLoading ? (-orange-500"
                <div className="w-full h-
                    variant="secondary"
                  >full bg-gray-100 animate-pulse
                    2
                  </Badge rounded-md flex items-center justify-center>
                </div">
                  >
                {!collapsed && <span><Icon name="PieChart" size={Заказы</span>}
              48} className="text-gray-300"</NavLink> />
                </div>
              ) :
              
              <NavLink
                to="/ (
                <ResponsiveContainer width="admin/users"
                className={`flex100%" height="100%">
                   items-center gap-3 px-4<PieChart>
                     py-3 mb-1 text<Pie
                      data-gray-700 ${isActiveLink("/={bikeTypesData}
                      admin/users")}`}
              >cx="50%"
                      cy="50
                <Icon name="Users" size={20} className="shrink-%"
                      labelLine={false}0" />
                {!collapsed && 
                      label={({ name, percent<span>Пользователи</span>}
              </NavLink>
               }) => `${name}: ${(percent * 100).toFixed(0)}
              <div className={`px-4 %`}
                      outerRadius={pt-4 pb-180}
                      fill="#8884 ${collapsed ? "hidden" : "blockd8"
                      dataKey="value"
                    >
                      {bike"}`}>
                <span className="text-xs font-medium text-gray-500TypesData.map((entry, index) uppercase tracking-wider">
                   => (
                        <Cell keyСистема
                </span>={`cell-${
              </div>
              
              index}`} fill={COLORS[index %<NavLink
                to COLORS.length]}="/admin/settings"
                className={` />
                      ))}
                    flex items-center gap-3 px-</Pie>
                    <Tooltip 
                      contentStyle4 py-3 mb-1 ={{ 
                        backgroundColor: '#fff',text-gray-700 ${isActiveLink
                        border:("/admin/settings")}`}
              > '1px solid #e5e5e
                <Icon name="Settings" size={5',
                        borderRadius: '820} className="shrink-0" />px',
                        boxShadow: '0 2px
                {!collapsed && <span> 8px rgba(0,0,0Настройки</span>}
              ,0.1)'
                      }}</NavLink>
              
              <div 
                className={`
                      formatter={(value) => [`flex items-center gap-${value} мотоцикл3 px-4 py-3 ов`, 'Количmb-1 text-gray-700 ество']}
                    />cursor-pointer hover:bg-gray-
                    <Legend 100`}
                onClick={()
                      verticalAlign="bottom"  => setIsHelpDialogOpen(true
                      align="center" 
                )}
              >
                <Icon name="      layout="horizontal"
                HelpCircle" size      iconType="circle"={20} className="shrink-0"
                    />
                   />
                {!collapsed && <span></PieChart>
                </ResponsiveПомощь</span>}
              Container>
              )}
            </CardContent</div>
            </div>
          >
          </Card>
          
          </ScrollArea>

          <div className="<Card>
            <CardHeader>
              <CardTitle>Доmt-auto border-t border-gray-200 p-4">ход по категориям
            <DropdownMenu></CardTitle>
              <CardDescription>
              <DropdownMenuTrigger
                Распределение д asChild>
                охода по категориям мотоци<Button variant="ghost" classNameклов.
              </CardDescription>
            </CardHeader>
            <CardContent="w-full flex items-center justify className="h-80">
              {isLoading ? (
                <div className="-start gap-3 hoverw-full h-full bg-gray-:bg-gray-100">
                  100 animate-pulse rounded-md flex items-center justify-center">
                  <Icon name="Bar<Avatar className="w-8 h-8">
                    <Chart" size={48} classNameAvatarImage src="https://images="text-gray-300" />
                .unsplash.com/photo-1</div>
              ) : (
                633332755192-727a05c4<ResponsiveContainer width="100%" height013d?ixlib=rb-4="100%">
                  <Bar.0.3&ixid=Chart
                    data={bikeTypesM3wxMjAData}
                    margin={{ top: 3fDB8MHxwaG9020, right: 30, leftby1wYWdlfHx8: 20, bottom: 20 }}fGVufDB8fHx8
                  >
                    <CartesianGrid strokeDashfA%3D%3D&autoarray="3 3" stroke="#f0=format&fit=crop&w=120f0f0" />
                    &q=80" />
                    <XAxis 
                <AvatarF      dataKey="name" 
                      allback>АД</AvatarFallback>tick={{ fill: '#888' }}
                
                  </Avatar>      axisLine={{ stroke: '#e5
                  {!collapsed && (e5e5' }}
                    />
                    <div className="text-left
                    <YAxis 
                      ">
                      <p className="text-tick={{ fill: '#888' }}
                sm font-medium">Админ Д      axisLine={{ stroke: '#e5митрий</p>
                      e5e5' }}
                    /><p className="text-xs text-gray-500">Админист
                    <Tooltip 
                      ратор</p>
                    </divcontentStyle={{ 
                        backgroundColor: '#>
                  )}
                </Button>fff',
                        border: '1px
              </DropdownMenuTrigger solid #e5e5e5',>
              <DropdownMenuContent align
                        borderRadius: '8px',="end" className="w-56">
                        boxShadow: '0 
                <DropdownMenu2px 8px rgba(0,0Label>Мой аккаунт,0,0.1)'
                      </DropdownMenuLabel>
                }}
                      formatter={(value) =><DropdownMenuSeparator />
                <DropdownMenuItem [`${value} тыс.  className="cursor-pointer" onClick={() => navigate₽`, 'До("/admin/profile")}>
                  ход']}
                    />
                    <Icon name="User" className="mr-2<Legend />
                    <Bar" size={16} />
                   
                      dataKey="value" Профиль
                </DropdownMenuItem
                      name="Доход (т>
                <DropdownMenuItem className="ыс. ₽)"
                      cursor-pointer" onClick={() => navigate("/adminfill="#FF7E1/settings")}>
                  <Icon nameD" 
                      radius="Settings" className="mr-2" size={16} />
                  Настрой={[4, 4, ки
                0, 0]}
                    /></DropdownMenuItem>
                <Dropdown
                  </BarChart>
                MenuSeparator />
                <Drop</ResponsiveContainer>downMenuItem className="cursor-pointer text-re
              )}
            </CardContent>d-500" onClick={()
          </Card>
        </TabsContent => navigate("/")}>
                  <Icon>
      </Tabs>
       name="LogOut" className="mr-2
      {/* Последние заказы */" size={16} />
                  }
      <CarВыйти
                </DropdownMenuItemd>
        <CardHeader>
          >
              </DropdownMenuContent><div className="flex items-
            </DropdownMenu>
          center justify-between flex-wrap gap-2</div>
        </div>
      ">
            <div)}
      
      {/*>
              <CardTitle Основной контент */>Последние заказы</CardTitle}
      <div className="flex-1>
              <CardDescription> flex flex-col">
        {/*Обзор последних за Верхняя панель */}
        казов на платформе.<header className="bg-white border-b border</CardDescription>
            </div>
            -gray-200 py-4 px<Button variant="outline" size="sm-6 flex justify-between items-center">
              Смотреть все
            </Button>
          </div>">
          <div className="flex
        </CardHeader>
        <CardContent items-center gap-3>
          <DataTable 
            data={re">
            {isMobile && (
              <Sheet>
                <ShcentOrders}
            columns={ordereetTrigger asChild>
                  Columns}
            loading={isLoading}<Button variant="ghost" size="icon">
            actions={(row) => (
                    <Icon name="Menu" size
              <Button variant="ghost={20} />
                  " size="icon"></Button>
                </SheetTrig
                <Icon name="ger>
                <SheetContent sideMoreHorizontal" size={16} />
              </Button>
            ="left" className="p)}
            emptyState={-0">
                  
              <div className="text-center py-<div className="p-4 12">
                <Icon name="Shborder-b border-gray-200 oppingCart" size={flex items-center gap-248} className="mx-auto text-gray">
                    <Icon name="Bike-300 mb-4" />
                <h3" size={24} className="text-orange className="text-lg font-medium text-500" />
                    -gray-700">Нет за<span className="font-bold text-lg">казов</h3>
                <pМотоРент</span>
                 className="text-gray-500">  </div>
                  <ScrollArea className="h-[Пока не поступилоcalc(100vh-65 ни одного заказаpx)]">
                    </p>
              </div>
            }<div className="py-4">
          />
        </CardContent>
                      <NavLink
                        to
      </Card>
    </div>
  );
};

export default Dashboard;="/admin"
                        end
                        
