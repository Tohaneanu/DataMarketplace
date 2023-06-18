"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 2149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ DataMarketplaceProvider),
/* harmony export */   "Z": () => (/* binding */ DataMarketplaceContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7000);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
([ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const projectId = "2NJbLjP4UxrzGdRA6UniA0JuyKc";
const projectSecretKey = "a60275c94e3556a13e742dbbdb7dff41";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString("base64")}`;
const subdomain = "https://data-marketplace.infura-ipfs.io";
const client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__.create)({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth
    }
});
//INTERNAL  IMPORT

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider)=>new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_8__/* .DataMarketplaceAddress */ .z, _constants__WEBPACK_IMPORTED_MODULE_8__/* .DataMarketplaceABI */ .s, signerOrProvider);
//---CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async ()=>{
    try {
        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();
        const connection = await web3Modal.connect();
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Something went wrong while connecting with contract " + error, {
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }
};
const DataMarketplaceContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const DataMarketplaceProvider = ({ children  })=>{
    const titleData = "Discover, collect, and sell Datas";
    //------USESTAT
    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: accountBalance , 1: setAccountBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    //---CHECK IF WALLET IS CONNECTD
    const checkIfWalletConnected = async ()=>{
        try {
            if (!window.ethereum) react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Install MetaMask", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("No Account Found", {
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
            const getBalance = await provider.getBalance(accounts[0]);
            const bal = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(getBalance);
            setAccountBalance(bal);
            return true;
        } catch (error) {
            return false;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkIfWalletConnected();
    }, []);
    //---CONNET WALLET FUNCTION
    const connectWallet = async ()=>{
        try {
            if (!window.ethereum) react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Install MetaMask", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setCurrentAccount(accounts[0]);
            if (connectingWithSmartContract()) router.push("/searchPage");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while connecting to wallet", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    // get listing price
    const getListingPrice = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            let result = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(listingPrice);
            return result;
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while getting listing price", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    //check if is owner
    const isOwnerOfMarket = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const isOwner = await contract.isOwner();
            return isOwner;
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while checking role", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    const hasTokenFromOwner = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const isOwner = await contract.hasTokenFromOwner();
            return isOwner;
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while checking permissions!", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    //change listing price
    const updateListingPrice = async (newPrice)=>{
        try {
            const contract = await connectingWithSmartContract();
            const transaction = await contract.updateListingPrice(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseEther(newPrice.toString()));
            await transaction.wait();
            return true;
        } catch (error) {
            // toast.error("Error while updating listing price", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            return false;
        }
    };
    //get market balange
    const getMarketBalance = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const marketBalance = await contract.getContractBalance();
            let result = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(marketBalance);
            return result;
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while getting balance", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    //withdro founds
    const withdraw = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const transaction = await contract.withdraw();
            await transaction.wait();
            return true;
        } catch (error) {
            // toast.error("Error while withdrawing", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, })
            return false;
        }
    };
    //---UPLOAD TO IPFS FUNCTION
    const uploadToIPFS = async (file, type)=>{
        try {
            let thumbnailUrl = "";
            if (type == "Video") {
                const dataUrl = URL.createObjectURL(file); // Obțineți URL-ul obiectului File
                const video = document.createElement("video");
                video.src = dataUrl; // Setare sursă video la URL-ul obiectului File
                await video.play(); // Pornirea redării videoclipului pentru a asigura încărcarea completă
                video.pause();
                const canvas = document.createElement("canvas");
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // Desenăm videoul pe canvas
                const dataURL = canvas.toDataURL("image/png"); // Conversia la URL de date pentru imagine de tip JPEG
                const buffer = Buffer.from(dataURL.split(",")[1], "base64");
                const added = await client.add({
                    content: buffer
                });
                thumbnailUrl = `${subdomain}/ipfs/${added.path}`;
                URL.revokeObjectURL(dataUrl); // Revocarea URL-ului obiectului File pentru a evita memory leak
            }
            const added1 = await client.add({
                content: file
            });
            const url = `${subdomain}/ipfs/${added1.path}`;
            return {
                url,
                thumbnailUrl
            };
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error Uploading to IPFS", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    //---CREATEData FUNCTION
    const createData = async (name, price, image, thumbnail, description, dataType, router)=>{
        if (!name || !description || !price || !image || !dataType) return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Data Is Missing!", {
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
        const data = JSON.stringify({
            name,
            description,
            image,
            thumbnail
        });
        try {
            const added = await client.add(data);
            const url = `${subdomain}/ipfs/${added.path}`;
            await createSale(url, price, dataType);
            router.push("/searchPage");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while creating Data!", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    //--- createSale FUNCTION
    const createSale = async (url, formInputPrice, dataType, isReselling, id)=>{
        try {
            const price = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            const transaction = !isReselling ? await contract.createToken(url, price, dataType, {
                value: listingPrice.toString()
            }) : await contract.resellToken(id, price, {
                value: listingPrice.toString()
            });
            await transaction.wait();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while creating sale. Please try again!", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    //BuyBack
    const buyBack = async (id)=>{
        const contract = await connectingWithSmartContract();
        await contract.buybackToken(id).wait(); // Executa tranzactia si obtine obiectul tranzactiei // Asteapta confirmarea tranzactiei pe blockchain
        router.push("/searchPage");
    };
    //--FETCHDataS FUNCTION
    const fetchDatas = async ()=>{
        try {
            const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();
            const connection = await web3Modal.connect();
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(connection);
            const contract = fetchContract(provider);
            const data = await contract.fetchMarketItems();
            const items = await Promise.all(data.map(async ({ tokenId , seller , owner , price: unformattedPrice , dataType  })=>{
                const tokenURI = await contract.tokenURI(tokenId);
                const { data: { image , name , description , thumbnail  } ,  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(tokenURI, {});
                const price = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatUnits(unformattedPrice.toString(), "ether");
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
            }));
            return items;
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while fetching DataS", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchDatas();
    }, []);
    //--FETCHING MY Data OR LISTED Datas
    const fetchMyDatasOrListedDatas = async (type)=>{
        try {
            if (currentAccount) {
                const contract = await connectingWithSmartContract();
                const data = type == "fetchItemsListed" ? await contract.fetchItemsListed() : await contract.fetchMyDatas();
                const items = await Promise.all(data.map(async ({ tokenId , seller , owner , price: unformattedPrice , dataType  })=>{
                    const tokenURI = await contract.tokenURI(tokenId);
                    const { data: { image , name , description , thumbnail  } ,  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(tokenURI);
                    const price = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatUnits(unformattedPrice.toString(), "ether");
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
                }));
                return items;
            }
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error while fetching listed Datas", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchMyDatasOrListedDatas();
    }, []);
    //---BUY Datas FUNCTION
    const buyData = async (Data)=>{
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseUnits(Data.price.toString(), "ether");
            const transaction = await contract.createMarketSale(Data.tokenId, {
                value: price
            });
            await transaction.wait();
            router.push("/author");
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Error While buying Data", {
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataMarketplaceContext.Provider, {
        value: {
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
            accountBalance
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ DataMarketplaceABI),
  "z": () => (/* binding */ DataMarketplaceAddress)
});

;// CONCATENATED MODULE: ./Context/DataMarketplace.json
const DataMarketplace_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"},{"indexed":false,"internalType":"string","name":"dataType","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"buybackToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"dataType","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchItemsListed","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"address","name":"creator","type":"address"}],"internalType":"struct DataMarketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"address","name":"creator","type":"address"}],"internalType":"struct DataMarketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyDatas","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"address","name":"creator","type":"address"}],"internalType":"struct DataMarketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasTokenFromOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"resellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"updateListingPrice","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./Context/constants.js
///0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x5FbDB2315678afecb367f032d93F642f64180aa3

//Data MARKETPLACE
const DataMarketplaceAddress = "0xeb8a77b1E58b3CB86Cbb30f9B927a7329fab56c8";
const DataMarketplaceABI = DataMarketplace_namespaceObject.Mt; // 0x192141cbDE3cf87dD0B29D61e7BB4e33403489c8


/***/ }),

/***/ 5713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ img)
});

;// CONCATENATED MODULE: ./img/creatorbackground-2.png
/* harmony default export */ const creatorbackground_2 = ({"src":"/_next/static/media/creatorbackground-2.0030fa59.png","height":1136,"width":1702,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ADBdbCZLWxxVa2mer1+RolmSpC9ebyY6RQBLgpRflahgj6FgjJ2BssBvoLFkkaMsYncARXmLUXuNbKGybp+tgKy4WYaYVYOWdae2ADx4jEV0hzd5kGunuGCQoHuotUR5j1GEmAAmVGIxc4czZnpQhJQ0aHtAYW5EfZAEQ1poNzZ7RkpwVQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/user-1.png
/* harmony default export */ const user_1 = ({"src":"/_next/static/media/user-1.ae34b0fa.png","height":216,"width":216,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX///////7+/////v7+/v79/f79/f363sf63cbf18vH3efH3ebH3Obf0cDH1t3ty6/ty63xwZPxwJLVuJzWtpd1t852tsx4tct2tcx4qLm7iUG7fgAAk7oAkbEAjLMAfpovYnEvYW8Ab5LxRxQZAAAAQ0lEQVR42g2IRxKAMBDDTDB96YROKP9/JPbB0ggkND1h3psAC88bKtX5Gqd7lSxnUX+bpNzb7miAGPnQZ4jAxJEu5Q9l/ALFlgjxBQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/service-1.png
/* harmony default export */ const service_1 = ({"src":"/_next/static/media/service-1.ea966650.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42mPAB468vMPI8N+AgfHDk+UyD24dS3xw+WDe/UsH8u7cOJT86v89LrCq/y8Y2I+e3X51ybX7/1feuP9/yeXb/+dfuvN/2oX7S+BG9Z5/cGjCltP/mw9c/DFj/ZEf1bsu/W87efMEXEHHyTsXmzac+J+66fif0oW7/tQt3/e/cs+Z83AFTQevJRfsujR97fL9v1ct2fM7efGB6cnLDieDJdccucoIU/h224GJ77YdnAjjT1iyByLXeuIOc9/ey6xwE1ceZk1bd5yZgYGBAQCk42826cOvVwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/service-2.png
/* harmony default export */ const service_2 = ({"src":"/_next/static/media/service-2.0193bdad.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgbnXXjEy4AJ9+y8wgenDV9VmHr96aPKRy9ebd55pAonNu/aMmaHn8FUWEKfj6G3/6aeu/594+OL/5j0XtoPEljz7zsyw/fw+sIKNZ/aW7z6/7f+E/bv/x8zeOAsk1rl5LwvD7mOLIAqOrpq0bUfL/8SJXf9zSnp2M4DBXkaG4lXbWUHMnJXbW7Imz/1fVFLzf2Zt9ev/1xjYwGpipm8COzJy2mbj0M6li5LzqlYWpEe7gsQyU/OYGMCMrZcxvNlVXg4WAwBky1nGI0+r5wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/service-3.png
/* harmony default export */ const service_3 = ({"src":"/_next/static/media/service-3.08f7566e.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgefXNjCC6Hf//zP/AmKI2HpGiOSFyWDGi2uz2Z6f7d/x9HT3jhdXprKB5c5NYGR4dKKbCcy5Mkf8ycm2/4+ONv1/dnGGOEjs0UmwHAJ8urbY4sOVhRYogms29HPdXsJg33zmYdL8U3eur79w/9r6m8/STk1icFh+5Cgrw72jJ4Qfbt20qn7HscaaZZv/d6ze/n/JsfM9d9auWX7t6HlOhvenrvLd3XSorjozTDIpIakuLjGlqr+yXOHGip01H09dYWcgBABXD2i4q5badgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/service-4.png
/* harmony default export */ const service_4 = ({"src":"/_next/static/media/service-4.e655ff94.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42mMAgWcv3zAyYAEvLs5gYnj2/DlY8vXr145vXr9QfH2pP+nlxWnrXl6aZgFX+fLlS8uXr17/f/H86a/nF+f+f3629//z81Pv/f//nwms4Pnz5+tu3Lj5/9qNO3/vnlrz88H+wv8Pj/cdAUueOXNO6sHDh+9BCm7fufvj4YN7/++c2XLnNgMDG1jByZOnZc+eO//5wMHD/48fP/n/2IlT/y9cvgEUPrd38+atpgy7du/VqalvP5uYUnApKjZ1e3Zuyfqp02Zd7OuferWsssmYAQbOHluB7FUmGAMA6FqBlZVPVrcAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./img/logo-light.svg
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo-light.0c73f970.svg","height":46,"width":140});
;// CONCATENATED MODULE: ./img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.74ebea1b.svg","height":46,"width":140});
;// CONCATENATED MODULE: ./img/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.f8b5f526.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.5b2905e9.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.513d1435.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.fb347fb8.svg","height":135,"width":136});
;// CONCATENATED MODULE: ./img/vimeo.svg
/* harmony default export */ const vimeo = ({"src":"/_next/static/media/vimeo.d401512d.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/VectorHIW.svg
/* harmony default export */ const VectorHIW = ({"src":"/_next/static/media/VectorHIW.3cdbd3a9.svg","height":105,"width":1431});
;// CONCATENATED MODULE: ./img/zgcmq.svg
/* harmony default export */ const zgcmq = ({"src":"/_next/static/media/zgcmq.01b8cd56.svg","height":99,"width":281});
;// CONCATENATED MODULE: ./img/hero.png
/* harmony default export */ const hero = ({"src":"/_next/static/media/hero.582928cc.png","height":1054,"width":1001,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42k3BPUvDQBwH4N/d/e/SNiZFm3SxhQoKFaFFHJ38IE6Cq6uDg+DHcXJ3FVwc3NQ6tNiC2mI0Tc3b5c7V52HH5/e6DcncOnGl2eziatDBP+Q1uKjPFNxSgoc5HZ5d79/xtPIdyWPuWlou4kiFhnEoJ2x9f/Hf7AYVdTNSAKuBTo92PqzlgLVK1ILPh7fYeRcFRq5jpFGMWOH1x88pbJWht0deEoikP21h1C5YqS0oirSevJS2SDLpron0tRcjNysMpz4etxhoPdS0e+DAlEBnW3lyzH90s8Tm0xzBrWDU9MXJxpAsSUfo0i4ni/wyyTkag5rpzlfsD4UWY+RUjCElAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./img/musicwave.png
/* harmony default export */ const musicwave = ({"src":"/_next/static/media/musicwave.485b7934.png","height":29,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAH0lEQVR4nGP89++fJAMDww8gZgHif0AMAkxA/AeIOQCNzQYV2y9GCAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/musicwave2.png
/* harmony default export */ const musicwave2 = ({"src":"/_next/static/media/musicwave2.e5a22c53.png","height":652,"width":1746,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nGNU6vvKI/aYmcXoFBOb5j0WQcXXn5kFBB89khe9zszN+eEfo/Skr85Kd5gFdS4wMWvdBCp495lVSPDRbWnhm2z83K+/Mxo1fWP+/p2RyWk/M6vmI2Z+hZdfmbj4HzzXkL7CxMz85z8A1hckih7dzpAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./img/update.png
/* harmony default export */ const update = ({"src":"/_next/static/media/update.3bac6033.png","height":803,"width":1120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Af/+/wAAvMNy3wLqVgoFB40I2e0TEGZgmP+0uQD9+fsAAf+6wHj07uyHxBH1ABkDFAAAzt36DR0YxCIOEQD8+PmYAf+4vdnt7ewmyP/4/BwwMgOora0BMx0fAFANFQD8+fgAAf+1vc39AgAy1BQN/f4AAQHp6OgA7Ovg/k8DGQQM/P7qAceIiLYFEhZJ5x4cABkSEAD5+vYAGwquAPDxQQD35/x6AQBFNrmGS1kfS0JE+QABAQHs5+MF8+CTFr4MQPqSHRZXLPBbu5RBWVoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./img/upload.png
/* harmony default export */ const upload = ({"src":"/_next/static/media/upload.5644ab9e.png","height":230,"width":230,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42iXHKwoCARhG0W9jgsFsFtyBwWwwuh13YBMEi00wiGJ0sPtg5vwOzD3pxshD4aNzN4qbstUonXKNfhNL5avVBk8LR6XnF29lMLNWURpzO5v0OcXLKhkydY6xvaODnovJHxpVZfoSFjnUAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./img/provider-1.png
/* harmony default export */ const provider_1 = ({"src":"/_next/static/media/provider-1.8b58862c.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mMgCApctRWnh8ofvF2rkvl/tp7a/5m6qi9b1KPmRcrvLXFV02foCdYyrHaW+N/lI/n/aavi/7ddiv+nBkr/r3YW/98ZoObEEOJgJ9ATIPdoWSTf/+dNnP/etPH/XxXN8b8nQPZNtouRDMOz6aEc3yaI3nzXbfH/7QSf3x8nuv553e30/9sE/idvprgIMbzv0bF83yH5/2Wrzv/Hndb/77Ua/X/Zbvr/Xbvo/w892m4Mj9ocJZ7WChx+2hO0YNfiqTdWz5n0+MnUtPlPqhkOPG53VGBABv///+f4/+ctL7IYAIBmal3I5EuCAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./img/provider-2.png
/* harmony default export */ const provider_2 = ({"src":"/_next/static/media/provider-2.b4b9aacf.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvklEQVR42mOAgDeMDOhA6T0TlPUZwoj4Gs/g8/UsQ8DXMwzRX8PBYrZQOYaQD2FeBZ/+Hz798/zuIz9PO2Z/+s8Q/sEbbhpryOsj6Q1vazbt+pC5YceH0LCSN+2CYa93whUohz/fxuDzdAoDwxNuBobnnAz+TxcrhT9bCVcgFfhYXzbw0X/V4AerlYLub5IJfPRHOvixKlhSzO8hM4iWDbitKu57dwYQT5UNvK0AEpPwB8pBGI+Y4cbBTYWIAQCvwUmcBZbmxQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/provider-3.png
/* harmony default export */ const provider_3 = ({"src":"/_next/static/media/provider-3.d24d39c0.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAl0lEQVR42mWPSwrCMBRFY+w2XIOjDizYRlHwM3LsDtyKdFTBNm3BDahjl2ZfFE/FDIIHDlwu3BeiPGklw2/I34PU/rInqRxFyLQf+IUCY+WQWbnibWZlryA+O61WTRctG0kWtWwxQ4MbjHeXJ2NgXbLM8YF3PNEdgzcp23ktY84bcqE867bjzD+j4hX2k9JFLDXf1X32/QdXukiLNMNVpQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./img/loadergif.gif
/* harmony default export */ const loadergif = ({"src":"/_next/static/media/loadergif.fa75fcc7.gif","height":1080,"width":1080});
;// CONCATENATED MODULE: ./img/videoPreview.png
/* harmony default export */ const videoPreview = ({"src":"/_next/static/media/videoPreview.19c4e31c.png","height":2000,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAoUlEQVR42i2MWw6CMBBFu3VF/2zpTFs6xfgAA/tRCP6RWAnxm7AAB0JyM8k5N3MFvX/UfKkdQjvQGkaWwpQ1+gCUK+dtfsFwZjRFLUBJSJUzWBb3w36XyhNqzVKgMQBgrZ2mqe97T8Se5VYYa+d5jjESBa31UvAO6NRZU1fVMUmUlAiwTt0e6DLIvOQ3CuiJEa+loG70zw+9YmgiX86C3fgHik58Fa4h0owAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./img/audioPreview.png
/* harmony default export */ const audioPreview = ({"src":"/_next/static/media/audioPreview.04bd0734.png","height":2000,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAArUlEQVR42mOYcePljOsvgOTsO++A5Kzbb2feeg1kMACp2Xffzbn/oXz+qt5DF6ZcfDjlwoNZd94yAFm9R6+UL1htw8DQs/dU9/6zxVPmTr/6jKFt8wFnXUUvN1dPO6vuPScb1u6sWbyubdthhrYtB1yNtbzc3WASu2oWrW3bfoRh6sVHfcevVyxeh2TUvOnXnoMtvwO0/GPlorV9hy5OvfgQqBToNgaEc++iOBcAUZJ+xXO2k34AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./img/AudioPreview.gif
/* harmony default export */ const AudioPreview = ({"src":"/_next/static/media/AudioPreview.b9c28910.gif","height":1080,"width":1920});
;// CONCATENATED MODULE: ./img/index.js



























/* harmony default export */ const img = ({
    provider1: provider_1,
    provider2: provider_2,
    provider3: provider_3,
    upload: upload,
    update: update,
    musiceWave: musicwave,
    musiceWave2: musicwave2,
    hero: hero,
    creatorbackground2: creatorbackground_2,
    user1: user_1,
    service1: service_1,
    service2: service_2,
    service3: service_3,
    service4: service_4,
    logo: logo,
    logoLight: logo_light,
    facebook: facebook,
    telegram: telegram,
    twitter: twitter,
    vector: VectorHIW,
    vimeo: vimeo,
    youtube: youtube,
    zgcmq: zgcmq,
    loader: loadergif,
    videoPreview: videoPreview,
    audioPreview: audioPreview,
    audioPrev: AudioPreview
});


/***/ })

};
;