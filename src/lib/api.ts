import { SalesData, ChartData } from '@/types/sales';

// API Base URL - can be configured for different environments
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

/**
 * Generic API response interface
 */
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Sales API service class
 * Provides methods to fetch sales data from external APIs
 */
export class SalesApiService {
  /**
   * Fetch sales data from API
   * Currently returns mock data, but can be extended to call real APIs
   */
  static async getSalesData(year?: number): Promise<SalesData[]> {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`${API_BASE_URL}/sales${year ? `?year=${year}` : ''}`);
      // const result: ApiResponse<SalesData[]> = await response.json();

      // For now, simulate API delay and return mock data
      await new Promise(resolve => setTimeout(resolve, 500));

      // Import mock data dynamically to avoid circular dependencies
      const { salesData2024, salesData2023, salesData2022 } = await import('@/data/mockSalesData');

      if (year === 2024) return salesData2024;
      if (year === 2023) return salesData2023;
      if (year === 2022) return salesData2022;

      return [...salesData2022, ...salesData2023, ...salesData2024];
    } catch (error) {
      console.error('Error fetching sales data:', error);
      throw new Error('Failed to fetch sales data');
    }
  }

  /**
   * Fetch sales summary statistics
   */
  static async getSalesSummary(): Promise<{
    totalSales: number;
    averageMonthly: number;
    growthRate: number;
    topRegion: string;
  }> {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`${API_BASE_URL}/sales/summary`);
      // const result: ApiResponse<any> = await response.json();

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      const { getTotalSalesByYear, getSalesByRegion } = await import('@/data/mockSalesData');

      const yearlyData = getTotalSalesByYear();
      const regionData = getSalesByRegion();

      const totalSales = yearlyData.reduce((sum, item) => sum + item.value, 0);
      const averageMonthly = totalSales / (yearlyData.length * 12);
      const growth2024 = yearlyData.find(d => d.name === '2024')?.value || 0;
      const growth2022 = yearlyData.find(d => d.name === '2022')?.value || 1;
      const growthRate = ((growth2024 / growth2022) * 100) - 100;
      const topRegion = regionData.reduce((prev, current) =>
        (prev.value > current.value) ? prev : current
      ).name;

      return {
        totalSales,
        averageMonthly,
        growthRate,
        topRegion,
      };
    } catch (error) {
      console.error('Error fetching sales summary:', error);
      throw new Error('Failed to fetch sales summary');
    }
  }

  /**
   * Fetch sales data by region
   */
  static async getSalesByRegion(): Promise<ChartData[]> {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`${API_BASE_URL}/sales/by-region`);
      // const result: ApiResponse<ChartData[]> = await response.json();

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 400));

      const { getSalesByRegion } = await import('@/data/mockSalesData');
      return getSalesByRegion();
    } catch (error) {
      console.error('Error fetching sales by region:', error);
      throw new Error('Failed to fetch sales by region');
    }
  }

  /**
   * Example of how to integrate with a real API (Kaggle, etc.)
   * This method shows the structure for fetching from external data sources
   */
  static async fetchFromExternalAPI(apiUrl: string, apiKey?: string): Promise<any> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching from external API:', error);
      throw error;
    }
  }
}

/**
 * Utility function to transform external API data to our SalesData format
 * This can be used when integrating with real APIs
 */
export const transformApiDataToSalesData = (apiData: any[]): SalesData[] => {
  // Example transformation - adjust based on actual API response structure
  return apiData.map(item => ({
    year: item.year || new Date().getFullYear(),
    month: item.month || item.period || '',
    sales: item.sales || item.revenue || item.amount || 0,
    region: item.region || item.location || '',
    category: item.category || item.product_type || '',
  }));
};