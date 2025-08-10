import React from 'react';

export default function ListView({ numbers, resetList, sortList, sortDesc, removeItem }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Numbers List</h3>
        <div className="space-x-2">
          <button
            onClick={resetList}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >Reset</button>
          <button
            onClick={sortList}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >Sort {sortDesc ? '↓' : '↑'}</button>
        </div>
      </div>
      <ul className="space-y-2">
        {numbers.map((num, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{num} <span className="text-gray-500 text-sm">#{index + 1}</span></span>
            <button
              onClick={() => removeItem(index)}
              className="text-red-600 hover:text-red-800"
            >×</button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-sm text-blue-800 bg-blue-100 px-4 py-2 rounded">
        Total numbers: {numbers.length}
      </div>
    </div>
  );
}
