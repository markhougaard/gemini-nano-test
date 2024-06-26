"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [timeSpent, setTimeSpent] = useState(null);

  useEffect(() => {
    const handlePrompt = async () => {
      try {
        if (input.trim() === '') return;
        const startTime = performance.now();
        const model = await window.ai.createTextSession();
        const result = await model.prompt(input);
        const endTime = performance.now();
        const timeSpent = endTime - startTime;
        setResponse(result);
        setTimeSpent(timeSpent.toFixed(2));
      } catch (err) {
        console.error('Error in handlePrompt:', err);
      }
    };

    handlePrompt();
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="fixed top-[4rem] flex items-center space-x-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt"
          className="p-2 w-72 text-black"
        />
        {timeSpent && (
          <div className="bg-green-600 text-white rounded-full px-4 py-2">
            {timeSpent} ms
          </div>
        )}
      </div>
      <div className="mt-[10rem] w-96 break-words text-center">
        {response && (
          <div>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}