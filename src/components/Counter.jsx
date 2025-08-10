import React from 'react';

export default function Counter({ count, setCount, addToList }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Counter & List App</h2>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-gray-200 px-3 py-1 rounded-full text-lg"
        >−</button>
        <span className="text-3xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-gray-200 px-3 py-1 rounded-full text-lg"
        >＋</button>
      </div>
      <button
        onClick={addToList}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >Add to List</button>
    </div>
  );
}
