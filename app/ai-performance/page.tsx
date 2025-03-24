import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Performance | AI Investment Agent',
  description: 'Monitor AI model performance and training metrics',
};

export default function AIPerformancePage() {
  return (
    <div className="animate-slide-in">
      <div className="section-spacing">
        <h1>AI Performance</h1>
        <p className="text-secondary-foreground">
          Monitor AI model performance, accuracy, and training progress
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 section-spacing">
        <div className="card hover-lift">
          <h3 className="text-secondary-foreground">Model Accuracy</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-data">92.8%</span>
            <span className="ml-2 text-sm font-medium text-growth">+2.3%</span>
          </div>
        </div>

        <div className="card hover-lift">
          <h3 className="text-secondary-foreground">Inference Time</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-data">125ms</span>
            <span className="ml-2 text-sm font-medium text-success">Optimal</span>
          </div>
        </div>

        <div className="card hover-lift">
          <h3 className="text-secondary-foreground">Active Models</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-data">5</span>
            <span className="ml-2 text-sm font-medium text-info">Running</span>
          </div>
        </div>

        <div className="card hover-lift">
          <h3 className="text-secondary-foreground">Training Jobs</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-data">2</span>
            <span className="ml-2 text-sm font-medium text-warning">In Progress</span>
          </div>
        </div>
      </div>

      {/* Model Performance Table */}
      <div className="card section-spacing">
        <h2>Model Performance</h2>
        <div className="mt-4 table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Model Name</th>
                <th>Accuracy</th>
                <th>Latency</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price Prediction v2.1</td>
                <td>94.2%</td>
                <td>98ms</td>
                <td><span className="badge badge-success">Active</span></td>
              </tr>
              <tr>
                <td>Risk Assessment v1.8</td>
                <td>91.5%</td>
                <td>145ms</td>
                <td><span className="badge badge-success">Active</span></td>
              </tr>
              <tr>
                <td>Sentiment Analysis v3.0</td>
                <td>88.9%</td>
                <td>112ms</td>
                <td><span className="badge badge-warning">Training</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 