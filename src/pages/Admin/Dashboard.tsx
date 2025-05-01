
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

// Моковые данные для графиков
const salesData = [
  { name: "Янв", value: 65 },
  { name: "Фев", value: 59 },
  { name: "Мар", value: 80 },
  { name: "Апр", value: 81 },
  { name: "Май", value: 56 },
  { name: "Июн", value: 55 },
  { name: "Июл", value: 40 }
];

const bikeTypesData = [
  { name: "Спортивные", value: 35 },
  { name: "Туристические", value: 25 },
  { name: "Круизеры", value: 20 },
  { name: "Нейкеды", value: 15 },
  { name: "Эндуро", value: 5 }
];

const COLORS = ["#FF7E1D", "#FFA35C", "#FFB47A", "#FFC79A", "#FFD9BB"];

const recentOrders = [
  { id: "ORD-001", customer: "Алексей Смирнов", date: "01.05.2025", status: "completed", amount: 12500 },
  { id: "ORD-002", customer: "Елена Петрова", date: "30.04.2025", status: "processing", amount: 8900 },
  { id: "ORD-003", customer: "Дмитрий Иванов", date: "29.04.2025", status: "completed", amount: 15000 },
  { id: "ORD-004", customer: "Мария Козлова", date: "28.04.2025", status: "cancelled", amount: 7500 },
  { id: "ORD-005", customer: "Антон Сидоров", date: "27.04.2025", status: "completed", amount: 9700 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "bg-green-100 text-green-600";
    case "processing": return "bg-blue-100 text-blue-600";
    case "cancelled": return "bg-red-100 text-red-600";
    default: return "bg-gray-100 text-gray-600";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed": return "Завершен";
    case "processing": return "Обрабатывается";
    case "cancelled": return "Отменен";
    default: return status;
  }
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Панель управления</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Icon name="Download" size={16} className="mr-2" />
            Скачать отчёт
          </Button>
        </div>
      </div>
      
      {/* Метрики */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Выручка за месяц</CardTitle>
            <Icon name="Banknote" className="text-orange-500" size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽245,700</div>
            <p className="text-xs text-gray-500">
              <span className="text-green-500 font-medium">+18.2%</span> по сравнению с прошлым месяцем
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Новые заказы</CardTitle>
            <Icon name="ShoppingCart" className="text-orange-500" size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58</div>
            <p className="text-xs text-gray-500">
              <span className="text-green-500 font-medium">+12.5%</span> по сравнению с прошлым месяцем
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Активная аренда</CardTitle>
            <Icon name="Bike" className="text-orange-500" size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">
              <span className="text-gray-500 font-medium">76%</span> свободных мотоциклов
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Новые клиенты</CardTitle>
            <Icon name="UserPlus" className="text-orange-500" size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-gray-500">
              <span className="text-green-500 font-medium">+8.9%</span> по сравнению с прошлым месяцем
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Графики */}
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Продажи</TabsTrigger>
          <TabsTrigger value="bikes">Мотоциклы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Статистика продаж</CardTitle>
              <CardDescription>
                Данные о продажах за последние 7 месяцев.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#FF7E1D" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bikes" className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Популярные типы мотоциклов</CardTitle>
              <CardDescription>
                Распределение аренды по типам мотоциклов.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bikeTypesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {bikeTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Доход по категориям</CardTitle>
              <CardDescription>
                Распределение дохода по категориям мотоциклов.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bikeTypesData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FF7E1D" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Последние заказы */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Последние заказы</CardTitle>
              <CardDescription>Обзор последних заказов на платформе.</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Смотреть все
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium">ID</th>
                  <th className="py-3 px-4 text-left font-medium">Клиент</th>
                  <th className="py-3 px-4 text-left font-medium">Дата</th>
                  <th className="py-3 px-4 text-left font-medium">Сумма</th>
                  <th className="py-3 px-4 text-left font-medium">Статус</th>
                  <th className="py-3 px-4 text-left font-medium">Действия</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{order.id}</td>
                    <td className="py-4 px-4">{order.customer}</td>
                    <td className="py-4 px-4">{order.date}</td>
                    <td className="py-4 px-4">{order.amount.toLocaleString()} ₽</td>
                    <td className="py-4 px-4">
                      <span className={`rounded-full px-2 py-1 text-xs ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
