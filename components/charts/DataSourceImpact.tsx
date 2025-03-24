import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    source: 'Market Data',
    positive: 8.5,
    negative: 2.1,
    neutral: 1.4,
  },
  {
    source: 'News',
    positive: 6.2,
    negative: 3.8,
    neutral: 2.0,
  },
  {
    source: 'Social Media',
    positive: 4.8,
    negative: 4.2,
    neutral: 3.0,
  },
  {
    source: 'Technical',
    positive: 7.3,
    negative: 2.7,
    neutral: 1.0,
  },
  {
    source: 'Fundamental',
    positive: 5.9,
    negative: 3.1,
    neutral: 2.0,
  },
];

export function DataSourceImpact() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="source"
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
        />
        <Legend />
        <Bar dataKey="positive" stackId="a" fill="hsl(var(--success))" name="Positive Impact" />
        <Bar dataKey="negative" stackId="a" fill="hsl(var(--destructive))" name="Negative Impact" />
        <Bar dataKey="neutral" stackId="a" fill="hsl(var(--muted))" name="Neutral Impact" />
      </BarChart>
    </ResponsiveContainer>
  );
} 