import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface CumulativeReturnChartProps {
  data: Array<{
    date: string;
    realized: number;
    unrealized: number;
  }>;
}

export function CumulativeReturnChart({ data }: CumulativeReturnChartProps) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 'var(--radius)',
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Return']}
          />
          <Legend />
          <Bar
            dataKey="realized"
            name="Realized"
            stackId="a"
            fill="hsl(var(--success))"
          />
          <Bar
            dataKey="unrealized"
            name="Unrealized"
            stackId="a"
            fill="hsl(var(--warning))"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 