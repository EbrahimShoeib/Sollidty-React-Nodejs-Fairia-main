import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
const { ethereum } = window;

export const TenderAppContext = React.createContext();

 
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  return transactionsContract;
};

const TenderAppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const [tenders, setTenders] = useState([]);
  const [tendersByAuther, setTendersByAuther] = useState([]);
  const [tendersByApplicant, setTendersByApplicant] = useState([]);
  const [tender, setTender] = useState();

  const checkIfTheWalletIsConnected = async () => {
    
    if (!ethereum) return alert("Please install metamask");
    const accounts = await ethereum.request({
      method: "eth_accounts",
    });
  };

  const  connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

    } catch (error) {
      throw new Error("no etherum object");

    }
  };

  const getAllTenders = async ()=> {
      if (ethereum) {
          const tenderAppContract = getEthereumContract();

          return await tenderAppContract.getTenders()
          
      }
  }

  const searchTenders = async (search)=> {

    if (ethereum) {

        const tenderAppContract = getEthereumContract();

        return await tenderAppContract.searchTenders(search)

    }
}

  const createTender = async (from, title, description, bidBond, prequalificationDeadline, bidSubmissionDeadline, contractSignDeadline, estimatedProjectCost, keyword)=> {
    if (ethereum) {
      const tenderAppContract = getEthereumContract();

      await tenderAppContract.createTender(
        from,
        title,
        description,
        bidBond,
        prequalificationDeadline,
        bidSubmissionDeadline,
        contractSignDeadline,
        estimatedProjectCost,
        keyword,
      ).then((tenders) => {


        
      }).catch(async (error)=> {
        const errorData = new Error()
        const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";

        alert(errorMessage)
        throw errorData
      });
  }
  }

  const getTenderById = async (id)=> {

    if (ethereum) {

        const tenderAppContract = getEthereumContract();

        return await tenderAppContract.getTenderById(id)

    }
  }

  const applyToTender = async (tenderIndex,  form,  title,  description,ContactEmail,Submiission)=> {

    if (ethereum) {

        const tenderAppContract = getEthereumContract();

        return await tenderAppContract.applyToTender(
            tenderIndex,
            form,
            title,
            description,
            ContactEmail,
            Submiission
        )

    }
  }

  const estimateGas = async ( tenderIndex, form, title, description, value)=>  {
    const tenderAppContract = getEthereumContract();

    const gasEstimate = await tenderAppContract.estimateGas.applyToTender(
      tenderIndex,
      form,
      title,
      description,
      { value }
    );
    return gasEstimate;
  }

  const getTendersByAuthor = async ()=> {

    if (ethereum) {

        const tenderAppContract = getEthereumContract();

        return await tenderAppContract.getTendersByAuthor()

    }
  }

  

  const getTendersByApplicant = async ()=> {

    if (ethereum) {

        const tenderAppContract = getEthereumContract();

        return await tenderAppContract.getTendersByApplicant()

    }
  }

  const getApplicantsByTender = async (tenderId)=> {

    if (ethereum) {

        const tenderAppContract = getEthereumContract();

        return await tenderAppContract.getApplicantsByTender(tenderId)

    }
  }

  const getApplicantsByAuther = async ()=> {
    if (ethereum) {

      const tenderAppContract = getEthereumContract();

      return await tenderAppContract.getApplicantsByAuther()

    }
  }

  const getGasPrice = async () => {
    try {
      // Get the current gas price
      const provider = new ethers.providers.JsonRpcProvider();
      const gasPrice = await provider.getGasPrice();
      return gasPrice;
    } catch (error) {
      console.error("Error fetching gas price:", error);
      // Handle error appropriately
    }
  };
  
  const getAccountBalance = async () => {
    try {
      // Get the current account balance
      const provider = new ethers.providers.JsonRpcProvider();
      const currentAccount = await provider.getSigner().getAddress();
      const balance = await provider.getBalance(currentAccount);
      return balance;
    } catch (error) {
      console.error("Error fetching account balance:", error);
      // Handle error appropriately
    }
  };

  const completeApplication = async(tenderId, awnsers)=> {
    if (ethereum) {

      const tenderAppContract = getEthereumContract();

      return await tenderAppContract.completeApplication(tenderId, awnsers)

    }
  }

  useEffect( () => {
    checkIfTheWalletIsConnected();

  }, []);

  return (
    <TenderAppContext.Provider value={{
          connectWallet ,
          currentAccount ,
          createTender , 
          getAllTenders , 
          searchTenders , 
          tenders, 
          setTenders,
          getTenderById,
          applyToTender,
          getTendersByAuthor,
          getTendersByApplicant,
          getApplicantsByTender,
          getApplicantsByAuther,
          tendersByAuther,
          setTendersByAuther,

          tendersByApplicant,
          setTendersByApplicant,
          completeApplication,
          tender,
          setTender,
          estimateGas,
          getGasPrice,
          getAccountBalance
        }}
    >
      {children}
    </TenderAppContext.Provider>
  );
};

export default TenderAppProvider;
