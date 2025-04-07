function ApplicantCard({
                           applicant,
                           form,
                           title,
                           description,
                           totalScore
                       }) {
    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {/* Card Header */}
            <div className="flex items-center bg-gradient-to-r from-sky-500 to-blue-600 p-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img
                        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                        alt="Applicant Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="ml-4">
                    <h2 className="text-white font-semibold text-lg">{form}</h2>
                    <p className="text-gray-200 text-sm">{applicant}</p>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
                <h3 className="text-gray-900 font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-100 p-4 flex justify-between items-center">
                <span className="text-gray-700 font-medium">Total Score:</span>
                <span className="text-xl font-bold text-blue-600">{totalScore}</span>
            </div>
        </div>
    );
}

export default ApplicantCard;
