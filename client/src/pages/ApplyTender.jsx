import React, { useContext, useState } from "react"; // eslint-disable-next-line no-unused-vars
import {TenderAppContext} from"../context/TenderAppContext"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApplyTender from "../components/ApplyTender";
function ApplyTenderPage() {

  return (
    <React.Fragment>
      
      <ApplyTender />

    </React.Fragment>
  );
}

export default ApplyTenderPage;
