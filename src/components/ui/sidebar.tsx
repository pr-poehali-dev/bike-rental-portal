
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  collapsed?: boolean;
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon?: string;
  path: string;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}

export const SidebarItem = ({
  icon,
  path,
  label,
  active,
  collapsed,
  className,
  ...props
}: SidebarItemProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-gray-700 transition-all duration-150",
        active ? "bg-orange-100 text-orange-600" : "hover:bg-gray-100",
        collapsed && "justify-center px-2",
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} size={20} className="shrink-0" />}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

export const Sidebar = ({ 
  className, 
  collapsed = false,
  ...props 
}: SidebarProps) => {
  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64",
        className
      )}
      {...props}
    />
  );
};

export const SidebarHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("p-4 border-b border-gray-200", className)}
      {...props}
    />
  );
};

export const SidebarFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("mt-auto border-t border-gray-200 p-4", className)}
      {...props}
    />
  );
};

export const SidebarNavigation = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex-1 py-6 flex flex-col", className)}
      {...props}
    />
  );
};
