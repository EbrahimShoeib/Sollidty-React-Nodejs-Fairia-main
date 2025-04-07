// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 px-6">
            {/* Header Section */}
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-sky-600">About Our Platform</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Empowering transparency, security, and efficiency in the tendering process through blockchain technology.
                </p>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-sky-500">Blockchain-Powered Security</h3>
                    <p className="text-gray-600 mt-2">
                        Our platform leverages smart contracts to ensure tamper-proof and transparent tendering.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-sky-500">Decentralized & Trustless</h3>
                    <p className="text-gray-600 mt-2">
                        Eliminating intermediaries, reducing corruption, and providing fair access for all bidders.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-sky-500">Real-Time Bidding & Applications</h3>
                    <p className="text-gray-600 mt-2">
                        Live tracking of tenders, bids, and applications with instant smart contract execution.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Join us in revolutionizing the tendering process.
                </h2>
                <p className="text-gray-600 text-center mt-2">
                    Experience a new era of transparency and efficiency with blockchain technology.
                </p>
            </div>
        </div>
    );
};

export default About;
