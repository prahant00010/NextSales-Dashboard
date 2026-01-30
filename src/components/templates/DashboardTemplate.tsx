import { ReactNode } from 'react';

interface DashboardTemplateProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export const DashboardTemplate = ({
  children,
  title = 'Sales Dashboard',
  subtitle = 'Monitor your sales performance across different time periods'
}: DashboardTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};