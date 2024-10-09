"use client"
import React, { useState } from "react";
import UpdateScoresModal from "./component/UpdateScoresModal";
import ComparisonGraph from "./component/ComparisonGraph";
import CircularChart from "./component/CircularChart ";
import Command from "./component/Command";
import Skill from "./component/Skill";
import Navbar from "./component/Navbar";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = (newRank, newPercentile, newScore) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 flex flex-col md:flex-row">
        {/* Left Sidebar: Command Component */}
        <div className="w-full md:w-2/6 p-4 rounded-lg border border-black">
          <Command />
        </div>

        {/* Middle Content: Skill Test Results and Graph */}
        <div className="flex flex-col w-full md:w-4/6 ml-0 md:ml-8">
          <h1 className="text-left mb-8">Skill Test</h1>

          {/* Information Section */}
          <div
            className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg border border-black"
            style={{ maxWidth: "600px" }}
          >
            <Image src="/html.png" alt="HTML Logo" width={64} height={64} />
            <div className="mt-4 md:mt-0 md:ml-4">
              <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
              <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
            <button
              onClick={handleOpenModal}
              className="bg-black text-white px-4 py-2 rounded-lg mt-4 md:mt-0"
            >
              Update
            </button>
          </div>

          {/* Quick Statistics Section */}
          <div
            className="my-6 p-6 rounded-lg border border-black"
            style={{ maxWidth: "600px", textAlign: "center" }}
          >
            <h1 className="text-left mb-4 text-lg font-semibold">Quick Statistics</h1>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold">{rank}</h3>
                <p className="text-sm text-gray-500">Your Rank</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{percentile}%</h3>
                <p className="text-sm text-gray-500">Percentile</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{score} / 15</h3>
                <p className="text-sm text-gray-500">Correct Answers</p>
              </div>
            </div>
          </div>

          {/* Graph Section */}
          <div className="w-full mb-6" style={{ maxWidth: "600px" }}>
            <ComparisonGraph
              rank={rank}
              percentile={percentile}
              correctAnswers={score}
              totalQuestions={15}
            />
          </div>

          {/* Update Modal */}
          <UpdateScoresModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSave}
            rank={rank}
            percentile={percentile}
            score={score}
          />
        </div>

        {/* Right Section: Skill Component */}
        <div className="w-full md:w-2/6 ml-0 md:ml-8 mt-6 md:mt-0">
          <Skill />
          <div className="w-full mt-6" style={{ maxWidth: "600px" }}>
            <div className="border border-gray-300 p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">Question Analysis</h2>
                <span className="text-gray-600">{score}/15</span> {/* Display score/total */}
              </div>
              <p className="text-gray-600 mt-2">
                You scored <span className="font-bold">{score} question</span> correct out of 15.
                {score === 15 ? (
                  <span> You have done very well!</span>
                ) : (
                  <span> However, it still needs some improvements.</span>
                )}
              </p>
              <div className="mt-4 flex justify-center">
                <div className="relative w-32 h-64">
                  <CircularChart correctAnswers={score} totalQuestions={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
