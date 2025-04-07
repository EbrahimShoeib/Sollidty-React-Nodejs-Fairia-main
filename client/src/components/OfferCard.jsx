// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, Link } from "react-router-dom";

function OfferCard({ title, description, Id }) {
  const { id } = useParams();
  console.log(id);

  return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mt-10">
        {/* Card Header */}
        <div className="flex items-center bg-gradient-to-r from-sky-500 to-blue-600 p-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
            <img
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="Offer Logo"
                className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-white font-semibold text-xl">{title}</h2>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-8">
          <p className="text-gray-700 text-lg">{description}</p>
        </div>

        {/* Card Footer */}
        <div className="bg-gray-100 p-6 flex justify-between items-center">
          <Link
              to={`/my-tender/${Id}`}
              className="text-blue-600 font-medium hover:underline text-lg"
          >
            See More
          </Link>
          <Link
              to={`/Question/${Id}`}
              className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-lg"
          >
            Complete
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6 ml-3"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
  );
}

export default OfferCard;
