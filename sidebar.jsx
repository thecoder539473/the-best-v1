import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, LayoutDashboard, 
  UserRound, Settings, Bell, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <UserRound size={20} />, label: "Patients" },
    { icon: <Bell size={20} />, label: "Notifications" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <motion.aside
      animate={{ width: isExpanded ? 240 : 80 }}
      className="h-screen bg-slate-900 border-r border-slate-800 flex flex-col relative transition-colors"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-10 bg-indigo-600 rounded-full p-1 border border-slate-800 hover:bg-indigo-500 transition-colors z-50"
      >
        {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Logo Area */}
      <div className="p-6 mb-4 flex items-center gap-3">
        <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg shrink-0" />
        {isExpanded && <span className="font-bold text-white tracking-tight">MedOS</span>}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
              item.active ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="shrink-0">{item.icon}</div>
            {isExpanded && <span className="font-medium whitespace-nowrap">{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* Logout Footer */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-4 p-3 text-slate-500 hover:text-red-400 cursor-pointer transition-colors">
          <LogOut size={20} />
          {isExpanded && <span className="font-medium">Logout</span>}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
