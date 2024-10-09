"use client"
import React, { useState, useEffect } from 'react';

const UpdateScoresModal = ({ isOpen, onClose, onSave, rank, percentile, score }) => {
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newScore, setNewScore] = useState(score);

  useEffect(() => {
    setNewRank(rank);
    setNewPercentile(percentile);
    setNewScore(score);
  }, [rank, percentile, score]);

  const handleSave = () => {
    onSave(newRank, newPercentile, newScore);
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-auto shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-black">Update scores</h2>
  
        {/* Rank Input */}
      {/* Rank Input */}
<div className="flex items-center mb-6">
  <span className="flex items-center justify-center w-6 h-4 rounded-full bg-black text-white mr-4">
    1
  </span>
  <label className="block text-md font-semibold  text-black mr-40">Update your <b>Rank</b> </label>
  <input
    type="number"
    value={newRank}
    onChange={(e) => setNewRank(e.target.value)}
    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
  />
</div>

{/* Percentile Input */}
<div className="flex items-center mb-6">
  <span className="flex items-center justify-center w-6 h-4 rounded-full bg-black text-white mr-4">
    2
  </span> 
  <label className="block text-md font-semibold text-black mr-32">Update your <b>Percentile</b></label>
  <input
    type="number"
    value={newPercentile}
    onChange={(e) => setNewPercentile(e.target.value)}
    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
  />
</div>

{/* Current Score Input */}
<div className="flex items-center mb-6">
  <span className="flex items-center justify-center w-6 h-4 rounded-full bg-black text-white mr-4">
    3
  </span>
  <label className="block text-md font-semibold text-black mr-4">Update your <b>Current Score (out of 15)</b></label>
  <input
    type="number"
    value={newScore}
    onChange={(e) => setNewScore(e.target.value)}
    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
  />
</div>

  
        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 font-semibold rounded border"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-black text-white font-semibold rounded flex items-center"
          >
            Save <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default UpdateScoresModal;
