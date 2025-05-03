
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
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface SiteSettings {
  general: {
    siteName: string;
                        setSelecte
    siteDescription: string;
    logodMotorcycle(motorcycle);
                        setIsEditDialogOpen(true);
                : string;
    contactEmail: string;      }}
                    >
                      
    contactPhone: string;
    address<Icon name="Edit" size={14} />: string;
  };
  business
                    </Button>
                    Hours: {
    monday: string;<Button 
                      variant="outline" 
    tuesday: string;
    wednesday:
                      size="icon" 
                 string;
    thursday: string;
          className="h-8 w-8friday: string;
    saturday: string; text-red-500 hover:text
    sunday: string;
  };-red-600"
                      onClick={() => {
                        setSelectedMotorcycle
  social: {
    facebook: string;
    (motorcycle);
                        setIsDeleteDialinstagram: string;
    youtube: string;
    ogOpen(true);
                      }}
                    >
                      <Icon name="vk: string;
  };
  featuresTrash" size={14} />
                    </Button>
                  </div>: {
    enableReviews: boolean;
                )}
              />
            </TabsContent>
          </Tabs>
    enableBookingCalendar: boolean;
        </CardContent>
      </Car
    enableSmsNotifications: boolean;d>
      
      {
    enableEmailNotifications: boolean;
    maintenanceMode: boolean;
  };/* Диалог просмотра мотоцикла */}
      <Dialog
  security: {
    twoFactorAuth open={isViewDialogOpen} onOpen: boolean;
    sessionTimeout: number;Change={setIsViewDialogOpen}>
        <DialogContent className="sm
    passwordPolicy: {
      minLength: number;:max-w-[700px]">
          <Dialog
      requireUppercase: boolean;
      requireNumbersHeader>
            <DialogTitle>Информ: boolean;
      requireSpecialChars: boolean;ация о мотоцикле</DialogTitle>
            <DialogDescription
    }
  };
  api: {
    enable>
              ПодробныеApi: boolean;
    apiKey: string; сведения о выбранном мотоцикле
            </DialogDescription>
    allowedOrigins: string;
          </DialogHeader>
  };
}

