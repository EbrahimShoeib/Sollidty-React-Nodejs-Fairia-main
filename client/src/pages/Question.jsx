import { useState, useContext } from "react";
import questions from "../data/Qustitions";
import { TenderAppContext } from "../context/TenderAppContext";
import React from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";

const QuestionForm = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(Array(53).fill("1"));
  const [selectedAnswerOne, setSelectedAnswerOne] = useState(""); // ✅ Fix: Black text + Visible Input
  const [selectedAnswerTwo, setSelectedAnswerTwo] = useState(""); // ✅ Fix: Black text + Visible Input

  const { completeApplication } = useContext(TenderAppContext);
  let { id } = useParams();

  const handleOptionChange = (questionId, value) => {
    const updatedAnswers = [...selectedAnswer];
    updatedAnswers[questionId] = value;
    setSelectedAnswer(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    completeApplication(
        id,
        selectedAnswer.map((answer) => ethers.BigNumber.from(answer))
    )
        .then(() => alert("Application submitted successfully!"))
        .catch((error) => alert(error.reason || "An error occurred. Please try again later."));
  };

  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-sky-700 mb-8">Tender Questions</h1>

        {/* Questions Section */}
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
          {questions.map((question) => (
              <div key={question.id} className="mb-6">
                <p className="text-lg font-medium text-gray-800">{question.id}. {question.question}</p>
                <div className="mt-3 space-y-2">
                  {question.options.map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.value}
                            className="form-radio text-sky-500 focus:ring-sky-400"
                            onChange={() => handleOptionChange(question.id, option.value)}
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                  ))}
                </div>
              </div>
          ))}

          {/* Additional Questions with Fixed Input */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-800">
                52. Proposed price for this project:
              </label>
              <input
                  type="number"
                  value={selectedAnswerOne}
                  onChange={(event) => setSelectedAnswerOne(event.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition text-black" // ✅ Fix: Added text-black
                  placeholder="Enter proposed price"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-800">
                53. Expected NPV for this project:
              </label>
              <input
                  type="number"
                  value={selectedAnswerTwo}
                  onChange={(event) => setSelectedAnswerTwo(event.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition text-black" // ✅ Fix: Added text-black
                  placeholder="Enter expected NPV"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
                onClick={handleSubmit}
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
  );
};

export default QuestionForm;
