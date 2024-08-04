// src/components/LeaveList.js
import React from 'react';

const LeaveList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Liste des Congés</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">État</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">01/01/2024</td>
            <td className="py-2 px-4 border-b">Maladie</td>
            <td className="py-2 px-4 border-b">Approuvé</td>
          </tr>
          {/* Ajoutez plus de lignes ici si nécessaire */}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveList;
