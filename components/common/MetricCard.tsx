import React from 'react';
import { InfoTooltip } from './InfoTooltip';

interface MetricCardProps {
  title: string;
  value: string | number;
  tooltip: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function MetricCard({ title, value, tooltip, trend }: MetricCardProps) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <InfoTooltip content={tooltip} />
      </div>
      <div className="mt-2 flex items-baseline">
        <span className="text-2xl font-semibold">{value}</span>
        {trend && (
          <span className={`ml-2 text-sm font-medium ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
    </div>
  );
} 