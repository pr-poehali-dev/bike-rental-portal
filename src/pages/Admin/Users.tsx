
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

// Интерфейс пользователя
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: "admin" | "client";
  status: "active" | "inactive" | "blocked";
  registeredAt: string;
  lastLogin?: string;
  ordersCount: number;
  totalSpent: number;
  verified: boolean;
}

// Моковые данные
const mockUsers: User[] = [
  {
    id: 1,
    name: "Алексей Смирнов",
    email: "alexey@example.com",
    phone: "+7 (999) 123-45-67",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    role: "client",
    status: "active",
    registeredAt: "15.01.2025",
    lastLogin: "02.05.2025",
    ordersCount: 5,
    totalSpent: 45000,
    verified: true
  },
  {
    id: 2,
    name: "Елена Петрова",
    email: "elena@example.com",
    phone: "+7 (999) 234-56-78",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    role: "client",
    status: "active",
    registeredAt: "20.02.2025",
    lastLogin: "01.05.2025",
    ordersCount: 3,
    totalSpent: 28000,
    verified: true
  },
  {
    id: 3,
    name: "Дмитрий Иванов",
    email: "dmitry@example.com",
    phone: "+7 (999) 345-67-89",
    role: "client",
    status: "inactive",
    registeredAt: "10.03.2025",
    lastLogin: "15.04.2025",
    ordersCount: 1,
    totalSpent: 9500,
    verified: false
  },
  {
    id: 4,
    name: "Мария Козлова",
    email: "maria@example.com",
    phone: "+7 (999) 456-78-90",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    role: "client",
    status: "blocked",
    registeredAt: "05.04.2025",
    ordersCount: 0,
    totalSpent: 0,
    verified: true
  },
  {
    id: 5,
    name: "Антон Сидоров",
    email: "anton@example.com",
    phone: "+7 (999) 567-89-01",
    avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    role: "admin",
    status: "active",
    registeredAt: "01.01.2025",
    lastLogin: "03.05.2025",
    ordersCount: 0,
    totalSpent: 0,
    verified: true
  }
];

// Вспомогательные функции
const getRoleBadge = (role: User["role"]) => {
  switch (role) {
    case "admin":
      return <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100">Администратор</Badge>;
    case "client":
      return <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">Клиент</Badge>;
  }
};

const getStatusBadge = (status: User["status"]) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Активен</Badge>;
    case "inactive":
      return <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">Неактивен</Badge>;
    case "blocked":
      return <Badge className="bg-red-100 text-red-600 hover:bg-red-100">Заблокирован</Badge>;
  }
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
};

