import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Winning Trades', value: 65 },
  { name: 'Losing Trades', value: 35 },
];

const COLORS = ['hsl(var(--success))', 'hsl(var(--destructive))'];

export function WinLossRatio() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          formatter={(value: number) => [`${value}%`, 'Trades']}
        />
      </PieChart>
    </ResponsiveContainer>
  );
} 