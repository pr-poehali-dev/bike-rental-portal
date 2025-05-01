
import { icons } from "lucide-react";
import { ComponentProps } from "react";

export interface IconProps extends Omit<ComponentProps<"svg">, "name"> {
  name: string;
  size?: number;
  fallback?: string;
}

const Icon = ({ name, fallback, size = 24, ...props }: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons] || (fallback ? icons[fallback as keyof typeof icons] : null);

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found${fallback ? `, and fallback "${fallback}" not found.` : '.'}`);
    return null;
  }

  return <IconComponent size={size} {...props} />;
};

export default Icon;
