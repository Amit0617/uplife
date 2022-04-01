
//secret :)
const apiKey = "";

// Initialize an alchemy-web3 instance:
const web3 = AlchemyWeb3.createAlchemyWeb3(
    `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
);

// for testing purposes, easy copying ;)
//let ownerAddr1 = "0xC33881b8FD07d71098b440fA8A3797886D831061"

async function sendToPage() {
    // The wallet address we want to query for NFTs:
    let ownerAddr = document.querySelector('.search').value;

    console.log("hi");
    //let ownerAddr = ownerAddr1;
    const nfts = await web3.alchemy.getNfts({
        owner: `${ownerAddr}`
    });
    
    //Print owner's wallet address:
    console.log("fetching NFTs for address:", `${ownerAddr}`);
    console.log("...");

    // Print total NFT count returned in the response:
    console.log("number of NFTs found:", nfts.totalCount);
    console.log("...");

    // Print contract address and tokenId for each NFT:
    for (const nft of nfts.ownedNfts) {
        console.log("===");
        console.log("contract address:", nft.contract.address);
        console.log("token ID:", nft.id.tokenId);
    }
    console.log("===");
    if (nfts.totalCount) {
        window.location = '/8a1f8fd855871d063c8bc65dcb765f85769c4f76'
    }

}


// // Fetch metadata for a particular NFT:
// console.log("fetching metadata for a crypto coven NFT...");
// const response = await web3.alchemy.getNftMetadata({
//   contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",
//   tokenId: "1590"
// })

// Uncomment this line to see the full api response:
// console.log(metadata);

// // Print some commonly used fields:
// console.log("NFT name: ", response.title);
// console.log("token type: ", response.id.tokenMetadata.tokenType);
// console.log("tokenUri: ", response.tokenUri.gateway);
// console.log("image url: ", response.metadata.image);
// console.log("time last updated: ", response.timeLastUpdated);
// console.log("===");

