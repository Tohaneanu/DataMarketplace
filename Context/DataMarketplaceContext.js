import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { toast } from "react-toastify";
const projectId = process.env.NEXT_PUBLIC_POJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;

const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

//INTERNAL  IMPORT
import {
  DataMarketplaceAddress,
  DataMarketplaceABI,
} from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    DataMarketplaceAddress,
    DataMarketplaceABI,
    signerOrProvider
  );

//---CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    toast.error("Something went wrong while connecting with contract " + error, { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  }
};

export const DataMarketplaceContext = React.createContext();

export const DataMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell Datas";

  //------USESTAT
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const router = useRouter();

  //---CHECK IF WALLET IS CONNECTED
  const checkIfWalletConnected = async () => {
    try {
      // Verificăm dacă MetaMask este instalat
      if (!window.ethereum)
        toast.error("Install MetaMask", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
      // Obținem lista de conturi disponibile în MetaMask
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      // Verificăm dacă există cel puțin un cont
      if (accounts.length) {
        // Setăm contul curent cu primul cont din lista
        setCurrentAccount(accounts[0]);
      } else {
        // Dacă nu există conturi, afișăm un mesaj de eroare
        toast.error("No Account Found", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
      }
      // Creăm un furnizor Web3Provider folosind MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Obținem soldul contului curent
      const getBalance = await provider.getBalance(accounts[0]);
      // Formatăm soldul într-un format mai ușor de citit
      const bal = ethers.utils.formatEther(getBalance);
      // Setăm balanța contului curent
      setAccountBalance(bal);
      // Returnăm true pentru a indica că portofelul este conectat
      return true;
    } catch (error) {
      // În caz de eroare, returnăm false
      return false;
    }
  };

  //---CONNECT WALLET FUNCTION
  const connectWallet = async () => {
    try {
      // Verificăm dacă MetaMask este instalat
      if (!window.ethereum)
        toast.error("Install MetaMask", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
      // Obținem lista de conturi disponibile în MetaMask prin solicitarea de conectare
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // Setăm contul curent cu primul cont din lista
      setCurrentAccount(accounts[0]);
      // Verificăm dacă se face conexiunea cu un smart contract
      if (connectingWithSmartContract())
        router.push("/searchPage");
    } catch (error) {
      // În caz de eroare, afișăm un mesaj de eroare
      toast.error("Error while connecting to wallet", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  // get listing price
  const getListingPrice = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const listingPrice = await contract.getListingPrice();
      let result = ethers.utils.formatEther(listingPrice);
      return result;
    } catch (error) {
      toast.error("Error while getting listing price", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  }

  //check if is owner
  const isOwnerOfMarket = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const isOwner = await contract.isOwner();
      return isOwner;
    } catch (error) {
      toast.error("Error while checking role", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  }

  const hasTokenFromOwner = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const isOwner = await contract.hasTokenFromOwner();
      return isOwner;
    } catch (error) {
      toast.error("Error while checking permissions!", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  }

  //change listing price
  const updateListingPrice = async (newPrice) => {
    try {
      const contract = await connectingWithSmartContract();
      const transaction = await contract.updateListingPrice(ethers.utils.parseEther(newPrice.toString()));
      await transaction.wait();
      return true;
    } catch (error) {
      // toast.error("Error while updating listing price", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
      return false;
    }
  }

  //get market balange
  const getMarketBalance = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const marketBalance = await contract.getContractBalance();
      let result = ethers.utils.formatEther(marketBalance);
      return result;
    } catch (error) {
      toast.error("Error while getting balance", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  }

  //withdro founds
  const withdraw = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const transaction = await contract.withdraw();
      await transaction.wait();
      return true
    } catch (error) {
      // toast.error("Error while withdrawing", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, })
      return false
    }
  }

  //---UPLOAD TO IPFS FUNCTION
  const uploadToIPFS = async (file, type) => {
    try {
      let thumbnailUrl = "";
      if (type == "Video") {
        const dataUrl = URL.createObjectURL(file); // Obțineți URL-ul obiectului File
        // Creăm un element video pentru a obține dimensiunile și a crea miniatura
        const video = document.createElement('video');
        video.src = dataUrl; // Setare sursă video la URL-ul obiectului File
        await video.play(); // Pornirea redării videoclipului pentru a asigura încărcarea completă
        video.pause();
        // Creăm un element canvas pentru a desena miniatura videoclipului
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // Desenăm videoul pe canvas
        // Convertim miniatura la formatul base64
        const dataURL = canvas.toDataURL('image/png'); // Conversia la URL de date pentru imagine de tip PNG
        const buffer = Buffer.from(dataURL.split(',')[1], 'base64');
        // Adăugăm miniatura la IPFS și obținem URL-ul acesteia
        const added = await client.add({ content: buffer });
        thumbnailUrl = `${subdomain}/ipfs/${added.path}`;
        URL.revokeObjectURL(dataUrl); // Revocarea URL-ului obiectului File pentru a evita memory leak
      }
      // Adăugăm fișierul la IPFS și obținem URL-ul acestuia
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      return { url, thumbnailUrl };
    } catch (error) {
      toast.error("Error Uploading to IPFS", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
    }
  };

  //---CREATEData FUNCTION
  const createData = async (name, price, image, thumbnail, description, dataType, router) => {
    if (!name || !description || !price || !image || !dataType)
      return toast.error("Data Is Missing!", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
    // Se creează obiectul de date în format JSON
    const data = JSON.stringify({ name, description, image, thumbnail });
    try {
      // Se adaugă obiectul de date la IPFS și se obține URL-ul acestuia
      const added = await client.add(data);
      const url = `${subdomain}/ipfs/${added.path}`;
      // Se creează vânzarea pentru obiectul de date
      await createSale(url, price, dataType);
      // Se redirecționează utilizatorul către pagina de căutare
      router.push("/searchPage");
    } catch (error) {
      toast.error("Error while creating Data!", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
    }
  };

  //--- createSale FUNCTION
  const createSale = async (url, formInputPrice, dataType, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, dataType, {
          value: listingPrice.toString(),
        })
        : await contract.resellToken(id, price, {
          value: listingPrice.toString(),
        });

      await transaction.wait();
    } catch (error) {
      toast.error("Error while creating sale. Please try again!", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  };

  //BuyBack
  const buyBack = async (id) => {
    const contract = await connectingWithSmartContract();
    await contract.buybackToken(id).wait(); // Executa tranzactia si obtine obiectul tranzactiei // Asteapta confirmarea tranzactiei pe blockchain
    router.push("/searchPage");
  }
  //--FETCHDataS FUNCTION

  const fetchDatas = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice, dataType }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description, thumbnail },
            } = await axios.get(tokenURI, {});
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              thumbnail,
              name,
              description,
              tokenURI,
              dataType,
            };
          }
        )
      );
      return items;
    } catch (error) {
      toast.error("Error while fetching DataS", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  //--FETCHING MY Data OR LISTED Datas
  const fetchMyDatasOrListedDatas = async (type) => {
    try {
      if (currentAccount) {
        const contract = await connectingWithSmartContract();

        const data =
          type == "fetchItemsListed"
            ? await contract.fetchItemsListed()
            : await contract.fetchMyDatas();

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice, dataType }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              const {
                data: { image, name, description, thumbnail },
              } = await axios.get(tokenURI);
              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                image,
                thumbnail,
                name,
                description,
                tokenURI,
                dataType
              };
            }
          )
        );
        return items;
      }
    } catch (error) {
      toast.error("Error while fetching listed Datas", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  };

  useEffect(() => {
    fetchMyDatasOrListedDatas();
  }, []);

  //---BUY Datas FUNCTION
  const buyData = async (Data) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(Data.price.toString(), "ether");

      const transaction = await contract.createMarketSale(Data.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      toast.error("Error While buying Data", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }
  };

  return (
    <DataMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        getListingPrice,
        updateListingPrice,
        isOwnerOfMarket,
        getMarketBalance,
        withdraw,
        uploadToIPFS,
        createData,
        fetchDatas,
        fetchMyDatasOrListedDatas,
        buyData,
        createSale,
        buyBack,
        currentAccount,
        titleData,
        hasTokenFromOwner,
        accountBalance,
      }}
    >
      {children}
    </DataMarketplaceContext.Provider>
  );
};
