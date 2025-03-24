import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { InfoTooltip } from '@/components/common/InfoTooltip';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DateRangePicker } from '@/components/common/DateRangePicker';
import { Download, TrendingUp, BarChart2, PieChart, LineChart } from 'lucide-react';
import { DateRange } from 'react-day-picker';

export const metadata: Metadata = {
  title: 'Analytics | AI Investment Agent',
  description: 'Detailed performance analytics and insights',
};

export default function AnalyticsPage() {
  const [date, setDate] = React.useState<DateRange | undefined>();

  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>Analytics</h1>
        <p className="text-secondary-foreground">
          Detailed performance analytics and insights
        </p>
      </div>

      {/* Date Range and Export */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Select Date Range</h2>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
        <DateRangePicker date={date} onDateChange={setDate} />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Return</h3>
            <InfoTooltip content="Total return including dividends and capital gains" />
          </div>
          <div className="text-2xl font-bold">24.5%</div>
          <div className="text-sm text-green-500 mt-1">+5.2% from last period</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Sharpe Ratio</h3>
            <InfoTooltip content="Risk-adjusted return measure" />
          </div>
          <div className="text-2xl font-bold">1.8</div>
          <div className="text-sm text-green-500 mt-1">+0.3 from last period</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Win Rate</h3>
            <InfoTooltip content="Percentage of profitable trades" />
          </div>
          <div className="text-2xl font-bold">65.8%</div>
          <div className="text-sm text-green-500 mt-1">+2.1% from last period</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Max Drawdown</h3>
            <InfoTooltip content="Maximum peak-to-trough decline" />
          </div>
          <div className="text-2xl font-bold">-8.2%</div>
          <div className="text-sm text-red-500 mt-1">+1.5% from last period</div>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          <TabsTrigger value="trades">Trade Analysis</TabsTrigger>
        </TabsList>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Performance metrics chart will be displayed here
            </div>
          </Card>
        </TabsContent>

        {/* Risk Analysis Tab */}
        <TabsContent value="risk" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Risk Metrics</h2>
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Risk metrics chart will be displayed here
            </div>
          </Card>
        </TabsContent>

        {/* Trade Analysis Tab */}
        <TabsContent value="trades" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Trade Analysis</h2>
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Trade analysis chart will be displayed here
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Market Correlation</h2>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Market correlation chart will be displayed here
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Sector Performance</h2>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Sector performance chart will be displayed here
          </div>
        </Card>
      </div>
    </div>
  );
} 