import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', created: 40, solved: 60 },
  { name: 'Feb', created: 30, solved: 40 },
  { name: 'Mar', created: 20, solved: 30 },
  { name: 'Apr', created: 50, solved: 70 },
  { name: 'May', created: 35, solved: 45 },
  { name: 'Jun', created: 25, solved: 35 },
];

const TicketChart = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm text-gray-500 font-medium">Avg. Ticket Created</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-200 rounded-sm mr-2"></div>
            <span className="text-sm text-gray-500">Created</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-sm mr-2"></div>
            <span className="text-sm text-gray-500">Solved</span>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <Bar dataKey="created" fill="#BFDBFE" radius={[4, 4, 0, 0]} />
            <Bar dataKey="solved" fill="#2563EB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TicketChart;