import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { InfoTooltip } from '@/components/common/InfoTooltip';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RefreshCw, AlertTriangle, CheckCircle2, XCircle, Settings, Clock, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Sources | AI Investment Agent',
  description: 'Monitor and manage data sources and feeds',
};

const dataSources = [
  {
    id: 1,
    name: 'Market Data API',
    type: 'Real-time',
    status: 'active',
    lastUpdate: '2 minutes ago',
    updateFreq: '1 min',
    latency: 150,
    completeness: 98,
    errorRate: 0.2,
    dataPoints: '1.2M',
    description: 'Real-time market data and price feeds',
  },
  {
    id: 2,
    name: 'News API',
    type: 'Stream',
    status: 'active',
    lastUpdate: '5 minutes ago',
    updateFreq: '5 min',
    latency: 300,
    completeness: 95,
    errorRate: 0.5,
    dataPoints: '850K',
    description: 'Financial news and sentiment analysis',
  },
  {
    id: 3,
    name: 'Economic Indicators',
    type: 'Batch',
    status: 'warning',
    lastUpdate: '15 minutes ago',
    updateFreq: '15 min',
    latency: 900,
    completeness: 92,
    errorRate: 2.1,
    dataPoints: '450K',
    description: 'Economic indicators and market sentiment',
  },
  {
    id: 4,
    name: 'Social Media Feed',
    type: 'Stream',
    status: 'error',
    lastUpdate: '1 hour ago',
    updateFreq: '1 min',
    latency: 3600,
    completeness: 85,
    errorRate: 5.5,
    dataPoints: '2.5M',
    description: 'Social media sentiment analysis',
  },
];

export default function DataSourcesPage() {
  const [autoRefresh, setAutoRefresh] = React.useState(false);

  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>Data Sources</h1>
        <p className="text-secondary-foreground">
          Monitor and manage data sources and feeds
        </p>
      </div>

      {/* Auto-refresh Toggle */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm">Auto-refresh</span>
          <Switch
            checked={autoRefresh}
            onCheckedChange={setAutoRefresh}
          />
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh All
        </Button>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">Active Sources</h3>
            </div>
            <InfoTooltip content="Number of currently active data sources" />
          </div>
          <div className="text-2xl font-bold">3/4</div>
          <div className="text-sm text-muted-foreground mt-1">75% operational</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">Update Frequency</h3>
            </div>
            <InfoTooltip content="Average time between data updates" />
          </div>
          <div className="text-2xl font-bold">5.5m</div>
          <div className="text-sm text-muted-foreground mt-1">Average interval</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">Data Quality</h3>
            </div>
            <InfoTooltip content="Overall data quality score based on completeness and error rate" />
          </div>
          <div className="text-2xl font-bold">92.5%</div>
          <div className="text-sm text-yellow-500 mt-1">-2.5% from target</div>
        </Card>
      </div>

      {/* Data Sources Table */}
      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Data Sources</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Update Freq</TableHead>
                <TableHead>Latency</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataSources.map((source) => (
                <TableRow key={source.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{source.name}</div>
                      <div className="text-sm text-muted-foreground">{source.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>{source.type}</TableCell>
                  <TableCell>
                    {source.status === 'active' && (
                      <Badge variant="success">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    )}
                    {source.status === 'warning' && (
                      <Badge variant="warning">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Warning
                      </Badge>
                    )}
                    {source.status === 'error' && (
                      <Badge variant="destructive">
                        <XCircle className="w-3 h-3 mr-1" />
                        Error
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{source.lastUpdate}</TableCell>
                  <TableCell>{source.updateFreq}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{source.latency}ms</span>
                      <InfoTooltip content="Data update latency" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Data Quality Monitor */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Data Quality Monitor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Data Completeness</h3>
                <InfoTooltip content="Percentage of expected data points that were successfully received" />
              </div>
              <span className="text-sm font-medium">92.5%</span>
            </div>
            <Progress value={92.5} className="bg-blue-100 dark:bg-blue-900/20" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Update Latency</h3>
                <InfoTooltip content="Average time taken for data updates" />
              </div>
              <span className="text-sm font-medium">375ms</span>
            </div>
            <Progress value={65} className="bg-yellow-100 dark:bg-yellow-900/20" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Error Rate</h3>
                <InfoTooltip content="Percentage of failed data updates or invalid data points" />
              </div>
              <span className="text-sm font-medium text-red-500">2.1%</span>
            </div>
            <Progress value={97.9} className="bg-red-100 dark:bg-red-900/20" />
          </div>
        </div>
      </Card>
    </div>
  );
} 