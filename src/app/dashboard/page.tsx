'use client';

import { useState } from 'react';
import { DashboardTemplate } from '@/components/templates/DashboardTemplate';
import { SalesChart } from '@/components/organisms/SalesChart';
import { Button } from '@/components/atoms/Button';
import { getTotalSalesByYear, getMonthlySalesForYear, getSalesByRegion } from '@/data/mockSalesData';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const yearlyData = getTotalSalesByYear();
  const regionData = getSalesByRegion();

  const getMonthlyData = () => {
    if (!selectedYear) return [];
    return getMonthlySalesForYear(selectedYear);
  };

  const getCurrentChartData = () => {
    if (selectedYear) {
      return getMonthlyData();
    }
    return yearlyData;
  };

  const getChartTitle = () => {
    if (selectedYear) {
      return `Monthly Sales for ${selectedYear}`;
    }
    return 'Yearly Sales Overview';
  };

  return (
    <DashboardTemplate>
      {/* Navigation Controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Period</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedYear === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedYear(null)}
          >
            All Years
          </Button>
          <Button
            variant={selectedYear === 2024 ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedYear(2024)}
          >
            2024
          </Button>
          <Button
            variant={selectedYear === 2023 ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedYear(2023)}
          >
            2023
          </Button>
          <Button
            variant={selectedYear === 2022 ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedYear(2022)}
          >
            2022
          </Button>
        </div>
      </div>

      {/* Main Sales Chart */}
      <SalesChart
        data={getCurrentChartData()}
        title={getChartTitle()}
      />

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Sales */}
        <SalesChart
          data={regionData}
          title="Sales by Region"
        />

        {/* Summary Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Sales (2022-2024)</span>
              <span className="font-semibold text-gray-900">
                ${yearlyData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Monthly Sales</span>
              <span className="font-semibold text-gray-900">
                ${(yearlyData.reduce((sum, item) => sum + item.value, 0) / (yearlyData.length * 12)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Best Performing Region</span>
              <span className="font-semibold text-gray-900">
                {regionData.reduce((prev, current) => (prev.value > current.value) ? prev : current).name}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Growth Rate (2022-2024)</span>
              <span className="font-semibold text-green-600">
                +{(((yearlyData.find(d => d.name === '2024')?.value || 0) / (yearlyData.find(d => d.name === '2022')?.value || 1)) * 100 - 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
}