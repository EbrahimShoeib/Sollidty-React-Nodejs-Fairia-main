import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TenderAppContext } from "../context/TenderAppContext";
import { ethers } from "ethers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SingleCard from "../components/SingleCard";

function MyTender() {
  const { getTenderById } = useContext(TenderAppContext);
  const [tender, setTender] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    getTenderById(ethers.BigNumber.from(id))
        .then((value) => {
          setTender(value);
        })
        .catch((error) => {
          alert(error.reason || "An error occurred. Please try again later.");
        });
  }, [id, getTenderById]);

  return (
      <div>
        {tender ? (
            <SingleCard
                title={tender.title}
                description={tender.description}
                name={tender.from}
                applicationFee={ethers.utils.formatUnits(tender.applicationFee, "wei")}
                officialContactEmail={tender.officialContactEmail}
                prequalificationDeadline={new Date(parseInt(tender.prequalificationDeadline) * 1000).toLocaleDateString()}
            />
        ) : (
            <Skeleton />
        )}
      </div>
  );
}

export default MyTender;