// Мо
          
          {selectedMotorcycle && (
            <div className="griковые данные для настроек
const defaultd md:grid-cols-2 gap-6Settings: SiteSettings = {
  general: {
    siteName: "Мот">
              <div>
                <div classNameоРент",
    siteDescription:="rounded-lg overflow-hidden h "Прокат премиальных мот-48 mb-4">
                оциклов для незабываемых при  <img 
                    src={selectedMotorcycle.image} 
                ключений",
    logo: "/public/logo-    alt={selectedMotorcycle.name}b.svg",
    contactEmail: "info 
                    className="w@motorent.ru",
    contactPhone-full h-full object-cover": "+7 (999) 123-
                  />
                </div>
                <div className="space-y-2">45-67",
    address: "г. Москва,
                  <div className="flex items- ул. Мотоциклетнаяcenter gap-2">
                    <Badge, 123"
  },
  businessHours: variant="outline" className={selectedMotorcycle.in {
    monday: "9:00 - Stock ? 'border-green-500 text-green-600' : 'border20:00",
    tuesday: "9:-red-500 text-red-60000 - 20:00",
    '}>
                      {selectedMotorcyclewednesday: "9:00 - 20.inStock ? ':00",
    thursday: "9:00 - 20:00",
    Доступен' : 'Недоступен'}
                    </Badge>
                friday: "9:00 - 20    <Badge variant="outline":00",
    saturday: "10:00 - >{selectedMotorcycle.category}</Badge>18:00",
    sunday: "10:
                    <Badge variant="outline00 - 16:00"
  ">{selectedMotorcycle.type}</Badge>
                  </div>},
  social: {
    facebook: "https://facebook.com/motorent",
                  <h3 className="text-
    instagram: "https://instagram.comxl font-bold">{selectedMotorc/motorent",
    youtube: "httpsycle.name}</h3>
                  ://youtube.com/motorent",
    <p className="text-gray-600"vk: "https://vk.com/motorent">{selectedMotorcycle.description}</p>
                </div>
              </div>
  },
  features: {
    enableReviews: true,
    enableBookingCalendar:
              
              <div className="space-y- true,
    enableSmsNotifications:6">
                <div>
                  <h4 className="font- false,
    enableEmailNotifications: true,
    maintensemibold mb-2">ХарактanceMode: false
  },
  securityеристики</h4>
                  : {
    twoFactorAuth:<div className="space-y-2"> false,
    sessionTimeout: 60,
                    <div className="flex justify
    passwordPolicy: {
      minLength: 8,
      requireUppercase:-between border-b pb-1 true,
      requireNumbers: true,">
                      <span className="text
      requireSpecialChars: false
    }
  -gray-600">Ц},
  api: {
    enableApiена аренды:</span>
                      : false,
    apiKey: "mk<span className="font-medium">{selectedMotorcycle.price.toLocaleString()} _test_aYxDuq8₽/день</span>
                    </div>
                    <div className="flex justify-between border-b pbtZK5jL9pR7-1">
                      <span className="text-gray-600">Мощность:</span>
                      <span className="font-medium">{selectedMotorcycle.power} л.с.</span>vN2sW3eB",
    allowe
                    </div>
                    dOrigins: "motorent.ru, admin.motorent.ru"
  }<div className="flex justify-between border-b
};

const Settings = () => {
   pb-1">
                      <span classNameconst [settings, setSettings] = useState="text-gray-600">Объем двигателя:</span>
                      <SiteSettings>(defaultSettings);
  const<span className="font-medium">{selecte [activeTab, setActiveTab] = useState("dMotorcycle.volume} см³</spangeneral");
  const [isApiKeyVisible>
                    </div>
                    , setIsApiKeyVisible] = useState(<div className="flex justify-between border-b pb-1">
                      <spanfalse);
  const [isTestSms className="text-gray-600">Рейтинг:</spanModalOpen, setIsTestSmsModalOpen]>
                      <span className="font- = useState(false);
  const { toast } = useTomedium flex items-center">
                        {ast();
  
  // ОбработчикиselectedMotorcycle.rating}
                         изменения настроек
  const handle<Icon name="Star" size={14} className="text-yellow-500GeneralSubmit = (e: React.FormEvent ml-1" />
                      <HTMLFormElement>) => {
    e.</span>
                    </div>
                preventDefault();
    const formData = new FormData(e.currentTarget);
      </div>
                </div>
                
                <div>
                  <h
    setSettings({
      ...settings,
      general4 className="font-semibold mb: {
        siteName: formData.-2">Особенности</h4get('siteName') as string,
        site>
                  <div className="flexDescription: formData.get('siteDescription flex-wrap gap-2">') as string,
        logo: formData
                    {selectedMotorcycle.features.get('logo') as string,
        .map((feature, index) => (contactEmail: formData.get('contactEmail
                      <Badge key={index} variant="') as string,
        contactPhone: formData.get('contactsecondary">
                        {feature}
                      Phone') as string,
        address: form</Badge>
                    ))}
                  Data.get('address') as string
      }
    });</div>
                </div>
                
                <div>
                  <h
    
    toast({
      title: "4 className="font-semibold mb-2">Действия</h4>
                  <div className="flex flexУспешно!",
      description: "Общ-wrap gap-2">
                    ие настройки сохранены",
    <Button variant="outline" size="sm});
  };
  
  const handleBusinessHoursSubmit = (e:" className="gap-1"
                      onClick={() React.FormEvent<HTMLFormElement>) => => {
                        setIsViewDialog {
    e.preventDefault();
    constOpen(false);
                        setIs formData = new FormData(e.currentEditDialogOpen(true);
                      Target);
    
    setSettings({}}
                    >
                      <Icon
      ...settings,
      businessHours: name="Edit" size={14} /> {
        monday: formData.get('
                      Редактировать
                    monday') as string,
        tuesday: form</Button>
                    <Button Data.get('tuesday') as string,
                      variant={selectedMotorcycle.
        wednesday: formData.get('wednesday') as string,
        thursday: formData.inStock ? "destructive" : "outlineget('thursday') as string,
        friday"} 
                      size="sm": formData.get('friday') as string
                      className={!selectedMotorcycle.,
        saturday: formData.get('saturday') as string,
        sunday: forminStock ? "text-green-600Data.get('sunday') as string
       border-green-200 }
    });
    
    toast({
      title: "Успешно!hover:bg-green-50" : ""}",
      description: "Часы работ
                      onClick={() => {
                        ы сохранены",
    });
  };
  
  const handleSocialSubmit = (ehandleToggleAvailability(selectedMot: React.FormEvent<HTMLFormElement>)orcycle.id);
                         => {
    e.preventDefault();
    const formData = new FormData(e.setSelectedMotorcycle({
                          ...selectedMotcurrentTarget);
    
    setSettings({orcycle,
                          inStock: !
      ...settings,
      social: {selectedMotorcycle.inStock
                        
        facebook: formData.get('facebook});
                      }}
                    >') as string,
        instagram: formData
                      <Icon name={selectedMot.get('instagram') as string,
        orcycle.inStock ? "X" : "Check"youtube: formData.get('youtube') as string,
        vk: formData.} size={14} className="mrget('vk') as string
      }-1" />
                      {selectedMot
    });
    
    toast({orcycle.inStock ? 
      title: "Успешно!",'Сделать недоступ
      description: "Настройки социным' : 'Сделать доальных сетей сохранены",ступным'}
                    </Button>
    });
  };
  
  
                  </div>
                </div>
              </div>
            const handleFeatureToggle = (feature:</div>
          )}
          
          <DialogFooter>
             keyof SiteSettings['features'], value: boolean) => {<Button onClick={() => setIsViewDialogOpen(false
    setSettings({
      ...settings,)}>
              Закры
      features: {
        ...settings.ть
            </Button>
          </Dialogfeatures,
        [feature]: value
      }
    });Footer>
        </DialogContent>
      </Dialog>
      
      {/*
    
    toast({
      title: "Наст Диалог редактирования мотройка изменена",
      description: `Функоцикла */}
      <Dialog open={isEditDialogOpen} onOpenция "${getFeatureName(feature)}"Change={setIsEditDialogOpen}>
        <DialogContent className="sm:max- ${value ? "включена" : "w-[600px]">
          <DialogHeader>отключена"}`,
    });
  };
  
            <DialogTitle>Редактиров
  const handleSecuritySubmit = (ать мотоцикл</DialogTitlee: React.FormEvent<HTMLFormElement>
            <DialogDescription>
              >) => {
    e.preventDefault();
    const formData = new FormData(eИзмените данные мотоцикла.currentTarget);
    
    setSettings
            </DialogDescription>
          </Dialog({
      ...settings,
      security: {
        twoFactorAuth: formHeader>
          
          {selectedMotorcycle && (
            <form onSubmit={handleData.get('twoFactorAuth')EditMotorcycle}>
              <div === 'on',
        sessionTimeout: Number(formData.get('sessionTimeout')),
        passwordPolicy className="grid gap-4 : {
          minLength: Number(formpy-4">
                <div classNameData.get('minLength')),
          requireUppercase: form="grid grid-cols-1Data.get('requireUppercase') ===  md:grid-cols-2 gap'on',
          requireNumbers: formData-4">
                  <div className.get('requireNumbers') === 'on="space-y-2">',
          requireSpecialChars: form
                    <Label htmlFor="editData.get('requireSpecialChars')-name">Название</Label>
                 === 'on'
        }
          <Input 
                      id="edit}
    });
    
    toast({-name" 
                      name="name
      title: "Успешно!",
      description: "Настройки" 
                      defaultValue={selectedMotorcycle.name} 
                      require безопасности сохранены",
    });
  };
  
  constd 
                    />
                   handleApiSubmit = (e: React.</div>
                  <div className="space-FormEvent<HTMLFormElement>) => {y-2">
                    <Label html
    e.preventDefault();
    const formDataFor="edit-price">Цена ( = new FormData(e.currentTarget);₽/день)</Label>
                    
    
    setSettings({
      ...settings,
      api<Input 
                      id="edit-price: {
        enableApi: formData." 
                      name="price" get('enableApi') === 'on',
                      type="number" 
                
        apiKey: formData.get('      defaultValue={selectedMotorcycle.priceapiKey') as string,
        allowe} 
                      required 
                    dOrigins: formData.get('allowe/>
                  </div>
                dOrigins') as string
      }
    });
    
    </div>
                
                <div className="toast({
      title: "Успешgrid grid-cols-1 md:grid-cols-3 gap-4">но!",
      description: "Настройки API сох
                  <div className="space-yранены",
    });
  };-2">
                    <Label htmlFor
  
  const regenerateApiKey = ()="edit-category">Категория => {
    const characters = 'ABC</Label>
                    <Select nameDEFGHIJKLM="category" defaultValue={selectedMotorcNOPQRSTUVWXycle.category}>
                      <SelectYZabcdefghijklmnopTrigger id="edit-category">qrstuvwxyz0123456789
                        <SelectValue placeholder="Выберите категорию" />
                      ';
    const length = 24;
    let api</SelectTrigger>
                      Key = 'mk_test_';
    
    <SelectContent>
                        <SelectItemfor (let i = 0; i < length; i++) { value="Нейкед">Н
      apiKey += characters.charAt(Mathейкед</SelectItem>
                        .floor(Math.random() * characters.<SelectItem value="Спlength));
    }
    
    setSettings({
      ...settings,
      apiортбайк">Спортбайк: {
        ...settings.api,</SelectItem>
                        <SelectItem
        apiKey
      }
    }); value="Турист">Турист
    
    toast({
      title: "Нов</SelectItem>
                        <SelectItem value="Круизер">Круизер</SelectItem>
                        ый API ключ сгенерирован",
      description: "Не забудьте с<SelectItem value="Эндуро">охранить изменения",
    });
  };Эндуро</SelectItem>
  
  const getFeatureName = (
                      </SelectContent>
                    feature: keyof SiteSettings['features'])</Select>
                  </div>
                  
                  <div className => {
    switch (feature) {="space-y-2">
                    
      case "enableReviews": return "Отз<Label htmlFor="edit-type">ывы";
      case "enableBookingCalendar": returnТип</Label>
                    <Select "Календарь бронирования"; name="type" defaultValue={selectedMotorcycle.type}>
                      <SelectT
      case "enableSmsNotifications": return "SMSrigger id="edit-type">
                -уведомления";
      case "enable        <SelectValue placeholder="Выберите тип" />
                      </SelectTEmailNotifications": return "Email-уведомления";
      case "maintenancerigger>
                      <SelectContent>
                        <SelectItem value="Спортивный">СпортMode": return "Режим обслуживания";ивный</SelectItem>
                        
    }
  };
  
  <SelectItem value="Туристический">const copyToClipboard = (text: string) =>Туристический</SelectItem>
                         {
    navigator.clipboard.writeText(<SelectItem value="Круизерtext);
    toast({
      title:">Круизер</SelectItem>
                         "Скопировано!",
      description:<SelectItem value="Город "Текст скопирован в буфер обской">Городской</SelectItem>мена",
    });
  };
                      </SelectContent>
                    </Select>

  return (
    <div className="space
                  </div>
                  -y-6">
      <div className="flex
                  <div className="space-y-2">
                    <Label htmlFor=" items-center justify-between">
        <hedit-volume">Объем двигател1 className="text-2xl font-bolя (см³)</Label>
                    <Input 
                      id="edit-d tracking-tight">Настройки сvolume" 
                      name="volume"айта</h1>
        <div 
                      type="number" 
                      defaultValue={selectedMotorcycle. className="flex gap-2">
          <Buttonvolume} 
                      required 
                 
            variant="outline" 
            onClick={()    />
                  </div>
                </div>
                
                <div className => {
              toast({
                title:="grid grid-cols-1 md: "Резервная копия создана",
                descriptiongrid-cols-2 gap-4">: "Настройки успешно
                  <div className="space-y-2">
                    <Label htmlFor экспортированы",
              });
            ="edit-power">Мощность (}}
          >
            <Icon name="Downloaл.с.)</Label>
                    <Input 
                      id="edit-d" size={16} className="mr-2" />power" 
                      name="power"
            Экспорт
          </Button 
                      type="number" >
          <Button 
            variant="
                      defaultValue={selectedMotorcycle.outline" 
            onClick={() => {power} 
                      required 
                
              toast({
                title: "Имп    />
                  </div>
                орт настроек",
                description:  <div className="space-y-2 "Для импорта выберите файл с">
                    <Label htmlFor="edit-image">URL изображения</Label>
                    <Input 
                       настройками",
              });
            }}
          >
            <Icon name="Upload" size={16id="edit-image" 
                      } className="mr-2" />
            name="image" 
                      defaultValueИмпорт
          </Button>={selectedMotorcycle.image} 
                    />
                  
        </div>
      </div>
      
      </div>
                </div>
                <Tabs 
        defaultValue="general" 
                <div className="space-y-2
        value={activeTab} 
        onValueChange">
                  <Label htmlFor="edit={setActiveTab} 
        className="-description">Описание</Label>
                  <Textarea 
                    space-y-4"
      >id="edit-description" 
                    name="description" 
                    defaultValue={selectedMotorcycle.description} 
        <div className="bg-white border rounded-md p
                    className="min-h-[100-1">
          <TabsList className="wpx]"
                  />-full grid grid-cols-2 m
                </div>
                
                <divd:grid-cols-3 lg:grid-cols- className="space-y-2">
                  <Label htmlFor="edit-6 gap-1">
            <Tabfeatures">Особенности (sTrigger value="general" className="flexчерез запятую)</Label>
                   items-center gap-2">
              <Icon name<Input 
                    id="edit-features="Settings" size={16} />
              <span className" 
                    name="features" 
                    defaultValue={selectedMotorcycle.features.join(', ')} ="hidden sm:inline">Общие</span
                  />
                </div>
                >
            </TabsTrigger>
            <TabsTrigger value="hours
                <div className="flex items-center space" className="flex items-center gap-2-x-2">
                  <Switch">
              <Icon name="Clock" size 
                    id="edit-inStock" 
                    name="inStock={16} />
              <span className="hidden sm:inline">Часы работы" 
                    defaultChecked={selectedMot</span>
            </TabsTrigger>
            <TabsTrigger value="orcycle.inStock}
                  social" className="flex items-center gap-/>
                  <Label htmlFor="edit2">
              <Icon name="Share-inStock">Доступен для аренды</Label>
                </div2" size={16} />
              <span>
              </div>
               className="hidden sm:inline">Соцсети</span
              <DialogFooter>
                >
            </TabsTrigger><Button 
                  type="button
            <TabsTrigger value="features"" 
                  variant="outline"  className="flex items-center gap-2">
                  onClick={() => setIsEditDialog
              <Icon name="Settings2" size={16}Open(false)}
                >
                   />
              <span className="hidden sm:Отмена
                </Button>inline">Функции</span>
            
                <Button type="submit"</TabsTrigger>
            <Tab className="bg-orange-sTrigger value="security" className="flex500 hover:bg-orange-600"> items-center gap-2">
              
                  Сохранить изменения
                </Button>
              <Icon name="Shield" size={16} />
              <span</DialogFooter>
            </form> className="hidden sm:inline">Безоп
          )}
        </DialogContent>асность</span>
            </TabsT
      </Dialog>
      
      {/*rigger>
            <TabsTrigger Диалог подтверждения уд value="api" className="flex items-centerаления */}
      <Dialog gap-2">
              <Icon name=" open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>Code" size={16} />
              <span className="hidden sm:inline">API
        <DialogContent className="sm:max-w-[425px]">
          </span>
            </TabsTrigger>
          </TabsList<DialogHeader>
            <DialogTitle>>
        </div>
        
        Подтверждение удаления</DialogTitle>
            <Dialog{/* Общие настройки */}
        Description>
              Вы уверены<TabsContent value="general">
          <Card>, что хотите удалить м
            <CardHeader>
              <Carотоцикл "{selectedMotorcycle?.dTitle>Общие настройки</Carname}"?
              ЭтоdTitle>
              <CardDescription>
                Основ действие нельзя отменить.
            </DialogDescription>
          </Dialogная информация о вашем сайте иHeader>
          <DialogFooter> контактные данные
              </CardDescription
            <Button variant="outline" onClick={()>
            </CardHeader>
             => setIsDeleteDialogOpen(false)<CardContent>
              <form onSubmit}>
              Отмена
            </Button>
            <Button variant={handleGeneralSubmit} className="space-y="destructive" onClick={handleDeleteMotorcycle}>
              Удалить
            -4">
                <div className="gri</Button>
          </DialogFooter>d grid-cols-1 md:grid-cols-2 gap-4">
                  
        </DialogContent>
      </Dialog<div className="space-y-2">>
    </div>
  );
                    <Label htmlFor="siteName">Название сайта</Label>
};

export default Motorcycles;
                    <Input 
                      id="siteName" 
                      name="sit
