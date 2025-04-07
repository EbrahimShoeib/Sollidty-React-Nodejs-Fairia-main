import { Link } from "react-router-dom";

const ExploreCard = ({ id, title, description }) => {
  return (
      <div className="max-w-md bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
        {/* Image Section */}
        <div className="h-48">
          <img
              src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
              className="h-full w-full object-cover"
              alt="Tender"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h5 className="text-2xl font-semibold text-sky-500 mb-2">{title}</h5>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>

          {/* Read More Button */}
          <div className="flex justify-end">
            <Link
                to={`/my-tender/${id}`}
                className="bg-yellow-500 text-black font-medium px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2"
            >
              Read More
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
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
      </div>
  );
};

export default ExploreCard;
