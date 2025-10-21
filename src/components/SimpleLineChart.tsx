"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface MortgageDataPoint {
  date: string; // Used for X-Axis (e.g., '2020 Q1', '2022', 'Today')
  principal: number; // Remaining Mortgage Principal 
  equity: number; // Home Equity 
}

// Defining Interface Props
interface SimpleLineChartProps {
  data: MortgageDataPoint[];
}

// Dummy data
const mortgageTimelineData: MortgageDataPoint[] = [
  {
    date: '2020-Q1', 
    principal: 700000,
    equity: 100000, 
  },
  {
    date: '2021-Q1',
    principal: 685000,
    equity: 115000,
  },
  {
    date: '2022-Q1',
    principal: 650000,
    equity: 150000, 
  },
  {
    date: '2023-Q1',
    principal: 615000,
    equity: 185000,
  },
  {
    date: '2024-Q1',
    principal: 590000,
    equity: 210000,
  },
  {
    date: 'Today', 
    principal: 580000, 
    equity: 220000,
  },
];

export default function SimpleLineChart( {data}: SimpleLineChartProps ) {
    // Function to format dollar amounts for tooltip and stuff
    const formatCurrency = (value: number) => {
        return `$${value.toLocaleString()}`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        
        <XAxis 
          dataKey="date" 
          dy={10}
          tickSize={10}
        />
        
        <YAxis 
          tickFormatter={formatCurrency}
          tickSize={10}
        />
        
        {/* Tooltip: The pop-up box when you hover */}
        <Tooltip 
          formatter={(value: number) => [formatCurrency(value), 'Value']}
        />
        
        <Legend 
          wrapperStyle={{ paddingTop: '10px' }} 
        />
        
        {/* Line 1: Remaining Principal (Red for Debt) */}
        <Line 
          type="monotone" 
          dataKey="principal" 
          name="Remaining Principal"
          stroke="#dc2626"
          strokeWidth={3}
          dot={false}
        />
        
        {/* Line 2: Home Equity (Green for Asset) */}
        <Line 
          type="monotone" 
          dataKey="equity" 
          name="Home Equity"
          stroke="#10b981"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
