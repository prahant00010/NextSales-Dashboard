import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-8">
            Sales Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A modern, responsive sales dashboard built with Next.js and atomic design principles.
            Visualize sales data from 2022-2024 with interactive charts and filtering capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                View Dashboard
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View on GitHub
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Multiple Chart Types</h3>
              <p className="text-gray-600">Switch between bar, line, and pie charts for different data visualizations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔍 Custom Filters</h3>
              <p className="text-gray-600">Filter sales data by custom thresholds to focus on specific ranges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📱 Responsive Design</h3>
              <p className="text-gray-600">Fully responsive design that works perfectly on all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}