const Users = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Функции фильтрации
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );
  
  // Обработчик изменения статуса пользователя
  const handleStatusChange = (userId: number, newStatus: User["status"]) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser({ ...selectedUser, status: newStatus });
    }
  };
  
  // Обработчик обновления данных пользователя
  const handleUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!selectedUser) return;
    
    const formData = new FormData(e.currentTarget);
    const updatedUser: User = {
      ...selectedUser,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role: formData.get('role') as User["role"],
      status: formData.get('status') as User["status"],
      verified: formData.get('verified') === 'on'
    };
    
    setUsers(users.map(user => 
      user.id === selectedUser.id ? updatedUser : user
    ));
    
    setSelectedUser(updatedUser);
    setIsEditDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Управление пользователями</h1>
        <div className="relative">
          <Input
            placeholder="Поиск пользователей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-[300px]"
          />
          <Icon 
            name="Search" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={16} 
          />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Список пользователей</CardTitle>
          <CardDescription>Управляйте пользователями и их правами доступа</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="active">Активные</TabsTrigger>
              <TabsTrigger value="inactive">Неактивные</TabsTrigger>
              <TabsTrigger value="blocked">Заблокированные</TabsTrigger>
              <TabsTrigger value="admin">Администраторы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <UsersTable 
                users={filteredUsers} 
                onViewUser={(user) => {
                  setSelectedUser(user);
                  setIsViewDialogOpen(true);
                }}
                onEditUser={(user) => {
                  setSelectedUser(user);
                  setIsEditDialogOpen(true);
                }}
                onStatusChange={handleStatusChange}
              />
            </TabsContent>
            
            <TabsContent value="active">
              <UsersTable 
                users={filteredUsers.filter(user => user.status === 'active')} 
                onViewUser={(user) => {
                  setSelectedUser(user);
                  setIsViewDialogOpen(true);
                }}
                onEditUser={(user) => {
                  setSelectedUser(user);
                  setIsEditDialogOpen(true);
                }}
                onStatusChange={handleStatusChange}
              />
            </TabsContent>
            
            <TabsContent value="inactive">
              <UsersTable 
                users={filteredUsers.filter(user => user.status === 'inactive')} 
                onViewUser={(user) => {
                  setSelectedUser(user);
                  setIsViewDialogOpen(true);
                }}
                onEditUser={(user) => {
                  setSelectedUser(user);
                  setIsEditDialogOpen(true);
                }}
                onStatusChange={handleStatusChange}
              />
            </TabsContent>
            
            <TabsContent value="blocked">
              <UsersTable 
                users={filteredUsers.filter(user => user.status === 'blocked')} 
                onViewUser={(user) => {
                  setSelectedUser(user);
                  setIsViewDialogOpen(true);
                }}
                onEditUser={(user) => {
                  setSelectedUser(user);
                  setIsEditDialogOpen(true);
                }}
                onStatusChange={handleStatusChange}
              />
            </TabsContent>
            
            <TabsContent value="admin">
              <UsersTable 
                users={filteredUsers.filter(user => user.role === 'admin')} 
                onViewUser={(user) => {
                  setSelectedUser(user);
                  setIsViewDialogOpen(true);
                }}
                onEditUser={(user) => {
                  setSelectedUser(user);
                  setIsEditDialogOpen(true);
                }}
                onStatusChange={handleStatusChange}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Диалог просмотра пользователя */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Информация о пользователе</DialogTitle>
            <DialogDescription>
              Подробная информация о пользователе и его активности
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedUser.avatar} />
                  <AvatarFallback>{getInitials(selectedUser.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">{selectedUser.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {getRoleBadge(selectedUser.role)}
                    {getStatusBadge(selectedUser.status)}
                    {selectedUser.verified && (
                      <Badge variant="outline" className="border-blue-500 text-blue-500">
                        <Icon name="CheckCircle" size={12} className="mr-1" />
                        Верифицирован
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Контактная информация</h4>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" size={14} className="text-gray-500" />
                      <span>{selectedUser.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={14} className="text-gray-500" />
                      <span>{selectedUser.phone}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Информация об аккаунте</h4>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} className="text-gray-500" />
                      <span>Регистрация: {selectedUser.registeredAt}</span>
                    </div>
                    {selectedUser.lastLogin && (
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={14} className="text-gray-500" />
                        <span>Последний вход: {selectedUser.lastLogin}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">{selectedUser.ordersCount}</div>
                      <div className="text-sm text-gray-500">Заказов</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">{selectedUser.totalSpent.toLocaleString()} ₽</div>
                      <div className="text-sm text-gray-500">Сумма заказов</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsViewDialogOpen(false);
                setIsEditDialogOpen(true);
              }}
            >
              Редактировать
            </Button>
            
            {selectedUser && selectedUser.status === 'active' ? (
              <Button 
                variant="destructive"
                onClick={() => handleStatusChange(selectedUser.id, 'blocked')}
              >
                Заблокировать
              </Button>
            ) : selectedUser && selectedUser.status === 'blocked' ? (
              <Button 
                className="bg-green-500 hover:bg-green-600"
                onClick={() => handleStatusChange(selectedUser.id, 'active')}
              >
                Разблокировать
              </Button>
            ) : null}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Диалог редактирования пользователя */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Редактировать пользователя</DialogTitle>
            <DialogDescription>
              Измените данные пользователя и его права доступа
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <form onSubmit={handleUpdateUser}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" name="name" defaultValue={selectedUser.name} required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" defaultValue={selectedUser.email} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" name="phone" defaultValue={selectedUser.phone} required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Роль</Label>
                    <select 
                      id="role" 
                      name="role" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                      defaultValue={selectedUser.role}
                    >
                      <option value="client">Клиент</option>
                      <option value="admin">Администратор</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Статус</Label>
                    <select 
                      id="status" 
                      name="status" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue={selectedUser.status}
                    >
                      <option value="active">Активен</option>
                      <option value="inactive">Неактивен</option>
                      <option value="blocked">Заблокирован</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="verified" name="verified" defaultChecked={selectedUser.verified} />
                  <Label htmlFor="verified">Верифицированный пользователь</Label>
                </div>
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Отмена
                </Button>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  Сохранить изменения
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Компонент таблицы пользователей
interface UsersTableProps {
  users: User[];
  onViewUser: (user: User) => void;
  onEditUser: (user: User) => void;
  onStatusChange: (userId: number, status: User["status"]) => void;
}

const UsersTable = ({ users, onViewUser, onEditUser, onStatusChange }: UsersTableProps) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <Icon name="Users" size={48} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-700">Нет пользователей</h3>
        <p className="text-gray-500">В этой категории пока нет пользователей</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-xs">
            <th className="py-3 px-4 text-left font-medium">ID</th>
            <th className="py-3 px-4 text-left font-medium">Пользователь</th>
            <th className="py-3 px-4 text-left font-medium">Email</th>
            <th className="py-3 px-4 text-left font-medium">Телефон</th>
            <th className="py-3 px-4 text-left font-medium">Роль</th>
            <th className="py-3 px-4 text-left font-medium">Статус</th>
            <th className="py-3 px-4 text-left font-medium">Зарегистрирован</th>
            <th className="py-3 px-4 text-left font-medium">Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-4">{user.id}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    {user.verified && (
                      <div className="flex items-center text-xs text-blue-500">
                        <Icon name="CheckCircle" size={10} className="mr-1" />
                        Верифицирован
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">{user.email}</td>
              <td className="py-4 px-4">{user.phone}</td>
              <td className="py-4 px-4">{getRoleBadge(user.role)}</td>
              <td className="py-4 px-4">{getStatusBadge(user.status)}</td>
              <td className="py-4 px-4">{user.registeredAt}</td>
              <td className="py-4 px-4">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => onViewUser(user)}
                  >
                    <Icon name="Eye" size={14} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => onEditUser(user)}
                  >
                    <Icon name="Edit" size={14} />
                  </Button>
                  {user.status === 'active' ? (
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                      onClick={() => onStatusChange(user.id, 'blocked')}
                    >
                      <Icon name="Lock" size={14} />
                    </Button>
                  ) : user.status === 'blocked' ? (
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 text-green-500 hover:text-green-600"
                      onClick={() => onStatusChange(user.id, 'active')}
                    >
                      <Icon name="Unlock" size={14} />
                    </Button>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
