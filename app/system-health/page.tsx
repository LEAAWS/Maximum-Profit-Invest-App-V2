import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { InfoTooltip } from '@/components/common/InfoTooltip';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Cpu, Server, HardDrive, Network, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Health | AI Investment Agent',
  description: 'Monitor system performance and health metrics',
};

const systemMetrics = [
  {
    id: 1,
    name: 'CPU Usage',
    value: 65,
    status: 'warning',
    trend: '+5%',
    icon: Cpu,
    description: 'CPU utilization across all cores',
  },
  {
    id: 2,
    name: 'Memory Usage',
    value: 85,
    status: 'error',
    trend: '+10%',
    icon: Server,
    description: 'RAM utilization',
  },
  {
    id: 3,
    name: 'Disk Usage',
    value: 45,
    status: 'success',
    trend: '-2%',
    icon: HardDrive,
    description: 'Storage space utilization',
  },
  {
    id: 4,
    name: 'Network I/O',
    value: 75,
    status: 'warning',
    trend: '+15%',
    icon: Network,
    description: 'Network bandwidth utilization',
  },
];

const services = [
  {
    id: 1,
    name: 'API Service',
    status: 'active',
    uptime: 99.9,
    responseTime: 120,
    lastIncident: '2 days ago',
  },
  {
    id: 2,
    name: 'Database',
    status: 'active',
    uptime: 99.95,
    responseTime: 45,
    lastIncident: '5 days ago',
  },
  {
    id: 3,
    name: 'Cache Service',
    status: 'warning',
    uptime: 99.8,
    responseTime: 180,
    lastIncident: '1 hour ago',
  },
  {
    id: 4,
    name: 'Background Worker',
    status: 'active',
    uptime: 99.9,
    responseTime: 150,
    lastIncident: '3 days ago',
  },
];

export default function SystemHealthPage() {
  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>System Health</h1>
        <p className="text-secondary-foreground">
          Monitor system performance and health metrics
        </p>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {systemMetrics.map((metric) => (
          <Card key={metric.id} className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <metric.icon className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">{metric.name}</h3>
              </div>
              <InfoTooltip content={metric.description} />
            </div>
            <div className="text-2xl font-bold">{metric.value}%</div>
            <div className={`text-sm mt-1 ${
              metric.status === 'success' ? 'text-green-500' :
              metric.status === 'warning' ? 'text-yellow-500' :
              'text-red-500'
            }`}>
              {metric.trend}
            </div>
            <Progress
              value={metric.value}
              className={`mt-4 ${
                metric.status === 'success' ? 'bg-green-100 dark:bg-green-900/20' :
                metric.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                'bg-red-100 dark:bg-red-900/20'
              }`}
            />
          </Card>
        ))}
      </div>

      {/* Service Status */}
      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Service Status</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead>Response Time</TableHead>
                <TableHead>Last Incident</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>
                    {service.status === 'active' && (
                      <Badge variant="success">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    )}
                    {service.status === 'warning' && (
                      <Badge variant="warning">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Warning
                      </Badge>
                    )}
                    {service.status === 'error' && (
                      <Badge variant="destructive">
                        <XCircle className="w-3 h-3 mr-1" />
                        Error
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{service.uptime}%</TableCell>
                  <TableCell>{service.responseTime}ms</TableCell>
                  <TableCell>{service.lastIncident}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* System Alerts */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">System Alerts</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <div>
                <h3 className="font-medium">High Memory Usage</h3>
                <p className="text-sm text-muted-foreground">Memory usage is at 85% and increasing</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Investigate</Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <div>
                <h3 className="font-medium">Degraded Cache Service</h3>
                <p className="text-sm text-muted-foreground">Cache service response time increased by 50%</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Optimize</Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 