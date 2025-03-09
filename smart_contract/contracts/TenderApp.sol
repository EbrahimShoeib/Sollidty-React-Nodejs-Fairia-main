

pragma solidity 0.8.24;


contract TenderApp {

    event Announce();
    
    struct Applicants {
        // uint256 id; // Unique identifier for the tender
        uint256 tenderId; // Unique identifier for the tender
        address applicant;
        string form;
        string title;
        string description;
        bool isCompleted;
        uint256 totalScore;
    }

    struct Tender {
        uint256 id; // Unique identifier for the tender

        address auther;
        string from;
        string title;
        string description;
        uint256 bidBond;
        uint256 prequalificationDeadline;
        uint256 bidSubmissionDeadline;
        uint256 contractSignDeadline;
        uint256 estimatedProjectCost;
        string keyword;
        uint256 timestamp;
    }

    Tender[] tenders;
    Applicants[] applicants;

    uint256 private latestIndex;
    uint256 private latestApplicationsIndex;

    constructor() {
        latestIndex = 0;
        latestApplicationsIndex = 0;
    }

    function getTenderById(uint256 id) public view returns (Tender memory) {
        require(id < tenders.length, "Invalid tender ID");
        return tenders[id];
    }

    function stringContains(string memory str, string memory substr) internal pure returns (bool) {
        bytes memory strBytes = bytes(str);
        bytes memory substrBytes = bytes(substr);
        uint256 j = 0;
        for (uint256 i = 0; i < strBytes.length; i++) {
            if (strBytes[i] == substrBytes[j]) {
                j++;
                if (j == substrBytes.length) {
                    return true;
                }
            } else {
                j = 0;
            }
        }
        return false;
    }

    function getTenders() public view returns (Tender[10] memory){
        require(tenders.length > 0, "No tenders available");

        // Create an array to store the latest tenders
        Tender[10] memory latestTenders;

        // Start index for retrieving tenders
        uint256 startIndex = (tenders.length > 10) ? tenders.length - 10 : 0;

        // Retrieve the latest 10 tenders
        for (uint256 i = 0; i < 10; i++) {
            if (startIndex + i < tenders.length) {
                latestTenders[i] = tenders[startIndex + i];
            } else {
                break; // Break the loop if we reached the end of tenders array
            }
        }

        return latestTenders;
    }

    function searchTenders(string memory query) public view returns (Tender[] memory){
        require(bytes(query).length > 0, "Empty search query");

        // Create a dynamic array to store the matching tenders
        Tender[] memory matchingTenders = new Tender[](tenders.length);

        uint256 count = 0;

        // Iterate over the list of tenders and check if the query matches any field
        for (uint256 i = 0; i < tenders.length; i++) {
            Tender memory currentTender = tenders[i];
            if (stringContains(currentTender.title, query) || stringContains(currentTender.keyword, query)) {
                // Add the matching tender to the array
                matchingTenders[count] = currentTender;
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(matchingTenders, count)
        }

        return matchingTenders;
    }

    function createTender(
        string memory from,
        string memory title,
        string memory description,
        uint256 bidBond,
        uint256 prequalificationDeadline, 
        uint256 bidSubmissionDeadline, 
        uint256 contractSignDeadline, 
        uint256 estimatedProjectCost, 
        string memory keyword
    ) public {

        tenders.push(Tender(
            latestIndex,
            msg.sender,
            from,
            title,
            description,
            bidBond,
            prequalificationDeadline,
            bidSubmissionDeadline,
            contractSignDeadline,
            estimatedProjectCost,
            keyword,
            block.timestamp
        ));
        emit Announce();
        // Update the latest index
        latestIndex = latestIndex + 1;
    }

    function applyToTender(uint256 tenderIndex, string memory form, string memory title, string memory description) public {
        require(tenderIndex < tenders.length, "Invalid tender index");
       

        // Check if the user has already applied to this tender
        for (uint256 i = 0; i < applicants.length; i++) {
            if (applicants[i].tenderId == tenderIndex && applicants[i].applicant == msg.sender) {
                revert("You have already applied to this tender");
            }
        }

        applicants.push(Applicants(
            tenderIndex,
            msg.sender,
            form,
            title,
            description,
            false,
            0
        ));

        
    }

    function getApplicantsByTender(uint256 tenderId) public view returns (Applicants[] memory) {
        // Create a dynamic array to store the matching applicants
        Applicants[] memory matchingApplicants = new Applicants[](applicants.length);

        uint256 count = 0;

        // Iterate over the list of applicants and check if their tenderId matches the given tenderId
        for (uint256 i = 0; i < applicants.length; i++) {
            Applicants memory currentApplicant = applicants[i];
            if (currentApplicant.tenderId == tenderId) {
                // Add the matching applicant to the array
                matchingApplicants[count] = currentApplicant;
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(matchingApplicants, count)
        }

        return matchingApplicants;
    }

    function getTendersByAuthor() public view returns (Tender[] memory) {
        // Create a dynamic array to store the matching tenders
        Tender[] memory matchingTenders = new Tender[](tenders.length);

        uint256 count = 0;

        // Iterate over the list of tenders and check if the author matches
        for (uint256 i = 0; i < tenders.length; i++) {
            Tender memory currentTender = tenders[i];
            if (currentTender.auther == msg.sender) {
                // Add the matching tender to the array
                matchingTenders[count] = currentTender;
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(matchingTenders, count)
        }

        return matchingTenders;
    }

    function getTendersByApplicant() public view returns (Tender[] memory) {
        // Create a dynamic array to store the matching tenders
        Tender[] memory applicantTenders = new Tender[](applicants.length);

        uint256 count = 0;

        // Iterate over the list of applicants and check if the applicant matches
        for (uint256 i = 0; i < applicants.length; i++) {
            if (applicants[i].applicant == msg.sender) {
                // Add the corresponding tender to the array
                applicantTenders[count] = tenders[applicants[i].tenderId];
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(applicantTenders, count)
        }

        return applicantTenders;
    }

    // New function to get applicants by sender address
    function getApplicantsByAuther() public view returns (Applicants[] memory) {
        // Create a dynamic array to store the matching applicants
        Applicants[] memory senderApplicants = new Applicants[](applicants.length);

        uint256 count = 0;

        // Iterate over the list of applicants and check if the applicant matches msg.sender
        for (uint256 i = 0; i < applicants.length; i++) {
            if (applicants[i].applicant == msg.sender) {
                // Add the matching applicant to the array
                senderApplicants[count] = applicants[i];
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(senderApplicants, count)
        }

        return senderApplicants;
    }

    function completeApplication(uint256 tenderId, uint256[53] memory answers) public {
        uint256 totalScore = 0;
        bool applicantFound = false;

        for (uint256 i = 0; i < applicants.length; i++) {
            if (applicants[i].tenderId == tenderId && applicants[i].applicant == msg.sender) {
                require(!applicants[i].isCompleted, "You already completed the application");

                for (uint256 j = 0; j < answers.length; j++) {
                    uint256 weight = getWeight(j + 1);
                    totalScore += (answers[j] * weight) / 10;
                }

                applicants[i].isCompleted = true;
                applicants[i].totalScore = totalScore;
                applicantFound = true;
                break;
            }
        }

        require(applicantFound, "No application found for the given tender ID and sender");
    }

    function getWeight(uint256 answerIndex) internal pure returns (uint256) {
        if (answerIndex == 1 || answerIndex == 2 || answerIndex == 3 || answerIndex == 4 || answerIndex == 5 || answerIndex == 6 || answerIndex == 7 || answerIndex == 9 || answerIndex == 10 || answerIndex == 11 || answerIndex == 12 || answerIndex == 14 || answerIndex == 15 || answerIndex == 16 || answerIndex == 17 || answerIndex == 18 || answerIndex == 19 || answerIndex == 20 || answerIndex == 21 || answerIndex == 23 || answerIndex == 24 || answerIndex == 25 || answerIndex == 26 || answerIndex == 30 || answerIndex == 31 || answerIndex == 36 || answerIndex == 37 || answerIndex == 38 || answerIndex == 39 || answerIndex == 40 || answerIndex == 41 || answerIndex == 42) {
            return 10;
        } else if (answerIndex == 8) {
            return 20;
        } else if (answerIndex == 13 || answerIndex == 27 || answerIndex == 28 || answerIndex == 32 || answerIndex == 33 || answerIndex == 34 || answerIndex == 35) {
            return 5;
        } else if (answerIndex == 22 || answerIndex == 29) {
            return 1;
        } else if (answerIndex == 43 || answerIndex == 44 || answerIndex == 45 || answerIndex == 46 || answerIndex == 47 || answerIndex == 48 || answerIndex == 49 || answerIndex == 50 || answerIndex == 51 || answerIndex == 52 || answerIndex == 53) {
            return 10;
        } else {
            return 0;
        }
    }

    
}

