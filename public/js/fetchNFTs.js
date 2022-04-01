
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
    
    switch (nfts.totalCount) {
        case 1:
            window.location = '/dd7a38e1e51d5c29ba251d44f94492359271a13d'
            break;
        case 2:
            window.location = '/8a1f8fd855871d063c8bc65dcb765f85769c4f76'
            break;
        case 3:
            window.location = '/ad528d796489545fc8429e763c4f7d4c0bf4afbc'
            break;
        case 4:
            window.location = '/435a6fe924c841d595ca7467fee1fb0179632acb'
            break;

        default:
            window.location = '/b3d806ea7039960d7dfe0bc80a9a4736b62b99f0'
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

