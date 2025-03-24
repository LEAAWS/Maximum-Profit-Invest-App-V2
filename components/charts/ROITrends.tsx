import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', roi: 2.5 },
  { date: 'Feb', roi: 3.8 },
  { date: 'Mar', roi: 4.2 },
  { date: 'Apr', roi: 5.1 },
  { date: 'May', roi: 6.3 },
  { date: 'Jun', roi: 7.2 },
  { date: 'Jul', roi: 8.5 },
  { date: 'Aug', roi: 9.1 },
  { date: 'Sep', roi: 10.3 },
  { date: 'Oct', roi: 11.2 },
  { date: 'Nov', roi: 12.5 },
  { date: 'Dec', roi: 13.8 },
];

export function ROITrends() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="date"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          formatter={(value: number) => [`${value}%`, 'ROI']}
        />
        <Line
          type="monotone"
          dataKey="roi"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 