import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '25 Oct', value: 30 },
  { date: '', value: 35 },
  { date: '', value: 45 },
  { date: '', value: 40 },
  { date: '', value: 50 },
  { date: '', value: 55 },
  { date: '', value: 45 },
  { date: '', value: 40 },
  { date: '', value: 35 },
  { date: '31 May', value: 30 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm text-gray-500 font-medium">Total Revenue</h3>
        <button className="text-sm text-gray-400 hover:text-gray-600">Filter</button>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#2563EB" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;