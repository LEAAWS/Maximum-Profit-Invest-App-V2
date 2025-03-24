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
  title: 'Financials | AI Investment Agent',
  description: 'Financial performance and analysis',
};

export default function FinancialsPage() {
  const [date, setDate] = React.useState<DateRange | undefined>();

  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>Financials</h1>
        <p className="text-secondary-foreground">
          Financial performance and analysis
        </p>
      </div>

      {/* Date Range and Export */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Select Date Range</h2>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
        <DateRangePicker date={date} onDateChange={setDate} />
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
            <InfoTooltip content="Total revenue generated from trading activities" />
          </div>
          <div className="text-2xl font-bold">$1.2M</div>
          <div className="text-sm text-green-500 mt-1">+15% from last period</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Net Profit</h3>
            <InfoTooltip content="Total profit after expenses and fees" />
          </div>
          <div className="text-2xl font-bold">$450K</div>
          <div className="text-sm text-green-500 mt-1">+12% from last period</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Operating Costs</h3>
            <InfoTooltip content="Total operating and maintenance costs" />
          </div>
          <div className="text-2xl font-bold">$750K</div>
          <div className="text-sm text-red-500 mt-1">+8% from last period</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Profit Margin</h3>
            <InfoTooltip content="Net profit as a percentage of revenue" />
          </div>
          <div className="text-2xl font-bold">37.5%</div>
          <div className="text-sm text-green-500 mt-1">+2.5% from last period</div>
        </Card>
      </div>

      {/* Detailed Financial Analysis */}
      <Tabs defaultValue="income" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="income">Income Statement</TabsTrigger>
          <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
          <TabsTrigger value="cash">Cash Flow</TabsTrigger>
        </TabsList>

        {/* Income Statement Tab */}
        <TabsContent value="income" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Income Statement</h2>
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Income statement chart will be displayed here
            </div>
          </Card>
        </TabsContent>

        {/* Balance Sheet Tab */}
        <TabsContent value="balance" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Balance Sheet</h2>
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Balance sheet chart will be displayed here
            </div>
          </Card>
        </TabsContent>

        {/* Cash Flow Tab */}
        <TabsContent value="cash" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Cash Flow Statement</h2>
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Cash flow chart will be displayed here
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Financial Ratios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Key Financial Ratios</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Return on Investment (ROI)</h3>
                <InfoTooltip content="Return on investment as a percentage" />
              </div>
              <div className="text-lg font-semibold text-green-500">18.5%</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Debt-to-Equity Ratio</h3>
                <InfoTooltip content="Total debt divided by total equity" />
              </div>
              <div className="text-lg font-semibold">0.45</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Current Ratio</h3>
                <InfoTooltip content="Current assets divided by current liabilities" />
              </div>
              <div className="text-lg font-semibold">1.8</div>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Cost Analysis</h2>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Cost analysis chart will be displayed here
          </div>
        </Card>
      </div>
    </div>
  );
} 