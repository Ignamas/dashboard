import React from 'react';
import { 
  LayoutDashboard, 
  Home, 
  Users, 
  Ticket, 
  LineChart, 
  FileText, 
  MessageSquare, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Customer', active: false },
  { icon: Ticket, label: 'Ticket', active: false },
];

const toolsItems = [
  { icon: LineChart, label: 'Insight', active: false },
  { icon: FileText, label: 'Reports', active: false },
];

const MenuItem = ({ Icon, label, active }: { Icon: any, label: string, active: boolean }) => (
  <div className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
    <Icon className="w-5 h-5 mr-3" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-64 h-screen border-r border-gray-200 bg-white py-6 flex flex-col">
      <div className="px-6 mb-8">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">M</span>
          </div>
          <span className="ml-3 font-semibold text-gray-900">Metalic</span>
        </div>
      </div>

      <div className="flex-1">
        <div className="px-3 mb-8">
          <div className="text-xs font-medium text-gray-400 mb-2 px-4">MENU</div>
          {menuItems.map((item) => (
            <MenuItem key={item.label} Icon={item.icon} label={item.label} active={item.active} />
          ))}
        </div>

        <div className="px-3 mb-8">
          <div className="text-xs font-medium text-gray-400 mb-2 px-4">TOOLS</div>
          {toolsItems.map((item) => (
            <MenuItem key={item.label} Icon={item.icon} label={item.label} active={item.active} />
          ))}
        </div>

        <div className="px-3">
          <div className="text-xs font-medium text-gray-400 mb-2 px-4">COMMUNICATION</div>
          <MenuItem Icon={MessageSquare} label="Mail" active={false} />
          <MenuItem Icon={MessageSquare} label="Marketing" active={false} />
        </div>
      </div>

      <div className="mt-auto px-3">
        <MenuItem Icon={Settings} label="Settings" active={false} />
        <MenuItem Icon={HelpCircle} label="Help & Support" active={false} />
      </div>
    </div>
  );
};

export default Sidebar;