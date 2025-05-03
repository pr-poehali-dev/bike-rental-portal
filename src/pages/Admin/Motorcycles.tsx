
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Motorcycle } from "@/types/Motorcycle";

// Моковые данные для примера
const mockMotorcycles: Motorcycle[] = [
  {
    id: 1,
    name: "Yamaha MT-09",
    category: "Нейкед",
    type: "Спортивный",
    price: 3500,
    power: 115,
    volume: 890,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Динамичный стритфайтер с агрессивным дизайном и отличной управляемостью.",
    features: ["ABS", "Traction Control", "Quick Shifter"],
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "BMW R 1250 GS",
    category: "Турист",
    type: "Туристический",
    price: 5000,
    power: 136,
    volume: 1254,
    image: "https://images.unsplash.com/photo-1616711906333-23e9280bc595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Легендарный туристический эндуро для дальних путешествий.",
    features: ["ABS", "Dynamic ESA", "Riding Modes"],
    inStock: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "Harley-Davidson Iron 883",
    category: "Круизер",
    type: "Круизер",
    price: 4200,
    power: 53,
    volume: 883,
    image: "https://images.unsplash.com/photo-1576015497888-52b26493f8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1535&q=80",
    description: "Классический американский круизер с узнаваемым дизайном и характерным звуком.",
    features: ["Belt Drive", "Air Cooled"],
    inStock: true,
    rating: 4.6
  },
  {
    id: 4,
    name: "Honda CBR 650R",
    category: "Спортбайк",
    type: "Спортивный",
    price: 4800,
    power: 95,
    volume: 649,
    image: "https://images.unsplash.com/photo-1635073937063-e9b1b471ee14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    description: "Спортивный мотоцикл для дорог общего пользования и трековых дней.",
    features: ["ABS", "Assist & Slipper Clutch", "LED Lights"],
    inStock: false,
    rating: 4.7
  },
  {
    id: 5,
    name: "Ducati Multistrada V4",
    category: "Турист",
    type: "Туристический",
    price: 6500,
    power: 170,
    volume: 1158,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Многоцелевой мотоцикл премиум-класса с продвинутыми технологиями.",
    features: ["Radar Technology", "Adaptive Cruise Control", "Cornering ABS"],
    inStock: true,
    rating: 4.9
  }
];

