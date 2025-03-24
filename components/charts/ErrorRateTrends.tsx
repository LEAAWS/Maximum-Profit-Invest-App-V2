import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', errorRate: 0.2 },
  { time: '02:00', errorRate: 0.15 },
  { time: '04:00', errorRate: 0.18 },
  { time: '06:00', errorRate: 0.12 },
  { time: '08:00', errorRate: 0.25 },
  { time: '10:00', errorRate: 0.32 },
  { time: '12:00', errorRate: 0.28 },
  { time: '14:00', errorRate: 0.22 },
  { time: '16:00', errorRate: 0.19 },
  { time: '18:00', errorRate: 0.15 },
  { time: '20:00', errorRate: 0.12 },
  { time: '22:00', errorRate: 0.1 },
];

export function ErrorRateTrends() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="time"
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
          formatter={(value: number) => [`${value}%`, 'Error Rate']}
        />
        <Line
          type="monotone"
          dataKey="errorRate"
          stroke="hsl(var(--destructive))"
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 