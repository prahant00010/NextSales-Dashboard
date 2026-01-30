export interface SalesData {
  year: number;
  month: string;
  sales: number;
  region?: string;
  category?: string;
}

export interface ChartData {
  name: string;
  value: number;
  year?: number;
}

export type ChartType = 'bar' | 'line' | 'pie';

export interface SalesFilter {
  year?: number;
  minSales?: number;
  maxSales?: number;
  region?: string;
}