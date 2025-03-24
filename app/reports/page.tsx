import React from 'react';
import type { Metadata } from 'next';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { DateRangePicker } from '@/components/common/DateRangePicker';
import { InfoTooltip } from '@/components/common/InfoTooltip';
import { Download, FileText, BarChart2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reports | AI Investment Agent',
  description: 'Generate and download detailed performance reports',
};

const reportTypes = [
  {
    id: 'daily',
    title: 'Daily Summary',
    description: 'Daily performance metrics and trading activity',
    icon: FileText,
    tooltip: 'Includes daily P&L, trade history, and key metrics',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'weekly',
    title: 'Weekly Strategy Review',
    description: 'Strategy performance and market analysis',
    icon: BarChart2,
    tooltip: 'Comprehensive analysis of strategy performance and market conditions',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'monthly',
    title: 'Monthly Risk Report',
    description: 'Risk metrics and portfolio analysis',
    icon: AlertTriangle,
    tooltip: 'Detailed risk analysis and portfolio health metrics',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export default function ReportsPage() {
  const [date, setDate] = React.useState<DateRange | undefined>();

  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>Reports</h1>
        <p className="text-secondary-foreground">
          Generate and download detailed performance reports
        </p>
      </div>

      {/* Date Range Filter */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Select Date Range</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>
        <DateRangePicker date={date} onDateChange={setDate} />
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${report.bgColor}`}>
                  <Icon className={`w-6 h-6 ${report.color}`} />
                </div>
                <InfoTooltip content={report.tooltip} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
              
              {/* Preview Section */}
              <div className="border rounded-lg p-4 mb-4 bg-muted/50">
                <div className="h-32 flex items-center justify-center text-muted-foreground">
                  Preview will be shown here
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  CSV
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Report Generation Status */}
      <div className="card p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h3 className="font-medium">Daily Summary - March 15, 2024</h3>
              <p className="text-sm text-muted-foreground">Generated 2 hours ago</p>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h3 className="font-medium">Weekly Strategy Review - March 10-15, 2024</h3>
              <p className="text-sm text-muted-foreground">Generated 1 day ago</p>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 