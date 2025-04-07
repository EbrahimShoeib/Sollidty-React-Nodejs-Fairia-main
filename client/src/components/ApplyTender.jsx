import React, { useContext, useState, useEffect } from "react";
import { TenderAppContext } from "../context/TenderAppContext";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import Skeleton from "react-loading-skeleton";

function ApplyTender() {
  let { id } = useParams();
  const { applyToTender, getTenderById } = useContext(TenderAppContext);

  const [tender, setTender] = useState(null);
  const [form, setForm] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contactEmail, setContactEmail] = useState(""); // User input but not used in smart contract

  useEffect(() => {
    const fetchTender = async () => {
      try {
        const tenderData = await getTenderById(ethers.BigNumber.from(id));
        setTender(tenderData);
      } catch (error) {
        alert(error.reason || "An error occurred. Please try again later.");
      }
    };
    fetchTender();
  }, [id, getTenderById]);

  async function onSubmit() {
    try {
      await applyToTender(
          ethers.BigNumber.from(id),
          form,
          title,
          description
      );
      alert("Application submitted successfully!");
    } catch (error) {
      alert(error.reason || "An error occurred. Please try again later.");
    }
  }

  return (
      <>
        {tender ? (
            <React.Fragment>
              <div className="bg-white text-sky-400 flex min-h-screen w-80% flex-col items-center pt-16 sm:justify-center sm:pt-0">
                <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                  <div className="text-slate-950">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                      />
                    </svg>
                  </div>
                  <div style={{ fontSize: "80px" }}>
                    <p className="text-slate-950 font-semibold flex justify-center py-20 bg-cyan-50">
                      Apply <span className="text-sky-400 px-3">Tender</span>
                    </p>
                  </div>
                </div>

                <div className="relative mt-12 pb-20 w-full max-w-4xl sm:mt-10">
                  <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                  <div className="mx-5 border dark:border-white/50 border-white/20 shadow-lg rounded-lg">
                    <div className="text-sky-400 flex flex-col p-6">
                      <h3 className="text-xl font-semibold">Welcome!</h3>
                      <p className="mt-1.5 text-sm font-medium text-black">
                        Upon submission, supporting documents verifying your responses will be sent to the tender owner via email.
                      </p>
                    </div>

                    <div className="p-6 pt-0">
                      <form onSubmit={(e) => e.preventDefault()}>
                        {/* From Input */}
                        <div className="mt-4">
                          <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5">
                            <label className="text-xs font-medium text-muted-foreground">
                              From
                            </label>
                            <input
                                value={form}
                                onChange={(e) => setForm(e.target.value)}
                                type="text"
                                placeholder="Enter tendering entity"
                                className="w-full border-0 bg-transparent p-0 text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Contact Email Input (User Input Only) */}
                        <div className="mt-4">
                          <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5">
                            <label className="text-xs font-medium text-muted-foreground">
                              Contact Email
                            </label>
                            <input
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your contact email"
                                className="w-full border-0 bg-transparent p-0 text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Title Input */}
                        <div className="mt-4">
                          <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5">
                            <label className="text-xs font-medium text-muted-foreground">
                              Title
                            </label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Enter Application Title"
                                className="w-full border-0 bg-transparent p-0 text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Description Input */}
                        <div className="mt-4">
                          <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5">
                            <label className="text-xs font-medium text-muted-foreground">
                              Description
                            </label>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder="Enter Application Description"
                                className="w-full border-0 bg-transparent p-0 text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Application Fee */}
                        <div className="mt-4">
                          <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5">
                            <label className="text-xs font-medium text-muted-foreground">
                              Application Fee
                            </label>
                            <h3 className="text-lg font-semibold">
                              {ethers.utils.formatEther(tender.applicationFee)} ETH
                            </h3>
                          </div>
                        </div>

                        {/* Official Contact Email */}
                        <div className="mt-4">
                          <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5">
                            <label className="text-xs font-medium text-muted-foreground">
                              Official Contact Email
                            </label>
                            <h3 className="text-lg font-semibold">{tender.officialContactEmail}</h3>
                          </div>
                        </div>

                        {/* Submission Deadlines */}
                        <div className="mt-4">
                          <label className="text-xs font-medium text-muted-foreground">
                            Prequalification Deadline
                          </label>
                          <h3 className="text-lg font-semibold">
                            {new Date(parseInt(tender.prequalificationDeadline) * 1000).toLocaleDateString()}
                          </h3>
                        </div>

                        <div className="mt-4">
                          <label className="text-xs font-medium text-muted-foreground">
                            Bid Submission Deadline
                          </label>
                          <h3 className="text-lg font-semibold">
                            {new Date(parseInt(tender.bidSubmissionDeadline) * 1000).toLocaleDateString()}
                          </h3>
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                          <button
                              onClick={() => onSubmit()}
                              className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-yellow-400"
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
        ) : (
            <Skeleton />
        )}
      </>
  );
}

export default ApplyTender;
