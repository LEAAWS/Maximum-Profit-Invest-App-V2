import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoTooltip } from '@/components/common/InfoTooltip';
import { PortfolioAllocation } from '@/components/charts/PortfolioAllocation';
import { ROITrends } from '@/components/charts/ROITrends';
import { CostDistribution } from '@/components/charts/CostDistribution';
import { RiskMetrics } from '@/components/charts/RiskMetrics';
import { WinLossRatio } from '@/components/charts/WinLossRatio';
import { StrategyPerformance } from '@/components/charts/StrategyPerformance';
import { DataSourceImpact } from '@/components/charts/DataSourceImpact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Investment Analytics Dashboard | AI Investment Agent',
  description: 'Comprehensive analytics and performance metrics for AI-driven investment strategies',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI Investment Dashboard</h1>
        <InfoTooltip content="Monitor your AI investment portfolio performance and system health in real-time" />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <InfoTooltip content="Current market value of all investments" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234,567</div>
            <p className="text-xs text-muted-foreground">+12.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Performance</CardTitle>
            <InfoTooltip content="AI model's trading performance metrics" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+8.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Strategies</CardTitle>
            <InfoTooltip content="Number of currently active trading strategies" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <InfoTooltip content="Overall system performance and reliability" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Allocation */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Portfolio Allocation
              <InfoTooltip content="Distribution of investments across different asset classes" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <PortfolioAllocation />
            </div>
          </CardContent>
        </Card>

        {/* ROI Trends */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ROI Trends
              <InfoTooltip content="Historical return on investment performance" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ROITrends />
            </div>
          </CardContent>
        </Card>

        {/* Cost Distribution */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Cost Distribution
              <InfoTooltip content="Breakdown of operational costs and fees" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <CostDistribution />
            </div>
          </CardContent>
        </Card>

        {/* Risk Metrics */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Risk Metrics
              <InfoTooltip content="Key risk indicators and performance ratios" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <RiskMetrics />
            </div>
          </CardContent>
        </Card>

        {/* Win/Loss Ratio */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Win/Loss Ratio
              <InfoTooltip content="Distribution of winning vs losing trades" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <WinLossRatio />
            </div>
          </CardContent>
        </Card>

        {/* Strategy Performance */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Strategy Performance
              <InfoTooltip content="Performance comparison of different trading strategies" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <StrategyPerformance />
            </div>
          </CardContent>
        </Card>

        {/* Data Source Impact */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Data Source Impact
              <InfoTooltip content="Impact analysis of different data sources on trading decisions" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <DataSourceImpact />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 