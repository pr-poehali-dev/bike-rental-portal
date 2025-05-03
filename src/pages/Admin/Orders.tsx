
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/Icon";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Интерфейс для заказа
interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  motorcycle: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  dates: {
    start: string;
    end: string;
  };
  totalPrice: number;
  status: "pending" | "confirmed" | "active" | "completed" | "cancelled";
  paymentStatus: "unpaid" | "paid";
  createdAt: string;
}

// Моковые данные
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: {
      name: "Алексей Смирнов",
      email: "alexey@example.com",
      phone: "+7 (999) 123-45-67"
    },
    motorcycle: {
      id: 1,
      name: "Yamaha MT-09",
      price: 3500,
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    dates: {
      start: "01.05.2025",
      end: "05.05.2025"
    },
    totalPrice: 17500,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "30.04.2025"
  },
  {
    id: "ORD-002",
    customer: {
      name: "Елена Петрова",
      email: "elena@example.com",
      phone: "+7 (999) 234-56-78"
    },
    motorcycle: {
      id: 2,
      name: "BMW R 1250 GS",
      price: 5000,
      image: "https://images.unsplash.com/photo-1616711906333-23e9280bc595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    dates: {
      start: "10.05.2025",
      end: "12.05.2025"
    },
    totalPrice: 15000,
    status: "pending",
    paymentStatus: "unpaid",
    createdAt: "30.04.2025"
  },
  {
    id: "ORD-003",
    customer: {
      name: "Дмитрий Иванов",
      email: "dmitry@example.com",
      phone: "+7 (999) 345-67-89"
    },
    motorcycle: {
      id: 3,
      name: "Harley-Davidson Iron 883",
      price: 4200,
      image: "https://images.unsplash.com/photo-1576015497888-52b26493f8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1535&q=80"
    },
    dates: {
      start: "15.04.2025",
      end: "20.04.2025"
    },
    totalPrice: 21000,
    status: "completed",
    paymentStatus: "paid",
    createdAt: "10.04.2025"
  },
  {
    id: "ORD-004",
    customer: {
      name: "Мария Козлова",
      email: "maria@example.com",
      phone: "+7 (999) 456-78-90"
    },
    motorcycle: {
      id: 4,
      name: "Honda CBR 650R",
      price: 4800,
      image: "https://images.unsplash.com/photo-1635073937063-e9b1b471ee14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    dates: {
      start: "03.05.2025",
      end: "07.05.2025"
    },
    totalPrice: 24000,
    status: "active",
    paymentStatus: "paid",
    createdAt: "01.05.2025"
  },
  {
    id: "ORD-005",
    customer: {
      name: "Антон Сидоров",
      email: "anton@example.com",
      phone: "+7 (999) 567-89-01"
    },
    motorcycle: {
      id: 5,
      name: "Ducati Multistrada V4",
      price: 6500,
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    dates: {
      start: "20.04.2025",
      end: "22.04.2025"
    },
    totalPrice: 19500,
    status: "cancelled",
    paymentStatus: "unpaid",
    createdAt: "15.04.2025"
  }
];

// Вспомогательные функции для отображения
const getStatusBadge = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Ожидает подтверждения</Badge>;
    case "confirmed":
      return <Badge variant="outline" className="border-blue-500 text-blue-500">Подтвержден</Badge>;
    case "active":
      return <Badge variant="outline" className="border-green-500 text-green-500">Активен</Badge>;
    case "completed":
      return <Badge variant="outline" className="border-purple-500 text-purple-500">Завершен</Badge>;
    case "cancelled":
      return <Badge variant="outline" className="border-red-500 text-red-500">Отменен</Badge>;
  }
};

