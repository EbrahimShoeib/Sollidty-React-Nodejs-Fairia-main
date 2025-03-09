/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarV2 from "../components/NavBarV2";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { TenderAppContext } from "../context/TenderAppContext";
import { Link } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
function TenderPage(
  Form,
  Title,
  Description,
  BidBond,
  prequalificationDeadline,
  BidSubmiissionDeadlind,
  ContractSignDeadline,
  EstimatedProjectCost,
  KeyWord
) {
  const [tenders, setTenders] = useState("");

  const { getTendersByAuthor } = useContext(TenderAppContext);

  useEffect(() => {
    getTendersByAuthor()
      .then((value) => {
        console.log(value);

        setTenders(value);
      })
      .catch((error) => {
        const errorMessage = error.reason
          ? error.reason
          : "An error occurred. Please try again later.";
        console.log(error);
        // alert(errorMessage);
      });
  }, []);

  return (
    <>
      <div style={{ fontSize: "50px" }}>
        <p className="text-slate-950 font-semibold flex justify-center bg-white py-10">
          {" "}
          My<span className="text-sky-400 px-3">Tenders</span>{" "}
        </p>
      </div>

      {tenders.length === 0 ? (
        <NoOffers />
      ) : (
        <div className="offers-list">
          {tenders.map((tender, index) => (
            <div className="min-w-[70%] min-h-[10%] bg-white flex items-center p-1 lg:p-10 overflow-hidden relative rounded-2xl">
              <div className="w-full max-w-5xl  bg-secondary shadow-xl p-10 mx-auto text-sky-400 relative md:text-left rounded-2xl">
                <div className="md:flex items-center -mx-10">
                  <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                      <img
                        src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                        className="w-full relative z-10 rounded-xl"
                        alt=""
                      />
                      <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-10">
                    <div className="mb-10">
                      <h1 className="font-bold uppercase text-3xl text-black mb-5">
                        {tender.form}
                      </h1>

                      <h2 className="text-sky-300 text-4xl pb-3">
                        {tender.title}
                      </h2>

                      <p className="text-sm text-black ">
                        {tender.description}
                      </p>

                      <p>{tender.keyWord}</p>
                    </div>
                    <div className="flex ">
                      <Link
                        to={`/my-tender/${tender.id}`}
                        className=" flex justify-center items-center text-black bg-yellow-500 p-3 text-sm  w-40 h-10 rounded-xl "
                      >
                        {" "}
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          aria-hidden="true"
                          className=" w-10  pl-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="h-28 bg-primary"></div>
        </div>
      )}
    </>
  );
}

const NoOffers = () => {
  return (
    <div className="no-offers-container flex flex-col items-center justify-center min-h- py-10 bg-white">
      <FontAwesomeIcon
        icon={faBoxOpen}
        size="10x"
        color="#a0a0a0"
        className="mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-700">
        You have not created tenders yet
      </h2>
      <p className="text-gray-500 mt-2">
        Try creating new tenders and they will appear here.
      </p>
    </div>
  );
};

export default TenderPage;
