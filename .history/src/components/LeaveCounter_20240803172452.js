import React from "react";

const LeaveCounter = () => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Récapitulatif des Congés</h2>
      <p className="text-lg">
        Jours posés cette année : <span className="font-bold">10</span>
      </p>
      <p className="text-lg">
        Jours restants : <span className="font-bold">15</span>
      </p>
    </div>
  );
};

export default LeaveCounter;
