import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', responseTime: 120 },
  { time: '02:00', responseTime: 115 },
  { time: '04:00', responseTime: 125 },
  { time: '06:00', responseTime: 118 },
  { time: '08:00', responseTime: 145 },
  { time: '10:00', responseTime: 160 },
  { time: '12:00', responseTime: 155 },
  { time: '14:00', responseTime: 148 },
  { time: '16:00', responseTime: 135 },
  { time: '18:00', responseTime: 128 },
  { time: '20:00', responseTime: 122 },
  { time: '22:00', responseTime: 118 },
];

export function ResponseTimeTrends() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          formatter={(value: number) => [`${value}ms`, 'Response Time']}
        />
        <Area
          type="monotone"
          dataKey="responseTime"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
} 