
import { LucideIcon, LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
  fallback?: string;
}

// Функция для безопасного получения иконки по имени
const getIconByName = (name: string): LucideIcon | undefined => {
  // Проверяем, существует ли иконка с таким именем
  if (name in LucideIcons) {
    return (LucideIcons as Record<string, LucideIcon>)[name];
  }
  return undefined;
};

const Icon = ({ name, fallback = "HelpCircle", ...props }: IconProps) => {
  const IconComponent = getIconByName(name) || getIconByName(fallback);
  
  if (!IconComponent) {
    console.error(`Icon "${name}" не найдена и fallback "${fallback}" тоже не найден.`);
    return null;
  }
  
  return <IconComponent {...props} />;
};

export default Icon;
