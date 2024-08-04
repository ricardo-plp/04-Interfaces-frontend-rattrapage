import React from "react";

const LeaveForm = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Demander un Congé</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-gray-700"
          >
            Date de Début
          </label>
          <input
            type="date"
            id="start-date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="end-date"
            className="block text-sm font-medium text-gray-700"
          >
            Date de Fin
          </label>
          <input
            type="date"
            id="end-date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="leave-type"
            className="block text-sm font-medium text-gray-700"
          >
            Type de Congé
          </label>
          <select
            id="leave-type"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option>Maladie</option>
            <option>Vacances</option>
            <option>Autre</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default LeaveForm;
