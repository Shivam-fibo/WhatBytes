import React from 'react';
import { Progress } from "@/components/ui/progress"; // Assuming you have a Progress component

const Skill = () => {
  const progressData = [
    { label: "HTML Tools, Forms, History", value: 80, color: "bg-blue-500" },
    { label: "Tags & References in HTML", value: 60, color: "bg-orange-500" },
    { label: "Tables & References in HTML", value: 24, color: "bg-red-500" },
    { label: "Tables & CSS Basics", value: 96, color: "bg-green-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h2>
      {progressData.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
            <span className="text-sm font-medium text-gray-700">{item.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`${item.color} h-2.5 rounded-full`}
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
