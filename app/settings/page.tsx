import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { InfoTooltip } from '@/components/common/InfoTooltip';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, Sun, Laptop, Key, Sliders, Palette, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Settings | AI Investment Agent',
  description: 'Configure application settings and preferences',
};

const riskLevels = [
  { value: 'conservative', label: 'Conservative' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'aggressive', label: 'Aggressive' },
];

const timezones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'America/New_York', label: 'Eastern Time' },
  { value: 'America/Chicago', label: 'Central Time' },
  { value: 'America/Denver', label: 'Mountain Time' },
  { value: 'America/Los_Angeles', label: 'Pacific Time' },
];

const chartThemes = [
  { value: 'default', label: 'Default Blue' },
  { value: 'green', label: 'Green Growth' },
  { value: 'purple', label: 'Purple Rain' },
  { value: 'rainbow', label: 'Rainbow' },
];

const tradingHours = [
  { value: '24-7', label: '24/7 Trading' },
  { value: 'market', label: 'Market Hours Only' },
  { value: 'custom', label: 'Custom Hours' },
];

export default function SettingsPage() {
  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>Settings</h1>
        <p className="text-secondary-foreground">
          Configure application settings and preferences
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">General Settings</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="app-name">Application Name</Label>
                  <InfoTooltip content="Name displayed in the browser title and header" />
                </div>
                <Input
                  id="app-name"
                  placeholder="AI Investment Agent"
                  className="max-w-md"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="timezone">Timezone</Label>
                  <InfoTooltip content="Your local timezone for accurate time-based operations" />
                </div>
                <Select defaultValue="UTC">
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="risk-level">Risk Level</Label>
                  <InfoTooltip content="Determines the aggressiveness of trading strategies" />
                </div>
                <Select defaultValue="moderate">
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    {riskLevels.map((risk) => (
                      <SelectItem key={risk.value} value={risk.value}>
                        {risk.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Trading Settings */}
        <TabsContent value="trading" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">Trading Settings</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="max-position">Max Position Size ($)</Label>
                  <InfoTooltip content="Maximum amount allocated to a single position" />
                </div>
                <Input
                  id="max-position"
                  type="number"
                  defaultValue={10000}
                  className="max-w-md"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="tolerance">Price Tolerance (%)</Label>
                  <InfoTooltip content="Maximum allowed slippage from target price" />
                </div>
                <Input
                  id="tolerance"
                  type="number"
                  defaultValue={0.5}
                  step={0.1}
                  className="max-w-md"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="trading-hours">Trading Hours</Label>
                  <InfoTooltip content="When trading operations are allowed" />
                </div>
                <Select defaultValue="market">
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Select trading hours" />
                  </SelectTrigger>
                  <SelectContent>
                    {tradingHours.map((hours) => (
                      <SelectItem key={hours.value} value={hours.value}>
                        {hours.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* API Settings */}
        <TabsContent value="api" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">API Configuration</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="api-key">API Key</Label>
                  <InfoTooltip content="Your unique API authentication key" />
                </div>
                <div className="flex gap-2">
                  <Input
                    id="api-key"
                    type="password"
                    defaultValue="••••••••••••••••"
                    className="flex-1 max-w-md"
                  />
                  <Button variant="outline">Regenerate</Button>
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <InfoTooltip content="Endpoint for receiving real-time updates" />
                </div>
                <Input
                  id="webhook-url"
                  placeholder="https://your-webhook-url.com"
                  className="max-w-md"
                />
              </div>

              <div className="flex items-center justify-between max-w-md">
                <div className="flex items-center gap-2">
                  <Label htmlFor="api-access">API Access</Label>
                  <InfoTooltip content="Enable/disable API access" />
                </div>
                <Switch id="api-access" defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Theme Settings */}
        <TabsContent value="theme" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">Theme Settings</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label>Theme Mode</Label>
                  <InfoTooltip content="Choose your preferred color scheme" />
                </div>
                <div className="flex items-center gap-4 max-w-md">
                  <div className="flex items-center gap-2">
                    <Switch id="light-mode" />
                    <Label htmlFor="light-mode" className="flex items-center gap-2">
                      <Sun className="w-4 h-4" />
                      Light
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="dark-mode" />
                    <Label htmlFor="dark-mode" className="flex items-center gap-2">
                      <Moon className="w-4 h-4" />
                      Dark
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="system-mode" defaultChecked />
                    <Label htmlFor="system-mode" className="flex items-center gap-2">
                      <Laptop className="w-4 h-4" />
                      System
                    </Label>
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="chart-theme">Chart Color Scheme</Label>
                  <InfoTooltip content="Color palette used in charts and graphs" />
                </div>
                <Select defaultValue="default">
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Select chart theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {chartThemes.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        {theme.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Changes Button */}
      <div className="fixed bottom-6 right-6">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 