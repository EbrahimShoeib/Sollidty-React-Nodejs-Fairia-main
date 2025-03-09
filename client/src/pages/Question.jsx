import { useState, useContext, useEffect } from "react";
import questions from "../data/Qustitions";
import { TenderAppContext } from "../context/TenderAppContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ethers } from "ethers";

const QuestionForm = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [selectedAnswerOne, setSelectedAnswerOne] = useState("");
  const [selectedAnswerTwo, setSelectedAnswerTwo] = useState("");

  const { completeApplication } = useContext(TenderAppContext);

  useEffect(() => {
    for (let i = 0; i <= 52; i++) {
      selectedAnswer[i] = "1";
    }
  }, []);

  const handleOptionChange = (questionId, value) => {
    selectedAnswer[questionId] = value;
    setSelectedAnswer(selectedAnswer);
  };

  let { id } = useParams();

  const handleSubmit = () => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("clicked");
    completeApplication(
      id,
      selectedAnswer.map((awnser, index) => {
        return ethers.BigNumber.from(awnser);
      })
    )
      .then((value) => {
        console.log("value  ", value);
      })
      .catch((error) => {
        const errorMessage = error.reason
          ? error.reason
          : "An error occurred. Please try again later.";
        alert(errorMessage);
      });

    console.log(selectedAnswer);
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (selectedAnswer[question.id] + question.value) {
        score++;
      }
    });
    return score;
  };

  return (
    <div>
      <div className="bg-white text-xl pt-28 ">
        <p className="flex justify-center text-7xl pb-20  text-sky-700">
        Questions
        </p>
        {questions.map((question) => (
          <div className="  pl-40" style={{ width: "100%" }} key={question.id}>
            <p className="text-black text-md">
              {" "}
              {question.id} - {question.question}
            </p>
            {question.options.map((option) => (
              <div
                className=" flex  mb-4 pl-6 pt-2 text-sky-800 "
                key={option.value}
              >
                <div>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    // checked={selectedAnswer?.[question.id] === option.value}
                    onChange={() =>
                      handleOptionChange(question.id, option.value)
                    }
                  />
                  <label className="pl-3">{option.label}</label>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div>
          <div className="flex pb-9 text-black ">
            <label className="  text-black pl-40 ">
              52- Could you provide the proposed price for this project?
            </label>
            <input
              value={selectedAnswerOne}
              // checked={selectedAnswer?.[question.id] === option.value}
              onChange={(event) =>
                setSelectedAnswerOne(
                  console.log(event.target.value),
                  event.target.value
                )
              }
              type="text"
              className="bg-white ml-5 border border-sky-700 rounded-md pl-3"
            />
          </div>

          <div className="flex pb-9 text-black ">
            <label className="  text-black pl-40 ">
              53- Could you provide the expected NPV for this project? 
            </label>
            <input
              value={selectedAnswerTwo}
              // checked={selectedAnswer?.[question.id] === option.value}
              onChange={(event) =>
                setSelectedAnswerTwo(
                  console.log(event.target.value),
                  event.target.value
                )
              }
              type="text"
              className="bg-white ml-5 border border-sky-700 rounded-md pl-3"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center pt-24 pb-60  ">
          <Link
            className=" flex justify-center items-center bg-sky-70 p-1 text-lg  w-40 h-10 rounded-xl  text-black hover:bg-sky-800 hover:text-black"
            onClick={handleSubmit}
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
