
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useTo } from "@/components/ui/toast";

interface SiteSettings {
  general: {
    siteName: string;
    siteDescription: string;
    logo: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
  };
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    vk: string;
  };
  features: {
    enableReviews: boolean;
    enableBookingCalendar: boolean;
    enableSmsNotifications: boolean;
    enableEmailNotifications: boolean;
    maintenanceMode: boolean;
  };
}

// Моковые данные для настроек
const defaultSettings: SiteSettings = {
  general: {
    siteName: "МотоРент",
    siteDescription: "Прокат премиальных мотоциклов для незабываемых приключений",
    logo: "/public/logo-b.svg",
    contactEmail: "info@motorent.ru",
    contactPhone: "+7 (999) 123-45-67",
    address: "г. Москва, ул. Мотоциклетная, 123"
  },
  businessHours: {
    monday: "9:00 - 20:00",
    tuesday: "9:00 - 20:00",
    wednesday: "9:00 - 20:00",
    thursday: "9:00 - 20:00",
    friday: "9:00 - 20:00",
    saturday: "10:00 - 18:00",
    sunday: "10:00 - 16:00"
  },
  social: {
    facebook: "https://facebook.com/motorent",
    instagram: "https://instagram.com/motorent",
    youtube: "https://youtube.com/motorent",
    vk: "https://vk.com/motorent"
  },
  features: {
    enableReviews: true,
    enableBookingCalendar: true,
    enableSmsNotifications: false,
    enableEmailNotifications: true,
    maintenanceMode: false
  }
};

