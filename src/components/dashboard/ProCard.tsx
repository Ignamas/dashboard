import React from 'react';

const ProCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-2">Pro Mode</h3>
      <p className="text-blue-100 mb-4">Upgrade now to unlock all the features you need</p>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
        Upgrade Now
      </button>
    </div>
  );
};

export default ProCard;