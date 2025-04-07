/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { TenderAppContext } from "../context/TenderAppContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function TenderPage() {
    const [tenders, setTenders] = useState([]);
    const { getTendersByAuthor } = useContext(TenderAppContext);

    useEffect(() => {
        getTendersByAuthor()
            .then((value) => setTenders(value))
            .catch((error) => console.error("Error fetching tenders:", error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-sky-700 text-center mb-12">
                My <span className="text-sky-400">Tenders</span>
            </h1>

            {/* Tenders List */}
            {tenders.length === 0 ? (
                <NoOffers />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tenders.map((tender) => (
                        <div key={tender.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                                alt="Tender"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-black">{tender.title}</h2>
                                <p className="text-gray-600 text-sm mt-2">{tender.description}</p>

                                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
                    {tender.keyWord}
                  </span>
                                    <Link
                                        to={`/my-tender/${tender.id}`}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition"
                                    >
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const NoOffers = () => (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center bg-white p-10 rounded-lg shadow-lg">
        <FontAwesomeIcon icon={faBoxOpen} size="6x" className="text-gray-300 mb-6" />
        <h2 className="text-2xl font-semibold text-gray-700">No tenders created yet</h2>
        <p className="text-gray-500 mt-2">Start by creating new tenders and they will appear here.</p>
    </div>
);

export default TenderPage;
