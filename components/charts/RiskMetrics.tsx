import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const data = [
  { metric: 'Volatility', value: 0.8 },
  { metric: 'Sharpe Ratio', value: 1.2 },
  { metric: 'Beta', value: 0.9 },
  { metric: 'Alpha', value: 1.1 },
  { metric: 'Sortino', value: 1.3 },
  { metric: 'Max Drawdown', value: 0.7 },
];

export function RiskMetrics() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey="metric"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <PolarRadiusAxis
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <Radar
          name="Risk"
          dataKey="value"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
} 