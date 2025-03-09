import React, { useContext, useState ,useEffect} from "react"; // eslint-disable-next-line no-unused-vars
import {TenderAppContext} from"../context/TenderAppContext"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { parseBytes32String } from "ethers/lib/utils";
import Skeleton from 'react-loading-skeleton'

function ApplyTender({Submiission}) {

  let { id } = useParams();
  console.log("id",id)
  const {
    applyToTender,
    getTenderById,
    estimateGas,
    getGasPrice,
    getAccountBalance
    } = useContext(TenderAppContext);

  useEffect(() => {
    const fetchTender = async () => {
      try {
        const tenderData = await getTenderById(ethers.BigNumber.from(id));
        setTender(tenderData);
      } catch (error) {
        const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";
        alert(errorMessage);
      }
    };
  
    fetchTender();
  }, [id, getTenderById]);



  const [Title, setTitle] = useState("");
  const [From, setFrom] = useState("");
  const [Description, setDescription] = useState("");
  const [tender, setTender] = useState("");
  const [ContactEmail,sethandelContactEmail] = useState("");

  
  function handelFormValue(event) {
    setFrom(event.target.value);
    console.log(event.target.value);
  }
  function handelTitleValue(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }
  function handelDescriptionValue(event) {
    setDescription(event.target.value);
    console.log(event.target.value);
  }
  function handelContactEmail(event) {
    sethandelContactEmail(event.target.value);
    console.log(event.target.value);
  }
  

  async function onSubmit() {
    try {
      // Estimate gas cost using the appropriate function
      await applyToTender(
        ethers.BigNumber.from(id),
        From,
        Title,
        Description,
        ContactEmail,
        Submiission
      );
      console.log("Success");
    } catch (error) {
      const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";
      console.log(error);
      alert(errorMessage);
    }
  }

  return (

    <>
      {tender ? (
                <React.Fragment>
                <div
                  onSubmit={(e) => e.preventDefault()}
                  className="bg-white  text-sky-400 flex min-h-screen w-80% flex-col items-center pt-16  sm:justify-center sm:pt-0"
                >
                  <a href="#">
                    <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                      <div className="text-slate-950 ">
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
                          {" "}
                          Apply<span className="text-sky-400 px-3">Tender</span>{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="relative mt-12 pb-20 w-full max-w-4xl sm:mt-10 ">
                    <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                    <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                      <div className="text-sky-400 flex flex-col p-6 ">
                        <h3 className=" text-xl font-semibold leading-6 tracking-tighter">
                        Welcome !
          
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-black">
                          Description here
                        </p>
                      </div>
                      <div className="p-6 pt-0">
                        <form action="">
                          <div>
                            <div className="mt-4">
                              <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                                <div className="flex justify-between">
                                  <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                                    From
                                  </label>
                                </div>
                                <input
                                  value={From}
                                  onChange={handelFormValue}
                                  type="text"
                                  name="Title"
                                  placeholder="The Tendring Entity"
                                  className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                  style={{ backgroundColor: "#0000" }}
                                />
                              </div>
                            </div>
                          </div>
          
                          <div className="mt-4">
                            <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                              <div className="flex justify-between">
                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                                  Title
                                </label>
                              </div>
                              <input
                                value={Title}
                                onChange={handelTitleValue}
                                type="text"
                                name="Title"
                                placeholder="Enter Tinder Title"
                                className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                style={{ backgroundColor: "#0000" }}
                              />
                            </div>
                          </div>
          
                          <div className="mt-4">
                            <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                              <div className="flex justify-between">
                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                                Upon submission, supporting documents verifying your responses will be sent to the tender owner via email
                                </label>
                              </div>
                              <input
                                value={Description}
                                onChange={handelDescriptionValue}
                                type="text"
                                name="Title"
                                placeholder="Enter Tender Description"
                                className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                style={{ backgroundColor: "#0000" }}
                              />
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                              <div className="flex justify-between">
                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                                contact email                             
                                   </label>
                              </div>
                              <input
                                value={ContactEmail}
                                onChange={handelContactEmail}
                                type="email"
                                name="Title"
                                placeholder="Enter contact email"
                                className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                style={{ backgroundColor: "#0000" }}
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                              <div className="flex justify-between">
                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                                Submiission date                             
                                   </label>
                              </div>
                             <h3>{Submiission}</h3>
                            </div>
                          </div>


                          <div className="mt-4 pt-10 flex items-center justify-around  gap-x-2 animate-pulse">
                            <Link
                            // to="/MyOffers"
                              onClick={() => onSubmit()}
                              className="bg-ter  text-black inline-flex items-center justify-center rounded-3xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                            >
                              Proceed to Questions
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
          ) : (
            <Skeleton /> // Simple, single-line loading skeleton
          )}

    </>

    

  );
}

export default ApplyTender;