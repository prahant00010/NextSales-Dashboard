import { SalesData } from '@/types/sales';

// Mock sales data inspired by typical e-commerce/retail datasets from Kaggle
// Data shows monthly sales trends with seasonal patterns

export const salesData2024: SalesData[] = [
  { year: 2024, month: 'Jan', sales: 125000, region: 'North America', category: 'Electronics' },
  { year: 2024, month: 'Feb', sales: 118000, region: 'North America', category: 'Electronics' },
  { year: 2024, month: 'Mar', sales: 142000, region: 'Europe', category: 'Clothing' },
  { year: 2024, month: 'Apr', sales: 138000, region: 'Europe', category: 'Clothing' },
  { year: 2024, month: 'May', sales: 156000, region: 'Asia', category: 'Home & Garden' },
  { year: 2024, month: 'Jun', sales: 164000, region: 'Asia', category: 'Home & Garden' },
  { year: 2024, month: 'Jul', sales: 178000, region: 'North America', category: 'Sports' },
  { year: 2024, month: 'Aug', sales: 185000, region: 'North America', category: 'Sports' },
  { year: 2024, month: 'Sep', sales: 172000, region: 'Europe', category: 'Electronics' },
  { year: 2024, month: 'Oct', sales: 189000, region: 'Europe', category: 'Electronics' },
  { year: 2024, month: 'Nov', sales: 210000, region: 'Asia', category: 'Clothing' },
  { year: 2024, month: 'Dec', sales: 245000, region: 'Asia', category: 'Clothing' },
];

export const salesData2023: SalesData[] = [
  { year: 2023, month: 'Jan', sales: 98000, region: 'North America', category: 'Electronics' },
  { year: 2023, month: 'Feb', sales: 92000, region: 'North America', category: 'Electronics' },
  { year: 2023, month: 'Mar', sales: 115000, region: 'Europe', category: 'Clothing' },
  { year: 2023, month: 'Apr', sales: 108000, region: 'Europe', category: 'Clothing' },
  { year: 2023, month: 'May', sales: 128000, region: 'Asia', category: 'Home & Garden' },
  { year: 2023, month: 'Jun', sales: 135000, region: 'Asia', category: 'Home & Garden' },
  { year: 2023, month: 'Jul', sales: 148000, region: 'North America', category: 'Sports' },
  { year: 2023, month: 'Aug', sales: 152000, region: 'North America', category: 'Sports' },
  { year: 2023, month: 'Sep', sales: 142000, region: 'Europe', category: 'Electronics' },
  { year: 2023, month: 'Oct', sales: 158000, region: 'Europe', category: 'Electronics' },
  { year: 2023, month: 'Nov', sales: 175000, region: 'Asia', category: 'Clothing' },
  { year: 2023, month: 'Dec', sales: 198000, region: 'Asia', category: 'Clothing' },
];

export const salesData2022: SalesData[] = [
  { year: 2022, month: 'Jan', sales: 85000, region: 'North America', category: 'Electronics' },
  { year: 2022, month: 'Feb', sales: 78000, region: 'North America', category: 'Electronics' },
  { year: 2022, month: 'Mar', sales: 95000, region: 'Europe', category: 'Clothing' },
  { year: 2022, month: 'Apr', sales: 89000, region: 'Europe', category: 'Clothing' },
  { year: 2022, month: 'May', sales: 105000, region: 'Asia', category: 'Home & Garden' },
  { year: 2022, month: 'Jun', sales: 112000, region: 'Asia', category: 'Home & Garden' },
  { year: 2022, month: 'Jul', sales: 125000, region: 'North America', category: 'Sports' },
  { year: 2022, month: 'Aug', sales: 128000, region: 'North America', category: 'Sports' },
  { year: 2022, month: 'Sep', sales: 118000, region: 'Europe', category: 'Electronics' },
  { year: 2022, month: 'Oct', sales: 132000, region: 'Europe', category: 'Electronics' },
  { year: 2022, month: 'Nov', sales: 148000, region: 'Asia', category: 'Clothing' },
  { year: 2022, month: 'Dec', sales: 165000, region: 'Asia', category: 'Clothing' },
];

export const allSalesData = [...salesData2022, ...salesData2023, ...salesData2024];

// Helper function to get total sales by year
export const getTotalSalesByYear = () => {
  const yearlyTotals = allSalesData.reduce((acc, item) => {
    acc[item.year] = (acc[item.year] || 0) + item.sales;
    return acc;
  }, {} as Record<number, number>);

  return Object.entries(yearlyTotals).map(([year, sales]) => ({
    name: year,
    value: sales,
  }));
};

// Helper function to get monthly sales for a specific year
export const getMonthlySalesForYear = (year: number) => {
  return allSalesData
    .filter(item => item.year === year)
    .map(item => ({
      name: item.month,
      value: item.sales,
    }));
};

// Helper function to get sales by region
export const getSalesByRegion = () => {
  const regionTotals = allSalesData.reduce((acc, item) => {
    acc[item.region!] = (acc[item.region!] || 0) + item.sales;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(regionTotals).map(([region, sales]) => ({
    name: region,
    value: sales,
  }));
};