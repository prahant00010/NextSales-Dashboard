'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData } from '@/types/sales';

interface BarChartProps {
  data: ChartData[];
  title?: string;
  color?: string;
}

export const SalesBarChart = ({
  data,
  title = 'Sales Data',
  color = '#3B82F6'
}: BarChartProps) => {
  return (
    <div className="w-full h-96">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{
              backgroundColor: '#F9FAFB',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
            }}
          />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};