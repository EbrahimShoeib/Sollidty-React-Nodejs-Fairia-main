// Explore Card

import { Link } from "react-router-dom";
import ApplyTenderPage from "../pages/ApplyTender";
const Card = (props) => {
  // const id = parseInt(props.id._hex).toString()

  // console.log(id)

  // const path = `/MyTender/${id}`
  return (
    <div className="max-w-sm bg-white border-secondary border-solid border-4 rounded-lg mb-20">
      <a href="#">
        <img
          src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
          className="h-20px w-20px object-cover"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-sky-400 dark:text-black">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-50 dark:text-gray-800">
          {props.description}
        </p>
        <div className="flex p-1 pt-5 m-2 ">
          <Link
            to={`/my-tender/${props.id}`}
            className=" flex justify-center items-center bg-yellow-500 p-1 text-lg  w-40 h-10 rounded-xl  text-black"
          >
            {" "}
            Read more
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
  );
};

export default Card;
