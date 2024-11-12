import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <div className="text-3xl font-bold text-blue-600">150+</div>
        <div className="text-sm text-gray-600">Active Athletes</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-blue-600">10M+</div>
        <div className="text-sm text-gray-600">Social Reach</div>
      </div>
    </div>
  );
};

export default Stats;