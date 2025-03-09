

function ApplicantCard({ 
  applicant,
  form,
  title,
  description,
  totalScore
}) {

   
  return (
    <>
      <div className="flex flex-wrap  max-w-2xl ml-44 mt-20 bg-secon p-5 bg-white rounded-2xl">
        <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full dark:bg-gray-200">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                      className=" relative z-10 rounded-3xl"
                      alt=""
                    />
        </div>
            <div
            style={{width:"100%"}}>
            <div className=" pl-10">
                <p className="pb-1 text-gray-600"> {applicant}</p>

                <h2 className="pb-1 text-white text-xl tex"> {form} </h2>
            </div>
           <div className=" pt-4 pl-10 ">
           <h1 className="pb-1 text-white"> {title} </h1>
             <p className=" text-gray-400"> {description} </p>
             <div className="text-sky-900 mr-1 text-sm font-semibold rounded-xl bg-white flex p-5 mt-8 ">
             Total Score <span className="text-white pl-3"> {totalScore} </span>
                      </div>
           </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantCard;
