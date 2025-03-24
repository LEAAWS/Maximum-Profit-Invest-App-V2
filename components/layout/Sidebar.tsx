'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Activity,
  Brain,
  BarChart2,
  Wallet,
  FileText,
  Database,
  Settings
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'System Health', href: '/system-health', icon: Activity },
  { name: 'AI Performance', href: '/ai-performance', icon: Brain },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Financials', href: '/financials', icon: Wallet },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Data Sources', href: '/data-sources', icon: Database },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-border">
      <div className="sticky top-0 p-container">
        <div className="mb-8">
          <h2 className="text-h3 text-primary-foreground">AI Investment Agent</h2>
          <p className="text-sm text-muted-foreground">Advanced Trading System</p>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center px-3 py-2 rounded-lg text-sm font-medium
                  transition-all hover:bg-background
                  ${isActive 
                    ? 'bg-background text-primary-foreground' 
                    : 'text-secondary-foreground hover:text-primary-foreground'
                  }
                `}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
} 