const Settings = () => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  
  // Обработчики изменения настроек
  const handleGeneralSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setSettings({
      ...settings,
      general: {
        siteName: formData.get('siteName') as string,
        siteDescription: formData.get('siteDescription') as string,
        logo: formData.get('logo') as string,
        contactEmail: formData.get('contactEmail') as string,
        contactPhone: formData.get('contactPhone') as string,
        address: formData.get('address') as string
      }
    });
    
    alert('Общие настройки сохранены');
  };
  
  const handleBusinessHoursSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setSettings({
      ...settings,
      businessHours: {
        monday: formData.get('monday') as string,
        tuesday: formData.get('tuesday') as string,
        wednesday: formData.get('wednesday') as string,
        thursday: formData.get('thursday') as string,
        friday: formData.get('friday') as string,
        saturday: formData.get('saturday') as string,
        sunday: formData.get('sunday') as string
      }
    });
    
    alert('Часы работы сохранены');
  };
  
  const handleSocialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setSettings({
      ...settings,
      social: {
        facebook: formData.get('facebook') as string,
        instagram: formData.get('instagram') as string,
        youtube: formData.get('youtube') as string,
        vk: formData.get('vk') as string
      }
    });
    
    alert('Социальные сети сохранены');
  };
  
  const handleFeatureToggle = (feature: keyof SiteSettings['features'], value: boolean) => {
    setSettings({
      ...settings,
      features: {
        ...settings.features,
        [feature]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Настройки сайта</h1>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="hours">Часы работы</TabsTrigger>
          <TabsTrigger value="social">Социальные сети</TabsTrigger>
          <TabsTrigger value="features">Функции</TabsTrigger>
        </TabsList>
        
        {/* Общие настройки */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Общие настройки</CardTitle>
              <CardDescription>
                Основная информация о вашем сайте и контактные данные
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGeneralSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Название сайта</Label>
                    <Input 
                      id="siteName" 
                      name="siteName" 
                      defaultValue={settings.general.siteName} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logo">URL логотипа</Label>
                    <Input 
                      id="logo" 
                      name="logo" 
                      defaultValue={settings.general.logo} 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Описание сайта</Label>
                  <Textarea 
                    id="siteDescription" 
                    name="siteDescription" 
                    defaultValue={settings.general.siteDescription}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    defaultValue={settings.general.address} 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Контактный email</Label>
                    <Input 
                      id="contactEmail" 
                      name="contactEmail" 
                      defaultValue={settings.general.contactEmail} 
                      type="email"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Контактный телефон</Label>
                    <Input 
                      id="contactPhone" 
                      name="contactPhone" 
                      defaultValue={settings.general.contactPhone} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                    Сохранить настройки
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Часы работы */}
        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Часы работы</CardTitle>
              <CardDescription>
                Укажите часы работы вашего сервиса проката
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBusinessHoursSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monday">Понедельник</Label>
                    <Input 
                      id="monday" 
                      name="monday" 
                      defaultValue={settings.businessHours.monday} 
                      placeholder="9:00 - 20:00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tuesday">Вторник</Label>
                    <Input 
                      id="tuesday" 
                      name="tuesday" 
                      defaultValue={settings.businessHours.tuesday} 
                      placeholder="9:00 - 20:00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wednesday">Среда</Label>
                    <Input 
                      id="wednesday" 
                      name="wednesday" 
                      defaultValue={settings.businessHours.wednesday} 
                      placeholder="9:00 - 20:00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="thursday">Четверг</Label>
                    <Input 
                      id="thursday" 
                      name="thursday" 
                      defaultValue={settings.businessHours.thursday} 
                      placeholder="9:00 - 20:00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="friday">Пятница</Label>
                    <Input 
                      id="friday" 
                      name="friday" 
                      defaultValue={settings.businessHours.friday} 
                      placeholder="9:00 - 20:00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="saturday">Суббота</Label>
                    <Input 
                      id="saturday" 
                      name="saturday" 
                      defaultValue={settings.businessHours.saturday} 
                      placeholder="10:00 - 18:00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sunday">Воскресенье</Label>
                    <Input 
                      id="sunday" 
                      name="sunday" 
                      defaultValue={settings.businessHours.sunday} 
                      placeholder="10:00 - 16:00"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                    Сохранить часы работы
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Социальные сети */}
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Социальные сети</CardTitle>
              <CardDescription>
                Настройте ссылки на ваши социальные сети
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSocialSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook" className="flex items-center gap-2">
                      <Icon name="Facebook" size={16} />
                      Facebook
                    </Label>
                    <Input 
                      id="facebook" 
                      name="facebook" 
                      defaultValue={settings.social.facebook} 
                      placeholder="https://facebook.com/yourpage"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Icon name="Instagram" size={16} />
                      Instagram
                    </Label>
                    <Input 
                      id="instagram" 
                      name="instagram" 
                      defaultValue={settings.social.instagram} 
                      placeholder="https://instagram.com/yourpage"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="youtube" className="flex items-center gap-2">
                      <Icon name="Youtube" size={16} />
                      YouTube
                    </Label>
                    <Input 
                      id="youtube" 
                      name="youtube" 
                      defaultValue={settings.social.youtube} 
                      placeholder="https://youtube.com/yourchannel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vk" className="flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center">В</span>
                      ВКонтакте
                    </Label>
                    <Input 
                      id="vk" 
                      name="vk" 
                      defaultValue={settings.social.vk} 
                      placeholder="https://vk.com/yourpage"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                    Сохранить социальные сети
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Функции */}
        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Функции сайта</CardTitle>
              <CardDescription>
                Включите или отключите функции вашего сайта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Отзывы</Label>
                    <p className="text-sm text-muted-foreground">
                      Разрешить пользователям оставлять отзывы о мотоциклах
                    </p>
                  </div>
                  <Switch
                    checked={settings.features.enableReviews}
                    onCheckedChange={(value) => handleFeatureToggle('enableReviews', value)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Календарь бронирования</Label>
                    <p className="text-sm text-muted-foreground">
                      Показывать календарь доступности мотоциклов
                    </p>
                  </div>
                  <Switch
                    checked={settings.features.enableBookingCalendar}
                    onCheckedChange={(value) => handleFeatureToggle('enableBookingCalendar', value)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">SMS-уведомления</Label>
                    <p className="text-sm text-muted-foreground">
                      Отправлять SMS-уведомления о заказах
                    </p>
                  </div>
                  <Switch
                    checked={settings.features.enableSmsNotifications}
                    onCheckedChange={(value) => handleFeatureToggle('enableSmsNotifications', value)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email-уведомления</Label>
                    <p className="text-sm text-muted-foreground">
                      Отправлять Email-уведомления о заказах
                    </p>
                  </div>
                  <Switch
                    checked={settings.features.enableEmailNotifications}
                    onCheckedChange={(value) => handleFeatureToggle('enableEmailNotifications', value)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Режим обслуживания</Label>
                    <p className="text-sm text-muted-foreground">
                      Включить режим обслуживания (сайт будет недоступен для пользователей)
                    </p>
                  </div>
                  <Switch
                    checked={settings.features.maintenanceMode}
                    onCheckedChange={(value) => handleFeatureToggle('maintenanceMode', value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
