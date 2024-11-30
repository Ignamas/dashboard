import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  subtitle: string;
}

const StatCard = ({ title, value, change, subtitle }: StatCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col">
      <h3 className="text-sm text-gray-500 font-medium mb-4">{title}</h3>
      <div className="flex items-baseline mb-1">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <div className={`ml-2 flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span className="ml-1">{Math.abs(change)}%</span>
        </div>
      </div>
      <span className="text-sm text-gray-400">{subtitle}</span>
    </div>
  );
};

export default StatCard;