const Motorcycles = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>(mockMotorcycles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<Motorcycle | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  const filteredMotorcycles = motorcycles.filter(motorcycle => 
    motorcycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    motorcycle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    motorcycle.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddMotorcycle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newMotorcycle: Motorcycle = {
      id: motorcycles.length + 1,
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      type: formData.get('type') as string,
      price: Number(formData.get('price')),
      power: Number(formData.get('power')),
      volume: Number(formData.get('volume')),
      image: formData.get('image') as string || "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: formData.get('description') as string,
      features: (formData.get('features') as string).split(',').map(feature => feature.trim()),
      inStock: true,
      rating: 0
    };
    
    setMotorcycles([...motorcycles, newMotorcycle]);
    setIsAddDialogOpen(false);
  };

  const handleDeleteMotorcycle = () => {
    if (selectedMotorcycle) {
      setMotorcycles(motorcycles.filter(m => m.id !== selectedMotorcycle.id));
      setSelectedMotorcycle(null);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Управление мотоциклами</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить мотоцикл
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Добавить новый мотоцикл</DialogTitle>
              <DialogDescription>
                Заполните форму для добавления нового мотоцикла в каталог
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddMotorcycle}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Название</Label>
                    <Input id="name" name="name" placeholder="Например: Yamaha MT-09" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Цена (₽/день)</Label>
                    <Input id="price" name="price" type="number" placeholder="3500" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Категория</Label>
                    <Select name="category" defaultValue="Нейкед">
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Нейкед">Нейкед</SelectItem>
                        <SelectItem value="Спортбайк">Спортбайк</SelectItem>
                        <SelectItem value="Турист">Турист</SelectItem>
                        <SelectItem value="Круизер">Круизер</SelectItem>
                        <SelectItem value="Эндуро">Эндуро</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Тип</Label>
                    <Select name="type" defaultValue="Спортивный">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Спортивный">Спортивный</SelectItem>
                        <SelectItem value="Туристический">Туристический</SelectItem>
                        <SelectItem value="Круизер">Круизер</SelectItem>
                        <SelectItem value="Городской">Городской</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="volume">Объем двигателя (см³)</Label>
                    <Input id="volume" name="volume" type="number" placeholder="889" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="power">Мощность (л.с.)</Label>
                    <Input id="power" name="power" type="number" placeholder="115" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">URL изображения</Label>
                    <Input id="image" name="image" placeholder="https://example.com/image.jpg" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    placeholder="Подробное описание мотоцикла..." 
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="features">Особенности (через запятую)</Label>
                  <Input 
                    id="features" 
                    name="features" 
                    placeholder="ABS, Traction Control, Quick Shifter" 
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Отмена
                </Button>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  Добавить
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Список мотоциклов</CardTitle>
              <CardDescription>Управляйте мотоциклами в каталоге</CardDescription>
            </div>
            <div className="relative">
              <Input
                placeholder="Поиск мотоциклов..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full md:w-[300px]"
              />
              <Icon 
                name="Search" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={16} 
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="available">В наличии</TabsTrigger>
              <TabsTrigger value="unavailable">Недоступные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-xs">
                      <th className="py-3 px-4 text-left font-medium">ID</th>
                      <th className="py-3 px-4 text-left font-medium">Изображение</th>
                      <th className="py-3 px-4 text-left font-medium">Название</th>
                      <th className="py-3 px-4 text-left font-medium">Категория</th>
                      <th className="py-3 px-4 text-left font-medium">Цена (₽/день)</th>
                      <th className="py-3 px-4 text-left font-medium">Статус</th>
                      <th className="py-3 px-4 text-left font-medium">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMotorcycles.map((motorcycle) => (
                      <tr key={motorcycle.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4">{motorcycle.id}</td>
                        <td className="py-4 px-4">
                          <div className="w-12 h-12 rounded-md overflow-hidden">
                            <img 
                              src={motorcycle.image} 
                              alt={motorcycle.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium">{motorcycle.name}</td>
                        <td className="py-4 px-4">{motorcycle.category}</td>
                        <td className="py-4 px-4">{motorcycle.price.toLocaleString()} ₽</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${motorcycle.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span>{motorcycle.inStock ? 'Доступен' : 'Недоступен'}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Icon name="Eye" size={14} />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 text-red-500 hover:text-red-600"
                              onClick={() => {
                                setSelectedMotorcycle(motorcycle);
                                setIsDeleteDialogOpen(true);
                              }}
                            >
                              <Icon name="Trash" size={14} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="available">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-xs">
                      <th className="py-3 px-4 text-left font-medium">ID</th>
                      <th className="py-3 px-4 text-left font-medium">Изображение</th>
                      <th className="py-3 px-4 text-left font-medium">Название</th>
                      <th className="py-3 px-4 text-left font-medium">Категория</th>
                      <th className="py-3 px-4 text-left font-medium">Цена (₽/день)</th>
                      <th className="py-3 px-4 text-left font-medium">Статус</th>
                      <th className="py-3 px-4 text-left font-medium">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMotorcycles
                      .filter(motorcycle => motorcycle.inStock)
                      .map((motorcycle) => (
                        <tr key={motorcycle.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4">{motorcycle.id}</td>
                          <td className="py-4 px-4">
                            <div className="w-12 h-12 rounded-md overflow-hidden">
                              <img 
                                src={motorcycle.image} 
                                alt={motorcycle.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium">{motorcycle.name}</td>
                          <td className="py-4 px-4">{motorcycle.category}</td>
                          <td className="py-4 px-4">{motorcycle.price.toLocaleString()} ₽</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span>Доступен</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Icon name="Eye" size={14} />
                              </Button>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 text-red-500 hover:text-red-600"
                                onClick={() => {
                                  setSelectedMotorcycle(motorcycle);
                                  setIsDeleteDialogOpen(true);
                                }}
                              >
                                <Icon name="Trash" size={14} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="unavailable">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-xs">
                      <th className="py-3 px-4 text-left font-medium">ID</th>
                      <th className="py-3 px-4 text-left font-medium">Изображение</th>
                      <th className="py-3 px-4 text-left font-medium">Название</th>
                      <th className="py-3 px-4 text-left font-medium">Категория</th>
                      <th className="py-3 px-4 text-left font-medium">Цена (₽/день)</th>
                      <th className="py-3 px-4 text-left font-medium">Статус</th>
                      <th className="py-3 px-4 text-left font-medium">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMotorcycles
                      .filter(motorcycle => !motorcycle.inStock)
                      .map((motorcycle) => (
                        <tr key={motorcycle.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4">{motorcycle.id}</td>
                          <td className="py-4 px-4">
                            <div className="w-12 h-12 rounded-md overflow-hidden">
                              <img 
                                src={motorcycle.image} 
                                alt={motorcycle.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium">{motorcycle.name}</td>
                          <td className="py-4 px-4">{motorcycle.category}</td>
                          <td className="py-4 px-4">{motorcycle.price.toLocaleString()} ₽</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span>Недоступен</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Icon name="Eye" size={14} />
                              </Button>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 text-red-500 hover:text-red-600"
                                onClick={() => {
                                  setSelectedMotorcycle(motorcycle);
                                  setIsDeleteDialogOpen(true);
                                }}
                              >
                                <Icon name="Trash" size={14} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Диалог подтверждения удаления */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Подтверждение удаления</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить мотоцикл "{selectedMotorcycle?.name}"?
              Это действие нельзя отменить.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Отмена
            </Button>
            <Button variant="destructive" onClick={handleDeleteMotorcycle}>
              Удалить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Motorcycles;
