'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ChartData } from '@/types/sales';

interface PieChartProps {
  data: ChartData[];
  title?: string;
  colors?: string[];
}

const DEFAULT_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#06B6D4', // Cyan
];

export const SalesPieChart = ({
  data,
  title = 'Sales Distribution',
  colors = DEFAULT_COLORS
}: PieChartProps) => {
  return (
    <div className="w-full h-96">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
            contentStyle={{
              backgroundColor: '#F9FAFB',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};