'use client';

import { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { SalesFilter } from '@/types/sales';

interface SalesFilterProps {
  onFilterChange: (filter: SalesFilter) => void;
}

export const SalesFilterComponent = ({ onFilterChange }: SalesFilterProps) => {
  const [minSales, setMinSales] = useState<string>('');
  const [maxSales, setMaxSales] = useState<string>('');

  const handleApplyFilter = () => {
    const filter: SalesFilter = {};

    if (minSales) {
      filter.minSales = parseFloat(minSales) * 1000; // Convert to actual sales value
    }

    if (maxSales) {
      filter.maxSales = parseFloat(maxSales) * 1000; // Convert to actual sales value
    }

    onFilterChange(filter);
  };

  const handleClearFilter = () => {
    setMinSales('');
    setMaxSales('');
    onFilterChange({});
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Filter</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          type="number"
          label="Minimum Sales (in thousands)"
          placeholder="e.g., 100"
          value={minSales}
          onChange={(e) => setMinSales(e.target.value)}
        />
        <Input
          type="number"
          label="Maximum Sales (in thousands)"
          placeholder="e.g., 250"
          value={maxSales}
          onChange={(e) => setMaxSales(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={handleApplyFilter} variant="primary" size="sm">
          Apply Filter
        </Button>
        <Button onClick={handleClearFilter} variant="outline" size="sm">
          Clear Filter
        </Button>
      </div>
    </div>
  );
};