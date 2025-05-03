
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import StatsCard from "@/components/ui/stats-card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Интерфейс для пользователя
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: 'admin' | 'manager' | 'client';
  status: 'active' | 'inactive' | 'blocked';
  registrationDate: string;
  lastLoginDate?: string;
  verified: boolean;
  rentCount: number;
  address?: string;
  passportVerified: boolean;
  drivingLicenseVerified: boolean;
}

// Моковые данные пользователей
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Алексей Смирнов',
    email: 'alexey@example.com',
    phone: '+7 (916) 123-45-67',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    role: 'client',
    status: 'active',
    registrationDate: '2024-12-15T10:30:45',
    lastLoginDate: '2025-05-01T14:25:12',
    verified: true,
    rentCount: 5,
    address: 'г. Москва, ул. Ленина, 15-42',
    passportVerified: true,
    drivingLicenseVerified: true
  },
  {
    id: 2,
    name: 'Мария Иванова',
    email: 'maria@example.com',
    phone: '+7 (925) 234-56-78',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    role: 'client',
    status: 'active',Сейчас улучшу
    registrationDate: '2025-01-20 административную панель, добавив новые функции и современT15:20:33',
    lastLoginный дизайн.

<ppDate: '2025-05-02T09:10:45',
    verified: true,-write filepath="src/pages/Admin/AdminLayout.tsx">
import
    rentCount: 2,
    address: 'г. Москва, пр. В { useState, useEffect } from "react";
import { Outlet, Navернадского, 105-78',
    passportLink, useNavigate, useLocation } from "Verified: true,
    drivingreact-router-dom";
import { ButtonLicenseVerified: true
  },
  {
    id: 3, } from "@/components/ui/button";
import
    name: 'Дмитрий Icon from "@/components/ui/Icon Петров',
    email: 'dmit";
import { Separator } from "@/ry@example.com',
    phone:components/ui/separator";
import { Avatar '+7 (903) 345-67-89',, AvatarFallback, Avat
    role: 'client',
    status: arImage } from "@/components/ui/'inactive',
    registrationDate: '2025avatar";
import { 
  DropdownMenu, 
  DropdownMenu-02-10T09:15:22Content, 
  DropdownMenuItem, 
  DropdownMenuLabel',
    verified: false,
    rentCount: 0, 
  DropdownMenuS,
    passportVerified: falseeparator, 
  DropdownMenu,
    drivingLicenseVerTrigger 
} from "@/componentsified: false
  },
  {/ui/dropdown-menu";
    id: 4,
    name: 'Елена
import {
  Sheet,
  SheetContent,
  SheetT Козлова',
    email: 'elenarigger
} from "@/components@example.com',
    phone: '+7 (901/ui/sheet";
import {
  ) 456-78-90',
    avatarDialog,
  DialogContent,
  DialogDescription: 'https://images.unsplash,
  DialogHeader,
  DialogTitle.com/photo-1569913486515,
  DialogFooter
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";-b74bf7751574?ixlib=
import { Input } from "@/components/ui/input";
import { Scrollrb-4.0.3&ixid=M3wxArea } from "@/components/ui/scrollMjA3fDB8MHx-area";
import {waG90by1wYWdlfHx8fGVufDB8f Tooltip, TooltipContent, TooltipProvider,Hx8fA%3D%3 TooltipTrigger } from "@/D&auto=format&fit=crop&components/ui/tooltip";
import {w=120&q=80',
    role: 'manager Popover, PopoverContent, PopoverT',
    status: 'active',rigger } from "@/components/ui/
    registrationDate: '2024-10-05popover";
import { Calendar } from "@/components/ui/calendar";
import { usT18:45:10',
    lastLogineMobile } from "@/hooks/useDate: '2025-05-03T-mobile";
import { useToast } from "@/hooks/use-toast08:30:00',
    verified: true,
    rentCount: 0";

interface Notification {
  id:,
    passportVerified: true,
    driv number;
  title:ingLicenseVerified: true
   string;
  message: string;
  },
  {
    id: 5,
    name:time: string;
  read: boolean; 'Игорь Васильев',
    email: 'igor@example.com',
  type: "order" | "user
    phone: '+7 (962) 567" | "system" | "alert";
  -89-01',
    role: priority?: "low" | "medium" | "high'client',
    status: 'blocke";
  link?: string;d',
    registrationDate: '2025
}

const mockNotifications: Notification-03-17T12:10:55[] = [
  {
    id: 1,
    title: "Нов',
    lastLoginDate: '2025-04ый заказ",
    message: "-20T15:42:18',
    verified:Поступил новый за true,
    rentCount: 1,каз на Yamaha MT
    passportVerified: true,
    driv-09 от Елены ПетровойingLicenseVerified: false
  },
  ",
    time: "5 минут назад{
    id: 6,
    name: '",
    read: false,
    type: "order",
    priority: "mediumАдминистратор',
    email: 'admin",
    link: "/admin/orders"@motorent.ru',
    phone: '+7 
  },
  {
    id: 2,
    title: "Нов(999) 123-45-67',
    avatarый пользователь",
    message:: 'https://images.unsplash "Зарегистриров.com/photo-1568602471122-7ался новый пользователь: Алексей Иванов",832951cc4c5?ixlib=
    time: "30 минут назадrb-4.0.3&ix",
    read: false,
    typeid=M3wxMjA3f: "user",
    priority: "lowDB8MHxwaG90by1",
    link: "/admin/users"wYWdlfHx8fG
  },
  {
    id:VufDB8fHx8fA 3,
    title: "Систем%3D%3D&auto=format&fit=crop&w=120&qное уведомление",
    message:=80',
    role: 'admin',
    status: "Обновление системы до версии 2.1.5 'active',
    registrationDate: успешно завершено",
     '2024-09-01T09:00time: "2 часа назад:00',
    lastLoginDate: '",
    read: false,
    type2025-05-03T10:15:: "system"
  },
  {
    id: 4,
    22',
    verified: true,
    title: "ОтменаrentCount: 0,
    passportVerified: true, заказа",
    message: "
    drivingLicenseVerified: true
  }
];

// ВЗаказ ORD-005 был отменен пользователем",спомогательные функции
const getR
    time: "4 часа назад",
    read: trueoleText = (role: User['role']) => {,
    type: "order",
  switch (role) {
    case 
    priority: "high",
    link: "/admin/orders"
  },'admin': return 'Администратор';
    
  {
    id: 5,case 'manager': return 'Менеджер';
    case 'client': return '
    title: "Окончание аренды",
    message: "ЧерезКлиент';
  }
};

const 2 часа заканчивается а getRoleBadgeClass = (role: Userренда мотоцикла BMW['role']) => {
  switch (role R 1250 GS",
    time:) {
    case 'admin': return "5 часов назад",
     'bg-purple-100 text-purple-read: true,
    type:700';
    case 'manager': return  "alert",
    priority: "high'bg-blue-100 text-blue",
    link: "/admin/motorcycles-700';
    case 'client':"
  }
];

// return 'bg-gray-100 text-gray-700';
  }
}; Последние действия в систем

