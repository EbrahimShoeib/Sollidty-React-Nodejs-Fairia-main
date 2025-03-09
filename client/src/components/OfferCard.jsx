// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function OfferCard({ title, description , Id}) {
  const {id} = useParams ();
  console.log(id)
  return (
    <>
      <div className="bg-primar bg-white">
        <div className="">
          <div className="w-70% flex p-11 mb-11  bg-white rounded-2xl">
            <div className=" text-3xl  relative w-20  h-20 overflow-hidden bg-white rounded-full ">
              <img
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                className=" relative z-10 rounded-sm bg-sky-900 "
                alt="Person-logo"
              />
            </div>

            <div>
              <div className=" pl-20"></div>
              <div className=" ">
                <h1 className=" text-sky-900 pl-11 text-3xl"> {title}</h1>
                <p className=" text-gray-900 pt-4 pl-11"> {description} </p>
                <div className="pl-11 pt-6 flex justify-between text-sky-400">
                  <Link to={`/my-tender/${Id}`}>
                    See More
                  </Link>

                  <Link
                    to={`/Question/${Id}`}
                    className=" flex  justify-center items-center  text-black bg-yellow-500 p-3 text-sm  w-40 h-10 rounded-xl "
                  >
                    {" "}
                    Complete
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      aria-hidden="true"
                      className=" w-10  pl-3 "
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
      </div>
    </>
  );
}
export default OfferCard;
