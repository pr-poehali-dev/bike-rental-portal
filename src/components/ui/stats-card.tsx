
import { ReactNode } from "react";
import Icon from "./Icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: string;
  trend?: number;
  trendLabel?: string;
  className?: string;
  iconColor?: string;
  onClick?: () => void;
  loading?: boolean;
}

const StatsCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendLabel,
  className,
  iconColor = "text-orange-500",
  onClick,
  loading = false
}: StatsCardProps) => {
  // Определение цвета тренда
  const getTrendColor = (): string => {
    if (!trend) return "";
    return trend > 0 ? "text-green-500" : trend < 0 ? "text-red-500" : "text-gray-500";
  };

  // Определение иконки тренда
  const getTrendIcon = (): ReactNode => {
    if (!trend) return null;
    return trend > 0 ? (
      <Icon name="TrendingUp" size={14} className="text-green-500" />
    ) : trend < 0 ? (
      <Icon name="TrendingDown" size={14} className="text-red-500" />
    ) : (
      <Icon name="Minus" size={14} className="text-gray-500" />
    );
  };

  return (
    <Card 
      className={cn("transition-all duration-200 hover:shadow-md", 
        onClick && "cursor-pointer hover:border-orange-200", 
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <Icon name={icon} className={iconColor} size={18} />}
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-8 bg-gray-200 animate-pulse rounded mb-2"></div>
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
        {(description || trend) && (
          <div className="flex items-center gap-1">
            {trend !== undefined && (
              <>
                {getTrendIcon()}
                <span className={cn("text-xs font-medium", getTrendColor())}>
                  {trend > 0 ? "+" : ""}{trend}%
                </span>
              </>
            )}
            {description && (
              <p className="text-xs text-gray-500">
                {trendLabel || description}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