const getStatusText = (status: Userе
const recentActivities =['status']) => {
  switch (status) {
    case 'active': return [
  { id: 1, action 'Активен';
    case : "Добавлен м'inactive': return 'Неактивотоцикл", detailsен';
    case 'blocked': return 'Заблокирован';: "Honda CBR650R", time: "
  }
};

const getStatusBadgeClass = (status: User['status']) => {
  switch (status) {
    case 'active': return 'bg10 минут назад", user: "Админ Дмитрий" },
  { id: 2-green-100 text-green-700, action: "Изменен статус';
    case 'inactive': return  заказа", details: "'bg-gray-100 text-gray-700';
    case 'blocked':ORD-008 → Завершен", time: "45 return 'bg-red-100 text минут назад", user: "-red-700';
  }
};Админ Дмитрий" },
  { id: 3, action:

const formatDate = (dateString?: string) => { "Удален пользователь", details: "test
  if (!dateString) return 'Никогда';
  const date = new Dateuser@mail.ru", time: "2(dateString);
  return date.to часа назад", user: "Админ Дмитрий" },LocaleDateString('ru-RU');
};

const get
  { id: 4, action:Initials = (name: string) => { "Обновлены настройки", details: "Часы работы изменены
  return name
    .split(' ')
    .map(", time: "Вчера,part => part.charAt(0))
    .join('') 18:30", user:
    .toUpperCase();
}; "Админ Дмитрий

const Users = () => {
  const [users," }
];

const getNotificationIcon setUsers] = useState<User[]>(mockUsers);
  const = (type: Notification["type"]) => {
  switch (type) { [selectedUser, setSelectedUser] = useState<User
    case "order":
      return <Icon | null>(null);
  const [is name="ShoppingCart" size={16} />;
    case "user":ViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModal
      return <Icon name="UserOpen, setIsEditModalOpen] = useStatePlus" size={16} />;
    (false);
  const [isDeleteModalcase "system":
      return <Icon name="Bell" size={16}Open, setIsDeleteModalOpen] = useState(false);
  const [isCreateModal />;
    case "alert":
      Open, setIsCreateModalOpen] = useStatereturn <Icon name="AlertTriangle" size={16} />;
  (false);
  const [isLoading, setIsLo}
};

const getNotificationBgading] = useState(true);
  const { = (type: Notification["type"], toast } = useToast();
   priority?: Notification["priority"]) => {
  if
  // Статистика
  const active (priority === "high") {
    return 'bg-red-Users = users.filter(u => u.status ===100 text-red-600 'active').length;
  const ver';
  }
  ifiedUsers = users.filter(u => u
  switch (type) {
    case "order":.verified).length;
  const blockedUsers = users.filter(u => u return 'bg-blue-100 text.status === 'blocked').length;-blue-600';
    case "user": return 'bg-green-100 
  
  useEffect(() => {
    //text-green-600';
    case "system": return 'bg-purple Имитация загрузки данных-100 text-purple-600';
    case "alert": return 'bg- с сервера
    const timeryellow-100 text-yellow-600'; = setTimeout(() => {
      setIsLo
  }
};

const getPageading(false);
    }, 1000Title = (path: string): string => {
  );
    
    return () => clearTimeout(timer);
  }, []);
  
  //const parts = path.split('/');
  const page = parts[parts.length - 1]; Функции для работы с пользовател
  
  switch (page) {ями
  const handleStatusChange = (userId:
    case "admin": return "Панель number, newStatus: User['status']) => { управления";
    case "motorcycles": return "
    setUsers(
      users.map(Управление мотоциклами";
    user => 
        user.id === userId ? { ...case "orders": return "Управление заказами";user, status: newStatus } : user
    case "users": return "Управление пользователями";
    case "
      )
    );
    
    toastsettings": return "Настройки";({
      title: "Статус польз
    default: return "Административная панель";ователя обновлен",
      description
  }
};

const getPageIcon: `Пользователь переведен в статус = (path: string): string => {
  const parts = path.split('/');
  const "${getStatusText(newStatus)}"`, page = parts[parts.length - 1];
  
  switch (page) {
    });
    
    // Закрываем модаль
    case "admin": return "Layoutное окно если оно открыто
    setIsViewModalOpen(false);
  };
  
  Dashboard";
    case "motorcycles": return "Bike";
    case "orders": return "Shconst handleRoleChange = (userId: numberoppingCart";
    case "users": return "Users";
    case "settings": return, newRole: User['role']) => { "Settings";
    default: return "
    setUsers(
      users.mapLayoutDashboard";
  }
};(user => 
        user.id === userId ? { ...user, role: newRole

const AdminLayout = () => {
  const [collapse } : user
      )
    );d, setCollapsed] = useState(false);
    
    toast({
      title: "
  const [notifications, setNotifications]Роль пользователя обновл = useState<Notification[]>(mockNotificationsена",
      description: `Пользователю назначена роль "${);
  const [activities, setActivities]getRoleText(newRole)}"`, = useState(recentActivities);
  const [is
    });
  };
  
  const handleSaveUser = (eNotificationsOpen, setIsNotificationsOpen: React.FormEvent<HTMLFormElement>)] = useState(false);
  const [ => {
    e.preventDefault();
    isActivitiesOpen, setIsActivitiesOpen
    if (!selectedUser) return] = useState(false);
  const [;
    
    const formData = new FormDatashowHelpDialog, setShowHelp(e.currentTarget);
    
    const upDialog] = useState(false);
  const [showCalendar, setShowdatedUser: User = {
      ...Calendar] = useState(false);selectedUser,
      name: formData.get('name') as string,
      email
  const [searchQuery, setSearchQuery]: formData.get('email') as string = useState("");
  const [is,
      phone: formData.get('UserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [datephone') as string,
      role: formData.get('role') as User['role, setDate] = useState<Date | undefine'],
      status: formData.get('d>(new Date());
  conststatus') as User['status'],
      verified: formData.get('verified') ===  [showGlobalSearch, setShowGlobalSearch] = useState(false);
  'on',
      passportVerified: formData.get('passportVerified') ===
  const navigate = useNavigate();
   'on',
      drivingLconst location = useLocation();
  const iicenseVerified: formData.get('sMobile = useMobile();
  constdrivingLicenseVerified') === { toast } = useToast 'on',
      address: formData.get('address') as string();
  
  const unreadCount
    };
    
    setUsers( = notifications.filter(n => !n.rea
      users.map(user => 
        d).length;
  
  //user.id === selectedUser.id ? updatedUser : user
      )
    );
    
    toast({
      title: Глобальные горячие клавиши "Пользователь обновлен",
      description: "Данные п
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {ользователя успешно обновлены",
    });
    
    setIs
      // Ctrl/Cmd + KEditModalOpen(false);
    setSelectedUser(null для поиска
      if ((e.ctrlKey);
  };
  
  const handle || e.metaKey) && e.DeleteUser = () => {
    if (!selectedUser) returnkey === 'k') {
        e;
    
    setUsers(
      users.filter(.preventDefault();
        setShowGlobalSearch(true);
      user => user.id !== selectedUser.id)
    );
    
    toast({}
      
      // Esc для закрыт
      title: "Пользовательия поиска
      if (e.key === 'Escape') {
         удален",
      description: `ПользовательsetShowGlobalSearch(false);
      }
    };
    
    window ${selectedUser.name} удален из систем.addEventListener('keydown', handleKeyDown);ы`,
    });
    
    setIsDeleteModalOpen(false);
    set
    return () => window.removeEventListener('keydownSelectedUser(null);
  };
  ', handleKeyDown);
  }, []);
  const handleCreateUser = (e: React.Form
  
  // АвтоматическиEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData сворачивать сайдбар на(e.currentTarget);
    
     мобильных устройствах
  const newUser: User = {
      iuseEffect(() => {
    if (id: users.length > 0 ? MathsMobile) {
      setCollapsed(.max(...users.map(u => utrue);
    }
  }, [i.id)) + 1 : 1sMobile]);
  
  // От,
      name: formData.get('name') as string,
      email: formмечаем уведомление как прочитанData.get('email') as string,ное
  const markAsRead = (id:
      phone: formData.get('phone') as string,
      role: formData.get('role') as number) => {
    setNotifications(notifications. User['role'],
      status: 'active',
      map(notification => 
      notification.id === id ? { ...notification, read: trueregistrationDate: new Date().toISOString(),
       } : notification
    ));
    verified: formData.get('verified') === 'on
    const notification = notifications.find(',
      passportVerified: formDatan => n.id === id);
    .get('passportVerified') === if (notification?.link) {
      'on',
      drivingLicenseVerified: formData.get('setIsNotificationsOpen(false);
      drivingLicenseVerified') === navigate(notification.link);
    }'on',
      rentCount: 0,
  };
  
  // Отмечаем все
      address: formData.get('address уведомления как прочитанные') as string
    };
    
    setUsers([...users, newUser]);
  const markAllAsRead = () =>
    
    toast({
      title: " {
    setNotifications(notifications.map(notification => ({ ...notification, read: trueПользователь создан",
       })));
    toast({
      title: "description: `Новый пользовательВсе уведомления прочита ${newUser.name} успешно создан`,ны",
      description: "Все
    });
    
    setIsCreate уведомления отмечены как прModalOpen(false);
  };
  очитанные"
    });
  };
  
  // Удаляем увед
  // Определение колонок для таблицомление
  const removeNotification = (id: number) => {
    setNotificationsы
  const userColumns = [
    {(notifications.filter(notification => notification.id !== 
      header: "П id));
  };
  
  //ользователь", 
      accessor Удаляем активность
  const removeKey: (user: User) => (Activity = (id: number) => {
        <div className="flex items-center gap
    setActivities(activities.filter(activity => activity.id !== id));
  };-3">
          <Avatar className
  
  // Доб="h-8 w-8">авление тестового уведомления
            <AvatarImage src={user
  const addTestNotification = () =>.avatar} />
            <AvatarFallback>{ {
    const newId = MathgetInitials(user.name)}</.max(...notifications.map(n => nAvatarFallback>
          </Avatar.id)) + 1;>
          <div>
            <div className="font-medium">{user.name
    const types: Notification["type"]}</div>
            <div className="text[] = ["order", "user", "system-sm text-gray-500">{user.email", "alert"];
    const randomType =}</div>
          </div>
         types[Math.floor(Math.random()</div>
      )
    }, * types.length)];
    const priorities: Notification["priority"][] = ["low
    { 
      header: "Тел", "medium", "high"];
    constефон", 
      accessorKey: randomPriority = priorities[Math.floor "phone" 
    },
    { (Math.random() * priorities.length)
      header: "Роль", 
      ];
    
    const newNotification:accessorKey: "role",
      cell: ( Notification = {
      id: newId,
      title: `user: User) => (
        <BadgeТестовое уведомление # className={getRoleBadgeClass(user${newId}`,
      message: "Это тестов.role)}>
          {getRoleText(user.ое уведомление для проверки работыrole)}
        </Badge>
      )
    },
    { 
      header системы уведомлений.",
      time: "Статус", 
      accessorKey: "status",
      cell:: "Только что",
      read: false,
       (user: User) => (
        type: randomType,
      priority: random<Badge className={getStatusBadgeClass(Priority
    };
    user.status)}>
          {getStatusText(user.status)}
        </Badge
    setNotifications([newNotification, ...notifications>
      )
    },
    {]);
    toast({
      title 
      header: "А: "Новое уведомление",
      description: "Добавлено тестовое уведомренд", 
      accessorKey: "rentCountление"
    });
  };
  
  ",
      cell: (user: User) => (
        <div className="font-medium text// Обработка поиска
  const-center">{user.rentCount}</div> handleSearch = (e: React.FormEvent
      )
    },
    { 
      header: "Регистрация",<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast 
      accessorKey: "registrationDate",
      cell: (user: User({
        title: "Поиск) => (
        <div className="text",
        description: `Выполняется пои-sm">{formatDate(user.registrationDate)}</div>
      )
    }ск: "${searchQuery}"`
      });
      
  ];

  return (
    <divsetShowGlobalSearch(false);
    }
   className="space-y-6">
      <div className="flex items-center justify-between">};

  // Функция для определения активной
        <h1 className="text- ссылки
  const isActiveLink = (path2xl font-bold tracking-tight">Управ: string): string => {
    return locationление пользователями</h1>.pathname === path || location.pathname.start
        <Button 
          className="bg-orange-500 sWith(`${path}/`) 
      ? "bghover:bg-orange-600 gap-orange-100 text-orange-600"-2"
          onClick={() => setIs 
      : "hover:bg-gray-CreateModalOpen(true)}
        >
          <Icon name="UserPlus" size100";
  };

  const NavItem = ({={16} />
          Добавить пользователя
        </Button>
       path, icon, label, badge }: { path: string, icon</div>
      
      {/* Основ: string, label: string, badge?: number }) => (
    <TooltipProvider delные метрики */}
      <div className="ayDuration={700}>
      grid gap-4 md:grid-<Tooltip>
        <TooltipTrigger asChild>
          cols-4">
        <StatsCard 
          <NavLink
            to={path}
            title="Всего пользователей" 
          value={users.length} end={path === "/admin"}
            className={`flex items-center gap-3 px-4 py-3 text-gray
          icon="Users"
          loading={isLoading}-700 rounded-md transition
        />
        
        <StatsCar-colors ${isActiveLink(path)}`}
          >
            <divd 
          title="Активные пользователи" 
          value={activeUsers}  className="relative">
              <Icon name={icon} size={20} className
          icon="UserCheck"
          iconColor="text-green-500"
          loading={is="shrink-0" />
              {badge &&Loading}
        />
        
        <StatsCard 
          title=" (
                <Badge className="absolute -top-2 -right-2 h-5 w-Верифицированные" 
          value={verifiedUsers} 
          icon="Ba5 p-0 flex items-center justify-dgeCheck"
          iconColor="text-blue-500"
          loading={isLoadingcenter bg-red-500">
                  {}
        />
        
        <Stbadge}
                </Badge>
              )}atsCard 
          title="Заблокированные" 
          value={bloc
            </div>
            {!collapsekedUsers} 
          icon="UserXd && <span>{label}</span>}
            "
          iconColor="text-red-500"
          loading={isLoading}
        />
      </div>
      {!collapsed && badge && <Badge className="ml-auto"
      {/* Таблица польз>{badge}</Badge>}
          </Navователей с вкладками */}Link>
        </TooltipTrigger>
        {
      <Card>
        <Carcollapsed && <TooltipContent side="rightdHeader>
          <CardTitle>Список п">{label}</TooltipContent>}ользователей</CardTitle>
          
      </Tooltip>
    </TooltipProvider>
  );
  
  return<CardDescription>
            Управление учетными записями п (
    <div className="min-h-screen bgользователей системы
          </CardDescription>
        -gray-50 flex">
      {</CardHeader>
        <CardContent>/* Мобильный сайдбар (
          <Tabs defaultValue="all">показывается только на мобильных устройствах)
            <TabsList className="mb */}
      {isMobile && (
        <Sheet-4">
              <TabsTrigger value="all">Все пользователи</TabsTrigger>
              <TabsTrigger>
          <SheetTrigger asChild>
             value="clients">Клиенты</TabsTrig<Button 
              variant="ghost" 
              sizeger>
              <TabsTrigger value="icon" 
              className="absolute top="staff">Персонал</TabsTrigger>
              <TabsTrigger-4 left-4 z-50 m value="blocked">Заблокированные</TabsTd:hidden"
            >
              <Icon name="Menu" sizerigger>
            </TabsList>={24} />
            </Button>
            
            <TabsContent value="all
          </SheetTrigger>
          ">
              <DataTable 
                data<SheetContent side="left" className="={users}
                columns={userColumns}
                searchable
                searchField="name"
                p-0 w-[280px]">
            <Mpagination
                loading={isLoading}
                obileSidebar 
              navigate={navigate} actions={(user) => (
                  <div
              isActiveLink={isActiveLink} className="flex gap-2">
                    <Button 
                      variant="outline" 
              notifications={unreadCount}
              
                      size="icon" 
                      setShowHelpDialog={setShowHelpDialog}
            />
          </SheetContent>
        className="h-8 w-8"</Sheet>
      )}
      
      
                      onClick={() => {
                        setSelecte{/* Десктопный сайdUser(user);
                        setIsViewModalOpen(true);
                      }}дбар (скрывается на мобиль
                    >
                      <Icon name="ных устройствах) */}
      {!isMobile && (
        Eye" size={14} />
                    <div 
          className={`bg</Button>
                    <Button 
                      variant="outline" 
                      size="-white border-r border-gray-200 flexicon" 
                      className="h-8 w-8"
                      onClick={() => {
                        setSelectedUser( flex-col transition-all duration-300 z-20 ${
            collapsed ? "wuser);
                        setIsEditModalOpen(true);
                -20" : "w-64      }}
                    >
                      "
          }`}
        ><Icon name="Edit" size={14} />
                    </Button>
                    
          <div className="p-4 border<Button 
                      variant="outline" -b border-gray-200 
                      size="icon" 
                flex items-center justify-between">
                  className="h-8 w-8<div className={`flex items-center gap-2 ${collapsed ? " text-red-500 hover:text-red-600"
                      onClick={() => {hidden" : "flex"}`}>
                        setSelectedUser(user);
              <Icon name="Bike" size={24
                        setIsDeleteModalOpen(true);} className="text-orange-500 
                      }}
                      disabled={user.roleshrink-0" />
              <span === 'admin'} // Зап className="font-bold text-lg">МотоРент</span>рет удаления администраторов
                    >
                      <Icon name="
            </div>
            {collapseTrash" size={14} />
                    </Button>
                  </div>d && (
              <Icon name="
                )}
              />
            </TabsBike" size={24} className="text-orange-500 mx-auto" />
            )}Content>
            
            <TabsContent value="clients">
              <DataTable 
                data={users.filter(user
            <Button
              variant="ghost => user.role === 'client')}"
              size="icon"
              onClick
                columns={userColumns}
                search={() => setCollapsed(!collapsed)}
              able
                searchField="name"
                className={collapsed ? "mx-autopagination
                loading={isLoading}" : ""}
            >
              
                actions={(user) => (
                  <div className="flex gap-2"><Icon name={collapsed ? "Chev
                    <Button 
                      variant="ronRight" : "Chevoutline" 
                      size="icon"ronLeft"} size={18} />
             
                      className="h-8 </Button>
          </div>w-8"
                      onClick={() =>

          <ScrollArea className="flex {
                        setSelectedUser(user);-1">
            <div className
                        setIsViewModalOpen(true);
                      }}
                    >="py-6 flex flex-col px
                      <Icon name="Eye" size={-2">
              <NavItem14} />
                    </Button> path="/admin" icon="LayoutDash
                    <Button 
                      variant="board" label="Панель управления"outline" 
                      size="icon" />
              
              {!collapsed && (
                 
                      className="h-8 w-8"
                      onClick={() =><div className="mt-6 {
                        setSelectedUser(user);
                        setIsEditModalOpen(true mb-2 px);
                      }}
                    >-4">
                  <h
                      <Icon name="Edit" size={3 className="text-xs14} />
                    </Button>
                    <Button 
                      variant=" uppercase text-gray-500 font-semoutline" 
                      size="icon"ibold">Управление</h3> 
                      className="h-8 
                </div>
              )}
              
              w-8 text-red-500 <NavItem path="/admin/motorcycles" iconhover:text-red-600"
                ="Bike" label="Мото      onClick={() => {
                        setSelecteциклы" />
              <NavItemdUser(user);
                        setIsDelete path="/admin/orders" icon="ShoppingModalOpen(true);
                      }}Cart" label="Заказы" badge
                    >
                      <Icon name="={3} />
              <NavItem pathTrash" size={14} />
                ="/admin/users" icon="Users" label    </Button>
                  </div>="Пользователи" />
              
                )}
              />
            </TabsContent>
            
            <Tabs
              {!collapsed && (
                <divContent value="staff">
              <DataTable className="mt-6 mb-2  
                data={users.filter(userpx-4">
                  <h3 className="text-xs uppercase text-gray => user.role === 'admin' || user.role-500 font-semibold"> === 'manager')}
                columns={userColumns}
                searchable
                searchСистема</h3>
                </div>Field="name"
                pagination
                loading={isLoading}
                actions={(user
              )}
              
              <NavItem path="/admin/settings" icon="Settings" label) => (
                  <div className="="Настройки" />
              flex gap-2">
                    <Button<NavItem path="/admin/logs 
                      variant="outline" " icon="FileText" label="
                      size="icon" 
                      Журнал действий" />
              className="h-8 w-8"
              {!collapsed && (
                
                      onClick={() => {
                        <div className="mt-6 pxsetSelectedUser(user);
                        set-4">
                  <divIsViewModalOpen(true);
                      }}
                    >
                      <Icon className="rounded-lg bg-gradient name="Eye" size={14} />-to-r from-orange
                    </Button>
                    <Button-500 to-orange-600 p 
                      variant="outline" -4 text-white">
                      size="icon" 
                      
                    <div className="flex items-className="h-8 w-8"
                      onClick={() => {
                        center gap-3 mb-2setSelectedUser(user);
                        set">
                      <div className="bgIsEditModalOpen(true);
                      }}
                    >
                      <Icon-white/20 rounded-full p name="Edit" size={14} />-2">
                        <Icon name="
                    </Button>
                    <Button 
                      variant="outline" PieChart" size={18} className
                      size="icon" 
                      ="text-white" />
                      className="h-8 w-8 </div>
                      <h3 classNametext-red-500 hover:text-red-600"
                      onClick={() => {
                        set="font-medium">Статистика</h3SelectedUser(user);
                        setIs>
                    </div>
                    DeleteModalOpen(true);
                      }}<p className="text-sm text
                      disabled={user.role === 'admin'-white/90 mb-3} // Запрет удаления администраторов
                    >
                      ">
                      Просмотрите аналитику по заказам и кл<Icon name="Trash" size={14} />
                    </Button>
                иентам в реальном времени  </div>
                )}
              />
            </TabsContent>
            
            <TabsContent
                    </p>
                    <Button 
                      variant="secondary value="blocked">
              <DataTable " 
                      size="sm" 
                data={users.filter(user => user.status === 'blocked')}
                      className="w-full bg
                columns={userColumns}
                searchable-white text-orange-600
                searchField="name"
                pagination hover:bg-white/90"
                
                loading={isLoading}
                actions={(user) => (
                        onClick={() => navigate("/admin/analytics<div className="flex gap-2">
                ")}
                    >
                          <Button 
                      variant="outlineОткрыть отчеты
                " 
                      size="icon"     </Button>
                  </div>
                      className="h-8 w
                </div>
              )}
            -8"
                      onClick={() => {</div>
          </ScrollArea>
                        setSelectedUser(user);

          <div className="mt-
                        setIsViewModalOpen(true);auto border-t border-gray-200 
                      }}
                    >
                p-4">
                  <Icon name="Eye" size={14<DropdownMenu open={isUserMenuOpen} />
                    </Button>
                } onOpenChange={setIsUserMenuOpen    <Button 
                      variant="outline}>
              <DropdownMenuT" 
                      size="icon" rigger asChild>
                <Button variant
                      className="h-8 w="ghost" className="w-full flex-8"
                      onClick={() => { items-center justify-start
                        setSelectedUser(user);
                        setIsEditModalOpen(true); gap-3 hover:bg-gray-
                      }}
                    >
                      <Icon name="Edit" size={14100">
                  <Avatar className="w-8} />
                    </Button>
                 h-8">
                    <    <Button 
                      variant="outlineAvatarImage src="https://images" 
                      size="icon" .unsplash.com/photo-1
                      className="h-8 w-8 text-red-500 hover633332755192-727a05c4013d?:text-red-600"
                      ixlib=rb-4.0.onClick={() => {
                        setSelectedUser3&ixid=M3wxMjA(user);
                        setIsDeleteModal3fDB8MHxwaG90Open(true);
                      }}
                by1wYWdlfHx8      disabled={user.role === 'admin'fGVufDB8fHx8} // Запрет удаления администfA%3D%3D&autoраторов
                    >
                      =format&fit=crop&w=120<Icon name="Trash" size={14&q=80" />
                    <AvatarFallback>АД} />
                    </Button>
                </AvatarFallback>
                    </div>
                )}
                em</Avatar>
                  {!ptyState={
                  <div className="textcollapsed && (
                    <div-center py-12">
                     className="text-left">
                <Icon name="Shield" size={48} className      <p className="text-sm="mx-auto text-gray-300  font-medium">Админ Дмитрий</p>
                      mb-4" />
                    <h3<p className="text-xs text-gray-500">Администратор</p> className="text-lg font-medium text-
                    </div>
                  )}gray-700">Нет заблокированных п
                </Button>
              </Dropdownользователей</h3>
                    MenuTrigger>
              <Drop<p className="text-gray-500">Заблокированные пользователиdownMenuContent align="end" className="w-64">
                 будут отображаться здесь<div className="p-2 border-b"></p>
                  </div>
                }
              />
            </TabsContent
                  <div className="flex items->
          </Tabs>
        start gap-3">
                    <Avatar</CardContent>
      </Card>
       className="w-10 h-10">
      {/* Модальное окно просмот
                      <AvatarImage src="ра пользователя */}
      https://images.unsplash.com/photo-1633332755192-727a<Dialog open={isViewModalOpen} onOpen05c4013d?ixlib=rb-4.0Change={setIsViewModalOpen}>
        .3&ixid=M3wx<DialogContent className="sm:max-w-MjA3fDB8MHxwaG90by1wYWdlfHx8fG[700px]">
          <DialogHeader>
            VufDB8fHx8fA%3D%3D&auto=format&fit=crop&<DialogTitle>Информация о пользователе</DialogTitle>w=120&q=80" />
            <DialogDescription>
              Дет
                      <AvatarFallback>альная информация о выбранном пользАД</AvatarFallback>ователе
            </DialogDescription>
          
                    </Avatar>
                    </DialogHeader>
          
          {<div className="flex flex-col">
                      selectedUser && (
            <div className="space-y-6">
              <div<span className="font-medium">Админ Дмитрий</span>
                      <span className="text-xs text- className="flex flex-col md:flex-row gapgray-500">admin@motorent.ru</span>-6">
                <div className="md:w-1/3 flex flex-col items
                      <Badge variant="outline" className="mt-1 text-xs px-center">
                  <Avatar className="h-32 w-32 mb-4">-1 py-0 w-fit">
                    <AvatarImage src={Администратор</Badge>
                    selectedUser.avatar} />
                    </div>
                  </div>
                <AvatarFallback className="text-2</div>
                
                <DropdownMenuSeparator />
                
                xl">{getInitials(selectedUser.name)}</AvatarFallback>
                <DropdownMenuItem className="cursor-pointer" onClick={()  </Avatar>
                  
                  <div className => navigate("/admin/profile")}>
                  ="text-center">
                    <h3 className="text-xl font-bol<Icon name="User" className="mr-2" sized">{selectedUser.name}</h3>={16} />
                  М
                    <Badge className={getRoleBой профиль
                </DropdownMenuItem>
                adgeClass(selectedUser.role)} className<DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/admin/settings")}>
                  <Icon name="Settings" className="mt-2">
                      {getRoleText(selectedUser.role)}
                    ="mr-2" size={16} /></Badge>
                  </div>
                
                  Настройки
                  
                  <div className="mt-4</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() space-y-2 w => navigate("/admin/security")}>
                  -full">
                    <div className="<Icon name="Shield" className="mr-2" size={16} />
                  flex justify-between text-sm">
                Безопасность
                </Drop      <span className="text-gray-500">downMenuItem>
                
                <DropdownСтатус:</span>
                      MenuSeparator />
                
                <DropdownMenuItem className="cursor-pointer"<Badge className={getStatusBadgeClass(selectedUser.status)}>
                        { onClick={() => setShowHelpDialog(true)}>
                getStatusText(selectedUser.status)}  <Icon name="HelpCircle" className
                      </Badge>
                    </div>
                    <div className="flex justify="mr-2" size={16} />
                  Пом-between text-sm">
                      ощь и поддержка
                </Dropdown<span className="text-gray-500">MenuItem>
                
                <DropdownMenuВерификация:</span>
                      <spanSeparator />
                
                 className="font-medium">
                        {selectedUser.<DropdownMenuItem className="cursor-pointer text-red-500"verified ? (
                          <span onClick={() => navigate("/")}>
                  <Icon name="LogOut" className="mr- className="flex items-center gap-1 text-green-2" size={16} />
                  600">
                            <Icon name="CheckВыйти
                </DropdownMenuItem>Circle" size={14} /> Подтв
              </DropdownMenuContent>
            ержден
                          </span>
                </DropdownMenu>
          </div        ) : (
                          <span className>
        </div>
      )}="flex items-center gap-1 text
      
      {/* Основной контент */}-yellow-600">
                            <Icon name="AlertCircle" size={
      <div className="flex-1 flex14} /> Не подтвержден
                          </span>
                        )} flex-col">
        {/* Вер
                      </span>
                    хняя панель */}
        </div>
                    <div className="flex justify-between text-sm">
                      <header className="bg-white border-b border<span className="text-gray-500">-gray-200 py-4 px-Аренды:</span>
                      <span className="font-medium"6 flex justify-between items-center shadow>{selectedUser.rentCount}</span>-sm">
          <div className={i
                    </div>
                  </div>
                </div>
                sMobile ? "ml-12" : ""
                <div className="md:w-}>
            <div className="flex items-2/3 space-y-6">center gap-2">
              <Icon
                  <div>
                    <h name={getPageIcon(location.pathname)} size={4 className="text-sm font-medium text20} className="text-orange-500"-gray-500 mb-2"> />
              <h1 className="textКонтактная информация</h4>-xl font-bold">{getPageTitle(
                    <div className="space-y-2">location.pathname)}</h1>
            
                      <div className="flex items-</div>
            <div className="flexcenter gap-2">
                        <Icon name="Mail" size={16} items-center gap-2 mt-1 className="text-gray-500" />">
              <NavLink to="/admin"
                        <span>{selectedUser.email} className="text-sm text-gray-500</span>
                      </div>
                 hover:text-orange-500">
                      <div className="flex items-center gap-2">
                        <Icon name="Главная
              </NavLink>
              Phone" size={16} className="text-<Icon name="ChevronRight" size={14gray-500" />
                        <span} className="text-gray-400>{selectedUser.phone}</span>
                " />
              <span className="text-sm text-gray-500">{getPage      </div>
                      {selectedUser.address &&Title(location.pathname)}</span> (
                        <div className="flex items
            </div>
          </div>-center gap-2">
                          
          <div className="flex items<Icon name="MapPin" size={16}-center gap-3">
            <Button className="text-gray-500" /> 
              variant="outline" 
              size
                          <span>{selectedUser.address}</span>
                        </div>
                ="sm" 
              className="hidden      )}
                    </div>
                 md:flex items-center gap-2  </div>
                  
                  <div>
                    <h4 "
              onClick={() => setShowGlobalSearch(true)}className="text-sm font-medium text-
            >
              <Icon name="Search" size={14} />
              gray-500 mb-2">Дан<span>Поиск</span>ные аккаунта</h4>
                    <div className="space-y-2">
                      <div className="flex items-
              <kbd className="pointer-events-none inlinecenter gap-2">
                        <Icon-flex h-5 select-none items-center name="Calendar" size={16} className="text-gray gap-1 rounded border bg-gray-100 -500" />
                        <span>Зарегистрирован: {formatDate(selectedUser.registrationDate)}</spanpx-1.5 font-mono text-[>
                      </div>
                      10px] font-medium opacity-100<div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-gray ml-2">
                <span>-500" />
                        <span>⌘</span>K
              </kbd>Последний вход: {formatDate(selectedUser.lastLoginDate)}
            </Button>
            
            <Button variant</span>
                      </div>
                ="ghost" size="icon" onClick={() => setShow    </div>
                  </div>Calendar(!showCalendar)}>
              <Icon name="Calendar" size
                  
                  <div>
                    ={18} />
            </Button>
            <h4 className="text-sm font-medium text-gray-500 mb-2
            <Popover open={show">Документы</h4>Calendar} onOpenChange={setShow
                    <div className="space-yCalendar}>
              <PopoverT-2">
                      <div className="rigger asChild>
                <Button variantflex items-center gap-2">
                ="outline" size="icon        <Icon name="FileText" size={">
                  <Icon16} className="text-gray-500" name="Calendar" size={18} /> />
                        <span>Пасп
                </Button>
              </PopoverTорт:</span>
                        {selectedUser.passrigger>
              <PopoverContent classNameportVerified ? (
                          <span="w-auto p-0" className="flex items-center gap-1  align="end">
                <Calendartext-green-600">
                            
                  mode="single<Icon name="CheckCircle" size={14"
                  selected={date}
                } /> Подтвержден
                  onSelect={setDate}
                            </span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-600initialFocus
                />
              </Popover">
                            <Icon name="AlertCircle" size={14} /> Не подContent>
            </Popover>
            
            <Popover open={isтвержден
                          </span>
                        )}
                      </div>ActivitiesOpen} onOpenChange={setIs
                      <div className="flex items-ActivitiesOpen}>
              <Popovercenter gap-2">
                        <IconTrigger asChild>
                <Button variant="outline" size name="CreditCard" size={="icon">
                  <Icon name="16} className="text-gray-500" />
                        <span>ВодHistory" size={18} />
                </Buttonительское удостоверение:</span>>
              </PopoverTrigger>
                        {selectedUser.driving
              <PopoverContent className="w-LicenseVerified ? (
                          [350px] p-0" align="end"><span className="flex items-center gap-1 text-green-600">
                
                <div className="px-4 py-            <Icon name="CheckCircle" size={14} /> Подтверждено
                          3 border-b flex justify-between items-center</span>
                        ) : (">
                  <h3 className="
                          <span className="flex items-center gap-1 text-yellow-600">font-semibold">Недавние действ
                            <Icon name="AlertCircleия</h3>
                  <Button" size={14} /> Не подтверждено
                          </span> variant="ghost" size="sm">
                        )}
                      </div>Все действия</Button>
                </div>
                    </div>
                  </div
                <ScrollArea className="max->
                  
                  <div>
                    <h4 className="h-[350px]">
                  {activities.length > 0 ? (
                    activities.text-sm font-medium text-gray-500 mb-2">Действия</h4>map((activity) => (
                      <div 
                    <div className="flex flex-wrap
                        key={activity.id}  gap-2">
                      <Button
                        className="px-4 py
                        variant="outline"
                        size="sm-3 border-b last:border-0 "
                        className="gap-1"
                        onClickhover:bg-gray-50 relative group"
                      >
                        <div={() => {
                          setIsViewModalOpen(false); className="flex items-start gap-3">
                          setIsEditModalOpen(true
                          <div className="bg);
                        }}
                      >
                        <Icon name="Edit" size={-blue-100 text-blue-600 rounded-full p-2 mt14} />
                        Редактировать
                -0.5">
                      </Button>
                      
                      {            <Icon name="Activity" size={14} />
                          </divselectedUser.status !== 'active' && (
                >
                          <div>        <Button
                          variant="outline"
                            <div className="flex
                          size="sm"
                           items-center justify-between">
                              <h4 className="font-mediumclassName="gap-1 border-green-200 text-sm">{activity.action text-green-600 hover:bg}</h4>
                              <button-green-50"
                          onClick 
                                className="absolute top={() => handleStatusChange(selectedUser.-3 right-3 opacityid, 'active')}
                        -0 group-hover:opacity-100>
                          <Icon name="User transition-opacity"
                                onClickCheck" size={14} />
                          Активировать
                        </Button>={() => removeActivity(activity.id)}
                
                      )}
                      
                      {selectedUser.status !== 'blocked' &&              >
                                <Icon name="X" size={14} className="text-gray (
                        <Button
                          variant-400 hover:text-gray-700="outline"
                          size="sm"" />
                              </button>
                
                          className="gap-1 border            </div>
                            <p className-red-200 text-red-600 hover:bg-red-50"="text-gray-600 text-sm"
                          onClick={() => handleStatusChange(selectedUser.id, 'blocked')}>{activity.details}</p>
                            <div className="flex items-center gap-2 
                          disabled={selectedUser.role === 'adminmt-1">
                              <span className="text-'} // Запрет блокировки админов
                        >
                          <Iconxs text-gray-400">{activity.time name="UserX" size={14} />}</span>
                              <span className="text
                          Заблокировать
                        </Button>
                      )}-xs text-gray-400">•</span>
                              <span className="text-xs text-
                      
                      {selectedUser.role !==gray-400">{activity.user}</span>
                            </div>
                           'admin' && selectedUser.role !== 'manager'</div>
                        </div> && (
                        <Button
                          
                      </div>
                    ))variant="outline"
                          size="sm
                  ) : (
                    <div"
                          className="gap-1  className="text-center py-6">
                      border-blue-200 text-blue-600 hover:bg-blue-50"
                          <Icon name="FileX" className="mxonClick={() => handleRoleChange(selectedUser-auto text-gray-300 mb-.id, 'manager')}
                        2" size={24} />
                      >
                          <Icon name="UserPl<p className="text-gray-500us" size={14} />
                          ">Нет недавних действийСделать менеджером
                </p>
                    </div>
                        </Button>
                      )}
                  )}
                </ScrollArea>
              </PopoverContent>
            </Pop      
                      <Button
                        variant="outline"
                        size="sm"over>
            
            
                        className="gap-1"<DropdownMenu open={isNotificationsOpen} onOpenChange={setIsNotific
                        onClick={() => {
                          ationsOpen}>
              <DropdownMenutoast({
                            title: "СTrigger asChild>
                <Buttonброс пароля",
                            description: variant="outline" size="icon" "Ссылка для с className="relative">
                  <Icon nameброса пароля отправлена на="Bell" size={18} />
                  {unreadCount > 0 email пользователя",
                          });
                        }} && (
                    <span
                      >
                        <Icon name className="absolute -top-1 -right-1 bg-red-="Key" size={14} />
                        Сбросить пароль500 text-white text-xs rounde
                      </Button>
                    </div>
                  </div>
                </div>d-full w-5 h-5 flex items-center justify-center">
                
              </div>
              
              <div className      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrig="flex justify-end">
                <Button onClickger>
              <DropdownMenuContent={() => setIsViewModalOpen(false) align="end" className="w-[350}>
                  Закрыть
                px]">
                <div className="flex</Button>
              </div>
            </div>
          )}
        </DialogContent items-center justify-between px-4>
      </Dialog>
      
       py-3 border-b">{/* Модальное окно редакт
                  <h3 className="font-ирования пользователя */}
      semibold">Уведомления<Dialog open={isEdit</h3>
                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                        Прочитать все
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={addTestNotification}>
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
                <ScrollArea className="max-h-[400px]">
                  {notifications.length === 0 ? (
                    <div className="text-center py-6">
                      <Icon name="BellOff" className="mx-auto text-gray-300 mb-2" size={24} />
                      <p className="text-gray-500">Нет уведомлений</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer relative border-b last:border-0 ${
                          notification.read ? 'opacity-80' : 'bg-blue-50/40'
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex gap-3">
                          <div className={`mt-1 rounded-full p-2 ${getNotificationBg(notification.type, notification.priority)}`}>
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
                </ScrollArea>
                <div className="p-2 border-t text-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-sm"
                    onClick={() => {
                      setIsNotificationsOpen(false);
                      navigate("/admin/notifications"); 
                    }}
                  >
                ## INTRODUCTION

class Automaton:    Просмотреть все уведомления
    def __init__(self, alf =
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
             [], states = [], init = 0, finals = [], delta = {}):
        self.alf =
            <Button variant="outline" className="gap alf
        self.states = states
        self.init = init
        self.-2" onClick={() => navigate("/")finals = finals
        self.delta = delta}>
              <Icon name="Ex
    
    def accept(self, word):ternalLink" size={16} />
              
        s = self.init
        for c in word:
            if (s, c) not<span className="hidden sm:inline">На сайт</span in self.delta:
                return False
            s = self.>
            </Button>
          </divdelta[(s, c)]
        return s>
        </header>
        
         in self.finals

automLexical = Autom{/* Статус-бар сaton(['0', '1', '2', '3', информацией */}
        <div className="bg '4', '5', '6', '7', '8',-blue-50 border-b border-blue '9', '<', '=', '>', '(', ')', '{', '}', '[',-100 py-2 px-6 ']', '+', '-', '*', '/', '" flex justify-between items-center text-sm text-blue-700">
          <div', 'r', 'e', 't className="flex items-center gap-2">', 'u', 'n', 'p
            <Icon name="Info" size={16}', 'i', 'l', ' ', '\n'],  />
            <span>Версия систем
                  list(range(1, 34)),ы: <Badge variant="outline" className="ml
                  1,
                  [2-1">2.1.5</Badge></span>, 4, 5, 6, 7, 8, 9, 10, 
          </div>
          <div className11, 12, 13, 14="hidden md:flex items-center gap-6, 15, 16, 18, 19, ">
            <div className="flex items-center gap-2">
              <Icon name="ShoppingCart" size={1622, 32, 33],
                  {} />
              <span>Актив
                      (1, '0') : 2,ных заказов: <strong
                      (1, '1') : >3</strong></span>
            2,
                      (1, '2</div>
            <div className="flex items') : 2,
                      (1, '3') :-center gap-2">
              <Icon 2,
                      (1, ' name="Users" size={16} />4') : 2,
                      (
              <span>Пользователей онлайн: <strong>12</strong1, '5') : 2,
                      (1,></span>
            </div>
             '6') : 2,
                      (1, '7') : 2,
                      (1, '8') :<div className="flex items-center gap- 2,
                      (1, '2">
              <Icon name="Server" size={16} />
              <span>Нагрузка с9') : 2,
                      (ервера: <strong>32%</strong></span1, '<') : 3,
                      (>
            </div>
          </div3, '=') : 4,
                >
        </div>
        
              (1, '=') : 5{/* Контент страницы */}
        <main className="flex-1 p,
                      (1, '(') : 6,
                      (1, ')') : -6 overflow-auto">
          7,
                      (1, '{')<Outlet />
         : 8,
                      (1, '}') : </main>
        
        {/*9,
                      (1, '[') : 10, Футер */}
        <footer className="bg
                      (1, ']') : 11,
                      -white border-t border-gray-200(1, '+') : 12, p-4 text-center text-sm text-gray-500">
          <div
                      (1, '-') : 13,
                      ( className="container mx-auto flex1, '*') : 14,
                      (1, '/ flex-col md:flex-row justify') : 15,
                      (1-between items-center">
            <div, '"') : 16,
                      >&copy; {new Date().getFull(16, '"') : 18,
                      (Year()} МотоРент. Все права1, 'r') : 20,
                      ( защищены.</div>
            <div20, 'e') : 21,
                      (21, 't') :  className="flex flex-wrap justify22,
                      (1, 'p-center gap-4 mt-2 md:mt-0">
              ') : 23,
                      (23, 'r<a href="#" className="hover') : 24,
                      (24:text-gray-700">Полит, 'i') : 25,
                      (25ика конфиденциальности, 'n') : 26,</a>
              <a href="#" className="
                      (26, 't') : 19,
                      (1, 'i') : 27,hover:text-gray-700">Условия использования</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setShowH
                      (27, 'n') : 28,elpDialog(true);
              }} className="
                      (28, 'p') : 29,hover:text-gray-700">Пом
                      (29, 'u')ощь</a>
             : 30,
                      (30,</div>
          </div>
        </footer>
      </div>
       't') : 33,
                      (
      {/* Пл1, ' ') : 31,
                      (авающая кнопка действ31, ' ') : 31,
                      (ий */}
      <div className="fixed bottom-6 right-6 z-1, '\n') : 32
                  })

class50">
        <DropdownMenu>
          <Drop PeekableIterator:
    def __init__(selfdownMenuTrigger asChild>
            <Button size="lg" className, ait):
        self.ait = ait="h-14 w-14 
        self.buf = None
    
    def peek(rounded-full shadow-lg bg-orange-500 hover:bg-orange-600">
              self):
        if self.buf is None:
            try:
                self.buf = next(self<Icon name="Plus" size={24.ait)
            except StopIt} />
            </Button>eration:
                return None
        return self
          </DropdownMenuTrigger>
          <DropdownMenuContent align.buf
    
    def __iter__(self):
        ="end" className="w-56return self
    
    def __next__(self):
        if">
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/admin self.buf is not None:
            rv = self.buf/motorcycles/add")}>
              <Icon name="Bike" className
            self.buf = None
            return rv
        else="mr-2" size={18} />:
            return next(self.ait)
              Добавить мотоцикл
            </DropdownMenuItem


## LEXICAL ANALYSIS

class LexicalError>
            <DropdownMenuItem className="cursor-pointer" onClick(Exception):
    pass

def lexical_analyze={() => navigate("/admin/orders/add")}>
              <Icon name="ShoppingCart" className(input_string):
    current_state = 1  ="mr-2" size={18} />
              Добавить заказ
            </DropdownMenuItem>
            # Initial state
    result = []
    current<DropdownMenuItem className="cursor-pointer"_token = ""
    
    for char in input_string onClick={() => navigate("/admin/users/ad:
        found_transition = False
        d")}>
              <Icon name="UserPlus" className="mr-2" size
        if (current_state, char) in automLex={18} />
              Добавитьical.delta:
            found_transition = True пользователя
            </DropdownMenuItem>
            <DropdownMenu
            next_state = automLexical.delta[(current_state, char)]
            
            Separator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/admin/motorcycles/if current_state == 1 and next_state incategories")}>
              <Icon name="Tag automLexical.finals:
                #" className="mr-2" size={18 Starting a new token
                current_token =} />
              Доб char
                current_state = next_stateавить категорию
            </DropdownMenuItem>
            <DropdownMenuItem
            elif current_state in automLexical. className="cursor-pointer" onClick={() => navigatefinals and next_state in automLexical.("/admin/promocodes")}>
              <Icon name="Ticket"finals:
                # Token finished, starting className="mr-2" size={18} a new one
                result.append(( />
              Создать промокод
            </DropdownMenuItem>
          current_token, current_state))
                current_token = char</DropdownMenuContent>
        </DropdownMenu>
      </div>
                current_state = next_state
            else:
                # Continuing the current token
      
      {/* Диалог
                current_token += char
                current_ справки */}
      <Dialog open={showHelpDialog} onOpenChange={setShowstate = next_state
        
        elif current_state in automHelpDialog}>
        <DialogLexical.finals:
            # NoContent className="sm:max-w-[600px]">
          <Dialog transition with the current character, but we have a valiHeader>
            <DialogTitle>Справd token
            result.append((current_token, current_state))
            current_tokenка по административной панели</DialogTitle = ""
            current_state = 1>
            <DialogDescription>
              Основные сведения о функциях и
            
            # Reconsider the current character with the initial state
            if (current возможностях административной панели
            </DialogDescription>
          </DialogHeader_state, char) in automLexical>
          
          <div className=".delta:
                found_transition = True
                next_state = automLexical.delta[(current_space-y-6 py-4">
            <div className="gristate, char)]
                current_token = char
                currentd grid-cols-1 md:grid-_state = next_state
        
        cols-2 gap-6">
              <divif not found_transition and char not in [ className="bg-gray-50 p-' ', '\n']:
            raise Lex4 rounded-md">
                <div className="flex items-center gap-2 icalError(f"Invalid character: {char}")
    mb-3">
                  <div className="bg-orange
    # Add the last token if it's-100 text-orange-600 rounde valid
    if current_state in automLexicald-full p-1.5">
                    <Icon name="LayoutD.finals and current_token:
        result.append((current_token, current_state))
    ashboard" size={16} />
                  
    return result

def tokenize(input_</div>
                  <h3 string):
    tokens = []
    for token,className="font-medium">Панель управ state in lexical_analyze(input_stringления</h3>
                </div>
                <p className="text-sm text-gray-600):
        if state == 2:  # INT">
                  Сводная информация о сост
            tokens.append(('INT', token))
        elif state == 4:  # LEоянии сайта: статистика прод (less or equal)
            tokens.append(('аж, активные заказы и метLE', token))
        elif state == рики.
                </p>
              5:  # EQ (equal)</div>
              
              <div className="bg-gray-
            tokens.append(('EQ', token50 p-4 rounded-md">
                <div className="flex items-center))
        elif state == 6:  # LPAREN
            tokens.append( gap-2 mb-3">
                  <div className="bg-orange('LPAREN', token))
        elif state == 7:-100 text-orange-600 rounde  # RPAREN
            tokens.append(('RPARENd-full p-1.5">
                ', token))
        elif state == 8    <Icon name="Bike" size={16:  # LBRACE
            tokens.append(('} />
                  </div>
                  <h3 className="font-mediumLBRACE', token))
        elif state == 9:  ">Управление мотоциклами</h3# RBRACE
            tokens.append(('RBRACE',>
                </div>
                <p token))
        elif state == 10: className="text-sm text-gray-600  # LBRACKET
            tokens">
                  Добавление, ред.append(('LBRACKET', token))
        elif state == 11:актирование и удаление мотоциклов  # RBRACKET
            tokens. из каталога.
                </p>append(('RBRACKET', token))
        elif state == 12:  #
              </div>
              
              <div className="bg-gray-50 p-4 rounded-m PLUS
            tokens.append(('PLUS', token))d">
                <div className="flex items-
        elif state == 13:  #center gap-2 mb-3"> MINUS
            tokens.append(('MINUS
                  <div className="bg-orange-100 text-orange', token))
        elif state == 14:  # TIMES
            tokens.appen-600 rounded-full p-1.d(('TIMES', token))
        elif5">
                    <Icon name="ShoppingCart" size={16} />
                 state == 15:  # DIV
            tokens.  </div>
                  <h3append(('DIV', token))
         className="font-medium">Управление заказами</helif state == 18:  # STRING
            tokens.appen3>
                </div>
                <p className="text-d(('STRING', token))
        elif state == 19:  sm text-gray-600">
                  # PRINT
            tokens.append(('PRINT',Просмотр и обработка за token))
        elif state == 22:  # RETURNказов, обновление статуса,
            tokens.append(('RETURN', token))
        elif state == 33:  # INPUT управление бронированиями.
                </p>
              </div>
              
              <div className="
            tokens.append(('INPUT', token))
        # Skip spaces and newlines (states 31 anbg-gray-50 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-d 32)
    
    # Add an EOI3">
                  <div className="bg-orange-100 text-orange-600 token at the end
    tokens.append(('EO rounded-full p-1.5">I', ''))
    
    return tokens
                    <Icon name="Users" size={16}


## SYNTACTIC ANALYSIS

class SyntaxError( />
                  </div>
                  Exception):
    pass

class Node:<h3 className="font-medium">
    def __init__(self, type, valueУправление пользователями</h3>
                </div>
                <p=None, children=None):
        self.type = className="text-sm text-gray-600 type
        self.value = value
        self.children = children if children is not None else []">
                  Управление учетными записями п
    
    def add_child(self,ользователей, ролями и правами child):
        self.children.append( доступа.
                </p>child)
    
    def __str__(self):
        return
              </div>
            </div>
             self.to_string()
    
    def to_string(self, indent=0):
        
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-medium mbresult = "  " * indent + f"{self.type}"-2">Горячие клави
        if self.value is not None:
            ши</h3>
              <div classNameresult += f": {self.value}"
        result += "\n"
        ="grid grid-cols-2 gap-y-2 gap-x-4">
        for child in self.children:
            result += child.to
                <div className="flex items-center justify_string(indent + 1)
        -between">
                  <span className="text-sm
        return result

def parse(tokens):
    tokens_iter = PeekableIterator(iter">Глобальный поиск</span(tokens))
    return parse_program>
                  <div className="flex gap(tokens_iter)

def parse_program-1">
                    <kbd className="px(tokens):
    root = Node("PROGRAM")
    -2 py-1 text-xs
    while tokens.peek() and tokens.peek()[ font-semibold bg-white border rounded-md">0] != 'EOI':
        statement = parse_statement(tokens)
        root⌘</kbd>
                    <kbd className.add_child(statement)
    ="px-2 py-1 text-xs font-semibold bg-white border rounded-md">
    # Consume the EOI tokenK</kbd>
                  </div>
    if tokens.peek() and tokens.peek()[0
                </div>
                <div className="flex items] == 'EOI':
        next(tokens)
    -center justify-between">
                  
    return root

def parse_statement(<span className="text-sm">Сохранитьtokens):
    if tokens.peek()[0] == '</span>
                  <div className="flex gap-1">PRINT':
        return parse_print_statement(tokens)
                    <kbd className="px-2 
    elif tokens.peek()[0] == py-1 text-xs font-semibold bg-white'RETURN':
        return parse_return_statement(tokens)
    elif tokens.peek()[ border rounded-md">⌘</kbd>
                    <kbd className="px-2 py-10] == 'LBRACE': text-xs font-semibold bg-white border rounded-
        return parse_block(tokens)
    elsemd">S</kbd>
                  :
        # Default to expression statement
        expr</div>
                </div>
                <div className="flex items = parse_expression(tokens)
        return Node("STATEMENT-center justify-between">
                  <span className="text-", children=[expr])

def parse_print_statementsm">Добавить</span>
                  <div className="flex gap-1">
                    <kbd className="px(tokens):
    token_type, token_value-2 py-1 text-xs font-semibol = next(tokens)  # Consume 'PRINT'd bg-white border rounded-md">⌘</kbd>
                    <kbd className="px-2 py-1 text
    if token_type != 'PRINT':
        raise S-xs font-semibold bg-white border rounded-md">yntaxError(f"Expected 'print', got {N</kbd>
                  </div>
                </div>
                <div className="token_type}")
    
    # Check for the openingflex items-center justify-between">
                 parenthesis
    if tokens.peek()[  <span className="text-sm">0] != 'LPAREN':
        raise SyntaxПомощь</span>
                  <divError(f"Expected '(' after 'print', className="flex gap-1">
                     got {tokens.peek()[0]}")<kbd className="px-2 py-
    next(tokens)  # Consume '1 text-xs font-semibold bg-white border rounde('
    
    # Parse the expression insided-md">F1</kbd>
                  </div> print
    expr = parse_expression(tokens)
                </div>
              </div>
            
    
    # Check for the closing parent</div>
            
            <div>hesis
    if tokens.peek()[0
              <h3 className="text-] != 'RPAREN':
        raise SyntaxError(f"Expected ')lg font-medium mb-2">Контакты поддержки</h3>
              ' after expression in print statement, got {tokens.<div className="flex items-center gap-2peek()[0]}")
    next(tokens)  # Consume ')'
     mb-2">
                <Icon name
    return Node("PRINT_STATEMENT", children=[="Mail" size={16} className="text-gray-expr])

def parse_return_statement(tokens):
    token500" />
                <span>support@motor_type, token_value = next(tokens)  # Consume 'RETURN'ent.ru</span>
              </div>
              
    if token_type != '<div className="flex items-center gap-2">
                RETURN':
        raise SyntaxError(f"Expected '<Icon name="Phone" size={16} classNamereturn', got {token_type}")
    ="text-gray-500" />
                
    expr = parse_expression(tokens)
    <span>+7 (499) 123
    return Node("RETURN_STATEMENT",-45-67</span>
               children=[expr])

def parse_block(tokens):
    token</div>
            </div>
          </div>
          _type, token_value = next(tokens
          <DialogFooter>
            <Button variant)  # Consume '{'
    if token="outline" onClick={() => setShowHelpDialog(false)}>_type != 'LBRACE':
        raise SyntaxError(f"
              Закрыть
            </Button>
            <Button 
              className="bg-orange-Expected '{{', got {token_type}")
    500 hover:bg-orange-600"
    block_node = Node("BLOCK")
    
    
              onClick={() => {
                setShowHwhile tokens.peek()[0] != 'elpDialog(false);
                toast({
                  title:RBRACE':
        if tokens.peek()[0] == 'EOI':
            raise "Документация",
                  description: "Документ SyntaxError("Unexpected end of input whileация открыта в новой вкладке", parsing block")
        
        statement = parse
                });
              }}
            >
              Откр_statement(tokens)
        block_node.add_child(statement)
    ыть полную документацию
            </Button>
          </DialogFooter>
        </Dialog
    next(tokens)  # Consume '}'
    
    return block_node

def parse_expression(Content>
      </Dialog>
      
      {/* Глобальный поиск */}
      tokens):
    return parse_additive_expression(tokens)<Dialog open={showGlobalSearch} onOpenChange

def parse_additive_expression(tokens):
    left={setShowGlobalSearch}>
         = parse_multiplicative_expression(tokens)<DialogContent className="sm:max-w-[550
    
    while tokens.peek() and tokens.peek()[0] in ['PLUS', 'MINUS']:
        op_type, op_value = next(tokens)px] p-0 gap-0 
        right = parse_multiplicative_expression(overflow-hidden">
          <form onSubmit={handleSearchtokens)
        
        if op_type == } className="p-4 border-b">
            'PLUS':
            left = Node("ADD<div className="flex items-center gap-2", children=[left, right])
        else:  # MINUS">
              <Icon name="Search" size={
            left = Node("SUBTRACT", children=[left, right])
    
    return left

def parse_multiplicative_expression(16} className="text-gray-400" />
              <Input
                className="border-0 outline-tokens):
    left = parse_primary_expression(tokens)
    
    while tokens.peek() and tokensnone shadow-none focus-visible:ring-0.peek()[0] in ['TIMES', 'DIV']: text-lg"
                placeholder="Найти что
        op_type, op_value = next(tokens) угодно..."
                value={searchQuery}
        right = parse_primary_expression(tokens)
        
        
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />if op_type == 'TIMES':
            left = Node("MULTIPLY", children=[left, right])
            </div>
          </form>
          
          {
        else:  # DIV
            left = Node("searchQuery && (
            <div className="pyDIVIDE", children=[left, right])
    
    return left-2">
              <div className="px

def parse_primary_expression(tokens):
    if tokens.peek()[0] == 'INT':
        token_-4 py-2 text-xs font-semiboltype, token_value = next(tokens)
        return Node("INTEGER", token_value)
    d text-gray-500 uppercase">
                Возelif tokens.peek()[0] == 'можные совпадения
              </div>
              STRING':
        token_type, token_value<div className="py-2">
                 = next(tokens)
        return Node("STRING", token_value)
    elif tokens.peek()[0] == 'INPUT<Button
                  variant="ghost"
                  size':
        token_type, token_value = next(tokens)="sm"
                  className="w-full justify
        
        # Check for the opening parent-start px-4 rounded-none hoverhesis
        if tokens.peek()[0] != 'LPAREN':
            raise SyntaxError:bg-gray-100"
                  onClick(f"Expected '(' after 'input', got {tokens.={() => {
                    navigate(`/adminpeek()[0]}")
        next(tokens)  # Consume/motorcycles`);
                    setShowGlobalSearch(false);
                  }} '('
        
        # Check for the closing parenth
                >
                  <Icon name="esis
        if tokens.peek()[0] != 'RPBike" size={16} className="mrAREN':
            raise SyntaxError(-2 text-gray-500" />
                  f"Expected ')' after 'input(<span className="text-sm">Мотоци', got {tokens.peek()[0]}")
        next(tokens)  # Consume ')'
        клы</span>
                </Button>
                <Button
                  variant="ghost"
                  size
        return Node("INPUT")
    elif tokens.="sm"
                  className="w-full justify-start pxpeek()[0] == 'LPAREN':
        next(tokens)  # Consume '('-4 rounded-none hover:bg-gray-100"
                  onClick={() => {
                    navigate
        expr = parse_expression(tokens)(`/admin/users`);
                    setShowGlobalSearch
        
        if tokens.peek()[0] != '(false);
                  }}
                >
                  <IconRPAREN':
            raise SyntaxError(f"Expected ' name="Users" size={16} className="mr-2 text)', got {tokens.peek()[0]}")
        next(tokens-gray-500" />
                  )  # Consume ')'
        <span className="text-sm">Пользователи</span>
        return expr
    else:
        raise SyntaxError(f"Unexpected token:
                </Button>
                <Button
                  variant="ghost {tokens.peek()[0]}")


## INTERPRETER

class"
                  size="sm"
                  className="w- InterpreterError(Exception):
    pass

deffull justify-start px-4 rounded-none hover:bg- evaluate(node):
    if node.type == "gray-100"
                  onClick={() => {
                    navigate(`/admin/settings`);
                    setShowGlobalSearchPROGRAM":
        # Execute each statement in the program(false);
                  }}
                >
                  <Icon
        result = None
        for child in node.children: name="Settings" size={16} className="mr-2
            result = evaluate(child)
         text-gray-500" />
                  <span className="return result
    
    elif node.type == "STATEMENT":text-sm">Настройки</span
        # Execute the expression in the statement
        >
                </Button>
              </div>
            return evaluate(node.children[0])
    
    elif node.type == "</div>
          )}
          
          <div classNamePRINT_STATEMENT":
        #="p-4 border-t bg-gray-50"> Evaluate the expression and print it
        value = evaluate
            <div className="flex items-center justify(node.children[0])
        print(value)
        return value
    -between text-xs text-gray-500
    elif node.type == "RETURN_STATEMENT":
        # Evaluate the expression">
              <div className="flex gap-2">
                <span>Нажмите <kbd className and return it
        return evaluate(node.children[0])
    
    elif node.type == "BLOCK":
        # Execute="px-1 py-0.5 bg each statement in the block
        result = None
        for child in node.children:-white border rounded-sm">↑</kbd> 
            result = evaluate(child)
        return<kbd className="px-1 py-0 result
    
    elif node.type ==.5 bg-white border rounded-sm "INTEGER":
        # Return the integer value">↓</kbd> для навигации</span>
              
        return int(node.value)
    
    elif node.type == "</div>
              <div className="flex gap-STRING":
        # Return the string value without2">
                <span>Нажм the quotes
        return node.value.ите <kbd className="px-1 pystrip('"')
    
    elif node-0.5 bg-white border rounde.type == "INPUT":
        # Read input from user
        return input()
    d-sm">ESC</kbd> для отмены</span>
    elif node.type == "ADD":
        # Add the values of the
              </div>
            </div>
          </div> two children
        left = evaluate(node.children[
        </DialogContent>
      </Dialog>
    </div0])
        right = evaluate(node.children[1])>
  );
};

// Компонент мобильного сайдбара
const M
        
        # Check if both are numbers orobileSidebar = ({ 
  navigate if either is a string
        if isinstance(left,, 
  isActiveLink, 
  notifications int) and isinstance(right, int):
            return left + right
        elif isinstance(, 
  setShowHelpDialog left, str) or isinstance(right, str):
            return str(left) + str(right)
        else:
            raise
}: { 
  navigate: (path: string) => InterpreterError(f"Invalid operands for addition: void, 
  isActiveLink: (path: {left} and {right}")
     string) => string,
  notifications: number
    elif node.type == "SUBTRACT":,
  setShowHelpDialog: (show: boolean) => void
}) => {
        # Subtract the second child from the first
        left = evaluate(node.children[0])
  return (
    <div className="flex
        right = evaluate(node.children[1])
         flex-col h-full">
      
        if isinstance(left, int) and isinstance(right, int):
            return left - right<div className="p-4 border-b border
        else:
            raise InterpreterError(f"Invalid oper-gray-200 flex items-center justify-betweenands for subtraction: {left} and {right}")
    
    elif node.type">
        <div className="flex items-center == "MULTIPLY":
        # Multiply gap-2">
          <Icon name=" the values of the two children
        left = evaluate(node.childrenBike" size={24} className="text-[0])
        right = evaluate(nodeorange-500" />
          <span className=".children[1])
        
        if isinstance(left, int) and isinstance(rightfont-bold text-lg">МотоРент, int):
            return left * right</span>
        </div>
      </div>
      
        elif isinstance(left, str) and isinstance(right, int
      <ScrollArea className="flex-1">):
            return left * right
        elif isinstance(left, int) and isinstance(right
        <div className="py-6 px-2, str):
            return right * left
        else:
            raise InterpreterError(f space-y-1">
          <Nav"Invalid operands for multiplication: {left}Link
            to="/admin"
            end
            className={` and {right}")
    
    elif node.type == "DIVIDE":
        # Divide the first chilflex items-center gap-3 px-4 py-d by the second
        left = evaluate(node.children[0])
        right = evaluate3 text-gray-700 rounded-(node.children[1])
        md ${isActiveLink("/admin")}`}
          
        if isinstance(left, int) and isinstance(right, int):>
            <Icon name="LayoutD
            if right == 0:
                raise Interprashboard" size={20} />
            eterError("Division by zero")
            return left // right
        <span>Панель управления</span>
          else:
            raise InterpreterError(</NavLink>
          
          <divf"Invalid operands for division: {left} and {right}")
    
    else:
        raise InterpreterError(f className="mt-6 mb-2 px-"Unknown node type: {node.type}")4">
            <h3 className="

def run_program(input_string):
    text-xs uppercase text-gray-500 try:
        tokens = tokenize(inputfont-semibold">Управление</h3>_string)
        ast = parse(tokens
          </div>
          
          <NavLink
            to="/admin/motorcycles)
        return evaluate(ast)
    except ("
            className={`flex items-centerLexicalError, SyntaxError, gap-3 px-4 py-3 text-gray-700 rounded- InterpreterError) as e:
        print(f"Errormd ${isActiveLink("/admin/motorcycles: {e}")
        return None

#")}`}
          >
            <Icon name="Bike" size={20} /> Test examples
examples = [
    'print(5 +
            <span>Мотоци 3)',
    'print("Hello, world!")',клы</span>
          </NavLink
    'print(5 * 3>
          
          <NavLink
            to="/admin/orders"
            className={ - 2)',
    'print(input`flex items-center gap-3 px())',
    'print(5 +-4 py-3 text-gray-700 rounded-md ${isActiveLink input())',
    'print("The("/admin/orders")}`}
          >
            <div className="relative result is: " + (5 * 3)">
              <Icon name="ShoppingCart)',
    'return 42',
    '" size={20} />
              {notifications > 0 && (
                <Badge{ print(5) print(10) return className="absolute -top-2 15 }'
]

for example in examples: -right-2 h-5 w-5 p
    print(f"\nRunning: {example}")
    -0 flex items-center justify-result = run_program(example)
    if result is not None:
        print(center bg-red-500">
                  {notifications}
                </Badge>
              )}f"Result: {result}")

# Interactive interpreter
            </div>
            <span>Заказы</span>
            {notifications > 0 && <Badge
def interactive_interpreter():
    print("Simple Language Interpreter")
    print("Type ' className="ml-auto">{notifications}</Badge>exit' to quit")
    
    }
          </NavLink>
          while True:
        try:
            code
          <NavLink
            to="/admin/ = input(">>> ")
            if code.lower() ==users"
            className={`flex items-center gap-3 px-4 py 'exit':
                break
            
            result = run_-3 text-gray-700 roundeprogram(code)
            if result is notd-md ${isActiveLink("/admin/users None:
                print(f"=>")}`}
          >
            <Icon name="Users" size={20} /> {result}")
        
        except Key
            <span>ПользователиboardInterrupt:
            print("\nKey</span>
          </NavLink>
          board interrupt")
            break
        except
          <div className="mt-6 Exception as e:
            print(f" mb-2 px-4">
            <h3 className="text-xsUnexpected error: {e}")
     uppercase text-gray-500 font-sem
    print("Goodbye!")

#ibold">Система</h3>
          </div>
          
          <Nav Uncomment to run the interactive interpreter
# interactive_Link
            to="/admin/settings"interpreter()
 "use strict";

//
            className={`flex items-center gap-3 px-4 py-3  Copyright (c) 2013 Titanium Itext-gray-700 rounded-md ${isActiveLink("/admin/settings")}`}.T. LLC. All rights reserved. See
          >
            <Icon name="Settings LICENSE.TXT for details.

var" size={20} />
            <span>Настройки</span>
          </NavLink>
          
          <Nav http = require("http");
var fs = require("fs");Link
            to="/admin/logs
var send = require("send");
var util"
            className={`flex items-center gap-3 px-4 py- = require("util");
var child_process = require("3 text-gray-700 rounded-child_process");
var path = require("md ${isActiveLink("/admin/logs")}`}
          >
            <Icon namepath");
var socketIo = require("socket="FileText" size={20.io");

var Server = module} />
            <span>Журнал действий</span>.exports = function Server() {};
          </NavLink>
          
          

Server.prototype.start = function(content<div 
            className={`flex items-center gap-3 px-4 py-3 text-grayDir, notifier, callback) {
  if-700 rounded-md cursor-pointer hover:bg-gray- (!callback) callback = function() {};100`}
            onClick={() => setShowHelpDialog(true)}
  this._httpServer = http.create
          >
            <Icon name="HServer();

  this._httpServer.onelpCircle" size={20} />
            <span>Помощь</span("request", function(request, response) {>
          </div>
          
          <div className="mt-6 
    send(request, request.url).root(contentDir).pipe(response);
  px-4">
            <div className="rounde});

  this._io = socketIo.d-lg bg-gradient-to-r fromlisten(this._httpServer, { log-orange-500 to-orange-600 p-4: false });
  this._io.configure(function() {
    this._io.set("log text-white">
              <div className="flex items- level", 2);
  }.bind(this));

  this._notifier = notifier;
  this._center gap-3 mb-2">
                <div className="bg-white/20 rounded-full p-2ioHandlers = [];

  this._httpServer">
                  <Icon name="P.listen(8080, callback);
};

ServerieChart" size={18} className="text-white".prototype.stop = function(callback) {
  if />
                </div>
                <h (!callback) callback = function() {};
  this._httpServer.3 className="font-medium">Статclose(function() {
    this._notистика</h3>
              </div>
              ifier.removeAllListeners();
    callback<p className="text-sm text-white/90();
  }.bind(this));
}; mb-3">
                Просмот

Server.prototype.watchIo = function(handlerрите аналитику по заказам и кл) {
  this._io.onиентам в реальном времени("connection", function(socket) {
    handler(socket);
    this._ioHan
              </p>
              <Button 
                variant="secondarydlers.push(handler);
    socket.on("disconnect" 
                size="sm" 
                ", function() {
      for (var i = 0; i < this._ioHandlersclassName="w-full bg-white text-orange-600.length; i++) {
        if ( hover:bg-white/90"
                onClick={() => navigatethis._ioHandlers[i] === handler) {
          this._ioHan("/admin/analytics")}
              >
                Открdlers.splice(i, 1);ыть отчеты
              </Button>
            
          break;
        }
      }
    }.bind(this));
  }.bin</div>
          </div>
        </div>
      d(this));
};

Server.prototype.</ScrollArea>
      
      <div classNamestartStaticAnalysis = function start="mt-auto border-t border-gray-200 p-4">
        <div classNameStaticAnalysis(socket, origin, projectRoot, corkboard) {
  socket="flex items-center gap-3 mb-6.on("static analysis: request code">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images", function(data) { handleRequestCode(socket, c.unsplash.com/photo-1633orkboard); });
  socket.on("static analysis:332755192-727a05c4013d?ixlib=rb-4.0.3 start analysis", function(data) { handleStartAnalysis(socket, projectRoot, corkboar&ixid=M3wxMjd); });
};

Server.prototype.watchA3fDB8MHxwaG90by1wStaticAnalysis = function watchStaticAnalysisYWdlfHx8fGVufDB8fH(socket, origin, projectRoot, corkboard)x8fA%3D%3D&auto=format& {
  socket.on("disconnectfit=crop&w=120&q=80"", function() {
    console.log(" />
            <AvatarFallback>АSOCKET DISCONNECTED");
  });

  thisД</AvatarFallback>
          ._notifier.on("fileChange", function()</Avatar>
          <div>
             {
    console.log("Server detected a file change!");<p className="font-medium">Админ Дмитрий</p>
            
    socket.emit("file changed", {});
  });<p className="text-sm text-gray-500

  socket.on("static analysis: request code", function(data) { handleRequestCode(socket,">Администратор</p>
          </div> corkboard); });
  socket.on
        </div>
        
        ("static analysis: start analysis", function(data) { handleStartAnal<div className="grid grid-cols-2 gap-2ysis(socket, projectRoot, corkboar">
          <Button 
            onClick={() => navigate("d); });
  socket.on("static analysis: close/")}
            variant="outline" 
            className", function() {
    corkboar="gap-2"
          >
            <Icon name="ExternalLink" size={d.removeFeedback("static analysis");
  });
};

function handleRequestCode(socket16} />
            На сайт
          , corkboard) {
  cork</Button>
          
          <Button board.getFeedback("static analysis", function(error, feedback) {
    var
            onClick={() => navigate("/")}
            variant="outline" 
            className="gap- filename;
    if (error) filename = "./src/_static_analysis_placeholder2 text-red-500 border-red-200.js";
    else filename = feedback. hover:bg-red-50"
          >filename;

    fs.readFile(filename
            <Icon name="LogOut" size={, "utf8", function(error, data16} />
            Вый) {
      if (error) {ти
          </Button>
        </div
        console.log("Error reading ">
      </div>
    </div>
  ); + filename + ": " + error);
};

export default AdminLayout;
</pp-
        data = "// " + filename + "write>

<pp-write filepath="src/components not found (perhaps no file has been analyzed yet)";
      }

      socket.emit("static/ui/tooltip.tsx">
import * as React from " analysis: code", { code: data });react"
import * as TooltipPrimitive from "@
    });
  });
}

function handleStartAnalysis(socket, projectRoot, cradix-ui/react-tooltip"

import { cn } from "@/lib/utils"orkboard) {
  var startTime = Date.now();
  

const TooltipProvider = TooltipPrimitiveanalyzeSingleFile(socket, projectRoot, function.Provider

const Tooltip = Tooltip(error, feedback) {
    ifPrimitive.Root

const Tooltip (error) {
      console.log("Trigger = TooltipPrimitiveError running analysis: " + error.Trigger

const TooltipContent =);
      return;
    }

    feedback.endTime = Date.now React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWith();
    feedback.elapsedTime = feedback.endTime - startTime;
    consoleoutRef<typeof TooltipPrimitive.Content>
>(({ className, s.log("Static analysis took " + feedback.elideOffset = 4, ...props }, ref) => (apsedTime + "ms");
    socket.emit("static analysis: complete", feedback);
    cork
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      board.provideFeedback("static analysis", feedback);"z-50 overflow-hidden rounded-m
  });
}

function analyzeSingleFile(socket, projectRoot, callback) {d border bg-popover px-3 py-
  var pathToCheck = process.cwd();1.5 text-sm text-popover-
  var complexityExeFromEnv = process.foreground shadow-md animate-in fade-in-0env.LJC_COMPLEXITY_ zoom-in-95 data-[state=EXE;

  if (process.env.Lclosed]:animate-out data-[state=JC_COMPLEXITY_EXE ===closed]:fade-out-0 data- undefined) {
    try {
      fin[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-dLocalSoftwareNode(pathToCheck);top-2 data-[side=left]:slide-
    }
    catch (errin-from-right-2 data-) {
      var complexityExe =[side=right]:slide-in-from "cl.exe"; // default-left-2 data-[side=top]:slide-in-from-bottom- value

      // try to find,2",
      className
    )}
    {...props}
  />
))
To and fail gracefully if not thereoltipContent.displayName = TooltipPrimitive
      try {
        var.Content.displayName

export { Tooltip, Tooltip exePath = path.resolve(__Trigger, TooltipContent, TooltipProvider }dirname, "../../node/bin/
