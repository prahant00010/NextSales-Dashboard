'use client';

import { useState, useMemo } from 'react';
import { SalesBarChart } from '@/components/atoms/BarChart';
import { SalesLineChart } from '@/components/atoms/LineChart';
import { SalesPieChart } from '@/components/atoms/PieChart';
import { ChartTypeSelector } from '@/components/molecules/ChartTypeSelector';
import { SalesFilterComponent } from '@/components/molecules/SalesFilter';
import { ChartType, ChartData, SalesFilter } from '@/types/sales';

interface SalesChartProps {
  data: ChartData[];
  title?: string;
}

export const SalesChart = ({ data, title = 'Sales Chart' }: SalesChartProps) => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [filter, setFilter] = useState<SalesFilter>({});

  const filteredData = useMemo(() => {
    return data.filter(item => {
      if (filter.minSales && item.value < filter.minSales) return false;
      if (filter.maxSales && item.value > filter.maxSales) return false;
      return true;
    });
  }, [data, filter]);

  const renderChart = () => {
    const chartProps = {
      data: filteredData,
      title,
    };

    switch (chartType) {
      case 'bar':
        return <SalesBarChart {...chartProps} />;
      case 'line':
        return <SalesLineChart {...chartProps} />;
      case 'pie':
        return <SalesPieChart {...chartProps} />;
      default:
        return <SalesBarChart {...chartProps} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">
          Showing {filteredData.length} data points
          {filter.minSales && ` (min: $${filter.minSales.toLocaleString()})`}
          {filter.maxSales && ` (max: $${filter.maxSales.toLocaleString()})`}
        </p>
      </div>

      <SalesFilterComponent onFilterChange={setFilter} />
      <ChartTypeSelector selectedType={chartType} onTypeChange={setChartType} />

      <div className="border-t border-gray-200 pt-6">
        {filteredData.length > 0 ? (
          renderChart()
        ) : (
          <div className="flex items-center justify-center h-96 text-gray-500">
            <div className="text-center">
              <p className="text-lg font-medium">No data matches the current filters</p>
              <p className="text-sm">Try adjusting your filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};