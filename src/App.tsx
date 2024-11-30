import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/dashboard/Header';
import StatCard from './components/dashboard/StatCard';
import RevenueChart from './components/dashboard/RevenueChart';
import TicketChart from './components/dashboard/TicketChart';
import ProCard from './components/dashboard/ProCard';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <Header />
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Product Revenue"
            value="€4,250"
            change={12.5}
            subtitle="+1,423 INCREASE"
          />
          <StatCard
            title="Total Deals"
            value="1,625"
            change={-8.3}
            subtitle="+125 THIS MONTH"
          />
          <StatCard
            title="Closed Tickets"
            value="3,452"
            change={4.7}
            subtitle="+123 TODAY"
          />
          <StatCard
            title="Average Reply"
            value="8.02"
            change={-2.1}
            subtitle="+1 LAST HOUR"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <RevenueChart />
          </div>
          <ProCard />
          <div className="col-span-2">
            <TicketChart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;