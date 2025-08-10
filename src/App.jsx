import React, { useState } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';

export default function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [sortDesc, setSortDesc] = useState(true);

  const addToList = () => {
    setNumbers(prev => [...prev, count]);
  };

  const resetList = () => {
    setNumbers([]);
  };

  const sortList = () => {
    const sorted = [...numbers].sort((a, b) => sortDesc ? b - a : a - b);
    setNumbers(sorted);
    setSortDesc(!sortDesc);
  };

  const removeItem = (index) => {
    const newList = numbers.filter((_, i) => i !== index);
    setNumbers(newList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Counter count={count} setCount={setCount} addToList={addToList} />
        <ListView
          numbers={numbers}
          resetList={resetList}
          sortList={sortList}
          sortDesc={sortDesc}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}
