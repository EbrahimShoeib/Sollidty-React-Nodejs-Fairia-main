// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import { TenderAppContext } from "../context/TenderAppContext";

function ExploreTender() {
  const { getAllTenders, tenders, setTenders } = useContext(TenderAppContext);

  useEffect(() => {
    getAllTenders()
        .then((tenders) => {
          setTenders(tenders);
        })
        .catch((error) => {
          alert(error.reason || "An error occurred. Please try again later.");
        });
  }, []);

  return (
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-sky-700 text-center mb-8">
          Explore <span className="text-sky-400">Tenders</span>
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <SearchBar />
        </div>

        {/* Tenders List */}
        {tenders.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">No tenders available at the moment.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tenders.map((tender, index) => (
                  <ExploreCard
                      key={index}
                      title={tender.title}
                      description={tender.description}
                      id={tender.id}
                      bidBond={tender.bidBond}
                  />
              ))}
            </div>
        )}
      </div>
  );
}

export default ExploreTender;
