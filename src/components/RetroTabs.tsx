import { useState } from 'react';

interface RetroTabsProps {
  tabs: { id: string; label: string; icon: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function RetroTabs({ tabs, activeTab, onTabChange }: RetroTabsProps) {
  return (
    <div className="flex flex-wrap gap-1 mb-8 bg-gray-900 p-1 rounded-lg border border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-6 py-3 font-mono text-sm rounded-md transition-all flex-1 min-w-0
            ${activeTab === tab.id 
              ? 'bg-gray-700 text-white border border-gray-600' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}