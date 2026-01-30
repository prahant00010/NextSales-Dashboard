'use client';

import { ChartType } from '@/types/sales';
import { Button } from '@/components/atoms/Button';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export const ChartTypeSelector = ({ selectedType, onTypeChange }: ChartTypeSelectorProps) => {
  return (
    <div className="flex gap-2 mb-6">
      <Button
        variant={selectedType === 'bar' ? 'primary' : 'outline'}
        size="sm"
        onClick={() => onTypeChange('bar')}
        className="flex items-center gap-2"
      >
        <BarChart3 size={16} />
        Bar Chart
      </Button>
      <Button
        variant={selectedType === 'line' ? 'primary' : 'outline'}
        size="sm"
        onClick={() => onTypeChange('line')}
        className="flex items-center gap-2"
      >
        <LineChart size={16} />
        Line Chart
      </Button>
      <Button
        variant={selectedType === 'pie' ? 'primary' : 'outline'}
        size="sm"
        onClick={() => onTypeChange('pie')}
        className="flex items-center gap-2"
      >
        <PieChart size={16} />
        Pie Chart
      </Button>
    </div>
  );
};