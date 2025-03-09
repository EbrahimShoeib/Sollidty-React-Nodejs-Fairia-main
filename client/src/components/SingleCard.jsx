// eslint-disable-next-line no-unused-vars
import {React, useContext,useEffect ,useState} from "react";
import {TenderAppContext} from"../context/TenderAppContext" ;
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApplicantCard from "./ApplicantsCard";
import { ethers } from "ethers";


const SingleCard = ({ title, description, name, ApplecationFee ,OfflialContactEmail }) => {
  const { id } = useParams();

  const tenderId = ethers.BigNumber.from(id);
  console.log('tenderId = ' + tenderId);


  const [applicants, setApplicants] = useState();
  const { getApplicantsByTender } = useContext(TenderAppContext);

  useEffect(()=> {
    getApplicantsByTender(tenderId)
    .then((value)=> {
      console.log("value = "+value)
      setApplicants(value)

    })
    .catch((error)=> {
      const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";

      alert(error.message) 
    })
  },[])




  return (
    <div 
    className="bg-white h-auto"
    >
      <div className=" pt-6">
        <div style={{ fontSize: "60px" }}>
          <p className="text-slate-950 font-semibold flex justify-center bg-cyan-50 py-10">
            {" "}
            Tender <span className="text-sky-400 px-3">Details</span>{" "}
          </p>
        </div>
        <div className="py-6 w-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 ">
            <div className="flex  md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div>
                  <div className="h-64 md:h-80 rounded-lg mb-4">
                    <img
                      src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                      className=" relative z-10 rounded-3xl"
                      alt=""
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <template />
                  </div>
                </div>
              </div>
              <div className="md:flex-1 p-10 ">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-900 text-2xl md:text-3xl">
                  {title}
                </h2>
                <p className="text-gray-800 text-sm">
                  By{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    {name}
                  </a>
                  <p>
{OfflialContactEmail}

                  </p>

                </p>
                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-xl bg-white flex py-3 px-3">
                      <span className="text-indigo-800 mr-1 mt-1 text-2xl font-semibold">
                        Ether
                      </span>
                      <span className="font-bold text-black text-3xl">
                        {"   " + ApplecationFee}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-800">{description}</p>
                <div className="flex py-4">
                  <div className="relative"></div>
                  <Link
                    to={`/apply-tender/${id}`}
                    type="button"
                    className=" lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 bg-yellow-300 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-primary rounded-full"
                    role="button"
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div >

        {applicants ? (
          applicants.map((tender, index) =>(
            <ApplicantCard 
              applicant = {tender.applicant}
              form = {tender.form}
              title = {tender.title}
              description = {tender.description}
              totalScore ={parseInt(tender.totalScore)}
            />

          ))

          

          ) : (
            <div > </div>
          )}
         
        </div>

<div className="h-36"></div>


      </div>
       </div>
  );
};

export default SingleCard;
