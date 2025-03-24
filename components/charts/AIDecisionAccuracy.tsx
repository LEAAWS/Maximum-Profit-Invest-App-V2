import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', accuracy: 85 },
  { date: 'Feb', accuracy: 87 },
  { date: 'Mar', accuracy: 89 },
  { date: 'Apr', accuracy: 86 },
  { date: 'May', accuracy: 91 },
  { date: 'Jun', accuracy: 88 },
  { date: 'Jul', accuracy: 92 },
  { date: 'Aug', accuracy: 90 },
  { date: 'Sep', accuracy: 93 },
  { date: 'Oct', accuracy: 89 },
  { date: 'Nov', accuracy: 94 },
  { date: 'Dec', accuracy: 92 },
];

export function AIDecisionAccuracy() {
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
          domain={[80, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          formatter={(value: number) => [`${value}%`, 'Accuracy']}
        />
        <Line
          type="monotone"
          dataKey="accuracy"
          stroke="hsl(var(--success))"
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--success))', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 