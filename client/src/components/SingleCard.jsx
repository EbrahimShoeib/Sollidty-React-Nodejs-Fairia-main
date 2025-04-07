import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TenderAppContext } from "../context/TenderAppContext";
import { ethers } from "ethers";
import ApplicantCard from "./ApplicantsCard";

const SingleCard = ({ title, description, name, applicationFee, officialContactEmail, prequalificationDeadline }) => {
  const { id } = useParams();
  const tenderId = ethers.BigNumber.from(id);
  const [applicants, setApplicants] = useState([]);
  const { getApplicantsByTender } = useContext(TenderAppContext);

  useEffect(() => {
    getApplicantsByTender(tenderId)
        .then((value) => {
          setApplicants(value);
        })
        .catch((error) => {
          alert(error.reason || "An error occurred. Please try again later.");
        });
  }, []);

  return (
      <div className="bg-white h-auto">
        <div className="pt-6">
          <div style={{ fontSize: "60px" }}>
            <p className="text-slate-950 font-semibold flex justify-center bg-cyan-50 py-10">
              Tender <span className="text-sky-400 px-3">Details</span>
            </p>
          </div>
          <div className="py-6 w-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div>
                    <div className="h-64 md:h-80 rounded-lg mb-4">
                      <img
                          src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                          className="relative z-10 rounded-3xl"
                          alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 p-10">
                  <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-900 text-2xl md:text-3xl">
                    {title}
                  </h2>
                  <p className="text-gray-800 text-sm">
                    By <span className="text-indigo-600 hover:underline">{name}</span>
                  </p>

                  {/* New Info Section */}
                  <div className="mt-4">
                    <p className="text-gray-800"><strong>📅 Prequalification Deadline:</strong> {prequalificationDeadline}</p>
                    <p className="text-gray-800"><strong>📧 Contact Email:</strong> {officialContactEmail}</p>
                  </div>

                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-xl bg-white flex py-3 px-3">
                        <span className="text-indigo-800 mr-1 mt-1 text-2xl font-semibold">Ether</span>
                        <span className="font-bold text-black text-3xl">{applicationFee}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-800">{description}</p>

                  <div className="flex py-4">
                    <Link
                        to={`/apply-tender/${id}`}
                        className="lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 bg-yellow-300 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-primary rounded-full"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applicants Section */}
          <div>
            {applicants.length > 0 ? (
                applicants.map((applicant, index) => (
                    <ApplicantCard
                        key={index}
                        applicant={applicant.applicant}
                        form={applicant.form}
                        title={applicant.title}
                        description={applicant.description}
                        totalScore={parseInt(applicant.totalScore)}
                    />
                ))
            ) : (
                <div></div>
            )}
          </div>

          <div className="h-36"></div>
        </div>
      </div>
  );
};

export default SingleCard;
