import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  loading?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, loading = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-3 flex items-center gap-3 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 min-w-[140px]">
      <div className="bg-[#4A944D]/10 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-[#2B2B2B]/60 text-sm">{title}</p>
        {loading ? (
          <div className="h-5 w-12 bg-gray-200 animate-pulse rounded"></div>
        ) : (
          <p className="text-[#2B2B2B] font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
};