import React from "react";

const InfoCard = ({ title, value, children: icon }) => {
  return (
    <div className="bg-gray-700 p-5 rounded-lg">
      <div className="flex items-center">
        {icon}
        <div>
          <p className="mb-1 text-sm font-medium text-white dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold text-white dark:text-gray-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
