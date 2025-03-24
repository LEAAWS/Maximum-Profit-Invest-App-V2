import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Stocks', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Bonds', value: 25, color: 'hsl(var(--success))' },
  { name: 'Crypto', value: 15, color: 'hsl(var(--warning))' },
  { name: 'Commodities', value: 10, color: 'hsl(var(--info))' },
  { name: 'Cash', value: 5, color: 'hsl(var(--muted))' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function PortfolioAllocation() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          formatter={(value: number) => [`${value}%`, 'Allocation']}
        />
      </PieChart>
    </ResponsiveContainer>
  );
} 