const getPaymentStatusBadge = (status: Order["paymentStatus"]) => {
  switch (status) {
    case "paid":
      return <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Оплачен</Badge>;
    case "unpaid":
      return <Badge className="bg-red-100 text-red-600 hover:bg-red-100">Не оплачен</Badge>;
  }
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.motorcycle.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusChange = (newStatus: Order["status"]) => {
    if (selectedOrder) {
      const updatedOrders = orders.map(order => 
        order.id === selectedOrder.id 
          ? { ...order, status: newStatus } 
          : order
      );
      setOrders(updatedOrders);
      setSelectedOrder({...selectedOrder, status: newStatus});
      setIsStatusDialogOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Управление заказами</h1>
        <div className="relative">
          <Input
            placeholder="Поиск заказов..."
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
          <CardTitle>Список заказов</CardTitle>
          <CardDescription>Управляйте заказами и меняйте их статус</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Все заказы</TabsTrigger>
              <TabsTrigger value="pending">Ожидающие</TabsTrigger>
              <TabsTrigger value="confirmed">Подтвержденные</TabsTrigger>
              <TabsTrigger value="active">Активные</TabsTrigger>
              <TabsTrigger value="completed">Завершенные</TabsTrigger>
              <TabsTrigger value="cancelled">Отмененные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <OrdersTable 
                orders={filteredOrders} 
                onViewOrder={(order) => {
                  setSelectedOrder(order);
                  setIsViewDialogOpen(true);
                }}
                onChangeStatus={(order) => {
                  setSelectedOrder(order);
                  setIsStatusDialogOpen(true);
                }}
              />
            </TabsContent>
            
            <TabsContent value="pending">
              <OrdersTable 
                orders={filteredOrders.filter(order => order.status === 'pending')} 
                onViewOrder={(order) => {
                  setSelectedOrder(order);
                  setIsViewDialogOpen(true);
                }}
                onChangeStatus={(order) => {
                  setSelectedOrder(order);
                  setIsStatusDialogOpen(true);
                }}
              />
            </TabsContent>
            
            <TabsContent value="confirmed">
              <OrdersTable 
                orders={filteredOrders.filter(order => order.status === 'confirmed')} 
                onViewOrder={(order) => {
                  setSelectedOrder(order);
                  setIsViewDialogOpen(true);
                }}
                onChangeStatus={(order) => {
                  setSelectedOrder(order);
                  setIsStatusDialogOpen(true);
                }}
              />
            </TabsContent>
            
            <TabsContent value="active">
              <OrdersTable 
                orders={filteredOrders.filter(order => order.status === 'active')} 
                onViewOrder={(order) => {
                  setSelectedOrder(order);
                  setIsViewDialogOpen(true);
                }}
                onChangeStatus={(order) => {
                  setSelectedOrder(order);
                  setIsStatusDialogOpen(true);
                }}
              />
            </TabsContent>
            
            <TabsContent value="completed">
              <OrdersTable 
                orders={filteredOrders.filter(order => order.status === 'completed')} 
                onViewOrder={(order) => {
                  setSelectedOrder(order);
                  setIsViewDialogOpen(true);
                }}
                onChangeStatus={(order) => {
                  setSelectedOrder(order);
                  setIsStatusDialogOpen(true);
                }}
              />
            </TabsContent>
            
            <TabsContent value="cancelled">
              <OrdersTable 
                orders={filteredOrders.filter(order => order.status === 'cancelled')} 
                onViewOrder={(order) => {
                  setSelectedOrder(order);
                  setIsViewDialogOpen(true);
                }}
                onChangeStatus={(order) => {
                  setSelectedOrder(order);
                  setIsStatusDialogOpen(true);
                }}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Диалог просмотра заказа */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Детали заказа</DialogTitle>
            <DialogDescription>
              Подробная информация о заказе #{selectedOrder?.id}
            </DialogDescription>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1/3">
                  <img 
                    src={selectedOrder.motorcycle.image} 
                    alt={selectedOrder.motorcycle.name} 
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-lg font-bold">{selectedOrder.motorcycle.name}</h3>
                  <p className="text-sm text-gray-500">
                    Стоимость аренды: {selectedOrder.motorcycle.price} ₽/день
                  </p>
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Статус заказа:</span>
                      {getStatusBadge(selectedOrder.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Статус оплаты:</span>
                      {getPaymentStatusBadge(selectedOrder.paymentStatus)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Информация о клиенте</h4>
                  <div className="text-sm space-y-1">
                    <p><span className="font-medium">Имя:</span> {selectedOrder.customer.name}</p>
                    <p><span className="font-medium">Email:</span> {selectedOrder.customer.email}</p>
                    <p><span className="font-medium">Телефон:</span> {selectedOrder.customer.phone}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Информация о заказе</h4>
                  <div className="text-sm space-y-1">
                    <p><span className="font-medium">Дата создания:</span> {selectedOrder.createdAt}</p>
                    <p><span className="font-medium">Период аренды:</span> {selectedOrder.dates.start} - {selectedOrder.dates.end}</p>
                    <p><span className="font-medium">Итоговая стоимость:</span> {selectedOrder.totalPrice.toLocaleString()} ₽</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsViewDialogOpen(false);
                setIsStatusDialogOpen(true);
              }}
            >
              Изменить статус
            </Button>
            <Button onClick={() => setIsViewDialogOpen(false)}>
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Диалог изменения статуса */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Изменить статус заказа</DialogTitle>
            <DialogDescription>
              Выберите новый статус для заказа #{selectedOrder?.id}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <Select 
              defaultValue={selectedOrder?.status}
              onValueChange={(value) => handleStatusChange(value as Order["status"])}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Ожидает подтверждения</SelectItem>
                <SelectItem value="confirmed">Подтвержден</SelectItem>
                <SelectItem value="active">Активен</SelectItem>
                <SelectItem value="completed">Завершен</SelectItem>
                <SelectItem value="cancelled">Отменен</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStatusDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => {
                // handleStatusChange произойдет при выборе значения в Select
                setIsStatusDialogOpen(false);
              }}
            >
              Сохранить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Компонент таблицы заказов
interface OrdersTableProps {
  orders: Order[];
  onViewOrder: (order: Order) => void;
  onChangeStatus: (order: Order) => void;
}

const OrdersTable = ({ orders, onViewOrder, onChangeStatus }: OrdersTableProps) => {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <Icon name="ClipboardList" size={48} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-700">Нет заказов</h3>
        <p className="text-gray-500">В этой категории пока нет заказов</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-xs">
            <th className="py-3 px-4 text-left font-medium">ID</th>
            <th className="py-3 px-4 text-left font-medium">Клиент</th>
            <th className="py-3 px-4 text-left font-medium">Мотоцикл</th>
            <th className="py-3 px-4 text-left font-medium">Даты</th>
            <th className="py-3 px-4 text-left font-medium">Сумма</th>
            <th className="py-3 px-4 text-left font-medium">Статус</th>
            <th className="py-3 px-4 text-left font-medium">Оплата</th>
            <th className="py-3 px-4 text-left font-medium">Действия</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-4 font-medium">{order.id}</td>
              <td className="py-4 px-4">{order.customer.name}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-md overflow-hidden">
                    <img 
                      src={order.motorcycle.image} 
                      alt={order.motorcycle.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{order.motorcycle.name}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">От: {order.dates.start}</span>
                  <span className="text-xs text-gray-500">До: {order.dates.end}</span>
                </div>
              </td>
              <td className="py-4 px-4">{order.totalPrice.toLocaleString()} ₽</td>
              <td className="py-4 px-4">
                {getStatusBadge(order.status)}
              </td>
              <td className="py-4 px-4">
                {getPaymentStatusBadge(order.paymentStatus)}
              </td>
              <td className="py-4 px-4">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => onViewOrder(order)}
                  >
                    <Icon name="Eye" size={14} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => onChangeStatus(order)}
                  >
                    <Icon name="Edit2" size={14} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
